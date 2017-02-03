$(document).ready(function () {

	$('.zol_products .tip').tooltipsy({
		delay: 0,
		offset: [0, -1],
		className: 'tooltipsy',
		content: function ($el, $tip) {
			$tip.html($el.next().html());
		}
	});

	$('.bx_filter_checkbox_wrapper').bind('reload', function(){
		var old_val = [];
		if($('.bx_filter_checkbox_wrapper').attr('data-val').length)
		{
			old_val = $('.bx_filter_checkbox_wrapper').attr('data-val').split(",");
			$('.bx_filter_checkbox_wrapper').attr('data-val','');
		}
		if(old_val.length)
		{
			for (var i = 0; i < old_val.length; i++)
			{
				$('#bx_filter_form').append('<input type="hidden" name="size" value="'+old_val[i]+'" class="size_old" \>');
			}
		}

		$.getJSON('/bitrix/templates/zolotoy/ajax/sizes2.php', $('#bx_filter_form').serialize(), function (data) {
			$('.bx_filter_checkbox_wrapper INPUT[type="checkbox"]:checked').each(function(){
				old_val.push( $(this).val() );	
			});
			$('.bx_filter_checkbox_wrapper').empty();
			for (var i = 0; i < data.length; i++)
			{
				var _values = data[i];
				$('.bx_filter_checkbox_wrapper').append('<input type="checkbox" name="size" value="' + _values.ID + '"' + ((old_val.indexOf(_values.ID) > -1) ? 'checked' : '') + '>');
				$('.bx_filter_checkbox_wrapper').append('<span>' + _values.NAME + '</span>');
			}
			$('#bx_filter_form .size_old').remove();

			$('.bx_filter_checkbox_wrapper INPUT[type="checkbox"]').on('change', function(){
				$("#show_button").fadeIn(300);
				$('#slider-range').trigger('reload');
			});
		});
	});

	$('#slider-range').bind('reload', function(){
		var old_val = [];
			
		if($('#slider-range').attr('data-val').length)
		{
			old_val = $('#slider-range').attr('data-val').split(",");
			$("#arrFilter_P3_MIN").val(old_val[0]);
			$("#arrFilter_P3_MAX").val(old_val[1]);
			$('#slider-range').attr('data-val','');
		}

		console.log($('#bx_filter_form').serialize());
		$.getJSON('/bitrix/templates/zolotoy/ajax/price.php', $('#bx_filter_form').serialize(), function (data) {
			var old_min = $("#arrFilter_P3_MIN").val();
			var old_max = $("#arrFilter_P3_MAX").val();

			var _min = (old_min != '') ? old_min : parseInt(data[0]);
			var _max = (old_max != '') ? old_max : parseInt(data[1]);

			if($("#slider-range").hasClass('ui-slider'))
				$("#slider-range").slider("destroy");

			$("#slider-range").slider({
				range: true,
				min: parseInt(data[0]),
				max: parseInt(data[1]),
				values: [_min, _max],
				change: function (event, ui) {
					$("#arrFilter_P3_MIN").val($("#slider-range").slider("values", 0));
					$("#arrFilter_P3_MAX").val($("#slider-range").slider("values", 1));
	        	        	$("#show_button").fadeIn(300);
				},
				create: function(event, ui) {
					$('.slider_options').empty();
					$.each(data, function (key, val) {
						$('.slider_options').append('<span>' + val + '</span>');
					});
				},
				slide: function (event, ui) {
					$("#arrFilter_P3_MIN").val($("#slider-range").slider("values", 0));
					$("#arrFilter_P3_MAX").val($("#slider-range").slider("values", 1));
				}
			});
			$("#slider-range").on("slidechange", function(event, ui){
				$('.bx_filter_checkbox_wrapper').trigger('reload');
			});
		});
	});

	$('.bx_filter_checkbox_wrapper').trigger('reload');
	$('#slider-range').trigger('reload');

});