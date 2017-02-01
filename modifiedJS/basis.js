$(document).ready(function () {

    $('.zol_basis .tip').tooltipsy({
        delay: 0,
        offset: [0, -1],
        className: 'tooltipsy',
        content: function ($el, $tip) {
            $tip.html($el.next().html());
        }
    });

    $("#bx_filter_form").serialize();
    
    //Get options for color, design, size selects from JSONs
    //    var size_option = $('.bx_filter_checkbox_wrapper input[type="checkbox"]:checked').val();
    $.getJSON('/bitrix/templates/zolotoy/ajax/colors.php', function (data) {
        $('.color_select').append('<option value="">------</option>');
        $.each(data, function (key, val) {
            $('.color_select').append('<option value="' + val.ID + '">' + val.NAME + '</option>');
            var color_option = $('.color_select option:selected').val();
            $('#colorval').val(color_option);
        });
    });
    $.getJSON('/bitrix/templates/zolotoy/ajax/design.php', function (data) {
        $('.design_select').append('<option value="">------</option>');
        $.each(data, function (key, val) {
            $('.design_select').append('<option value="' + val.ID + '">' + val.NAME + '</option>');
            var design_option = $('.design_select option:selected').val();
            $('#designval').val(design_option);
        });
    });
    $.getJSON('/bitrix/templates/zolotoy/ajax/sizes.php', function (data) {
        for (var i = 0; i < data.length; i++) {
            var _values = data[i];
            $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" name="size" value="' + _values.ID + '">');
            $('.bx_filter_checkbox_wrapper').append('<span>' + _values.NAME + '</span>');
        }
    });

    //    Initilizaiting select2
    $('.color_select').select2({
        minimumResultsForSearch: Infinity
    });
    $('.design_select').select2({
        minimumResultsForSearch: Infinity
    });

    //    var options = [2, 2.5, 3, 4, 6.5]; //options for slider
    //    Options for UI slider


    //    $.getJSON('/slider-options.json', function (data) {
    //        var options = [];        
    //        $.each(data, function (key, val) {
    //            $('.slider_options').append('<span>' + val + '</span>');
    //            options.push(val);
    //        });
    ////       console.log(options);     
    //        
    //    //    UI slider with CHANGE other filtre's options
    //    $("#slider-range").slider({
    //        range: true,
    //        min: 0,
    //        max: options.length - 1,
    //        values: [0, options.length - 1],
    //        change: function (event, ui) {
    //            var op1 = $("#slider-range").slider("values", 0);
    //            var op2 = $("#slider-range").slider("values", 1);
    //            $('#sliderval1').val(options[op1]);
    //            $('#sliderval2').val(options[op2]);
    //            $('.color_select').empty();
    //            $('.design_select').empty();
    //            $('.bx_filter_checkbox_wrapper').empty();
    //            $.getJSON('/color1.json', function (data) {
    //                $.each(data, function (key, val) {
    //                    $('.color_select').append('<option value="">------</option>');
    //                    $('.color_select').append('<option value="' + key + '">' + val + '</option>');
    //                });
    //            });
    //            $.getJSON('/design1.json', function (data) {
    //                $.each(data, function (key, val) {
    //                    $('.design_select').append('<option value="">------</option>');
    //                    $('.design_select').append('<option value="' + key + '">' + val + '</option>');
    //                });
    //            });
    //            $.getJSON('/sizes1.json', function (data) {
    //                var sval = $('.bx_filter_checkbox_wrapper input[type="checkbox"]:checked').val();
    //                for (var i = 0; i < data.sizes.length; i++) {
    //                    var _values = data.sizes[i];
    //                    $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" name="size"' + ((_values.id.indexOf(sval) > -1) ? ' checked ' : '') + 'value="' + _values.text + '">');
    //                    $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
    //                }
    //            });
    //            $("#show_button").fadeIn(300);
    //        }
    //    });
    //});


    //Change design, size and slider filtre's options
    $('.color_select').on('change', function () {
        var color_option = $('.color_select option:selected').val();
        $('#colorval').val(color_option);
        $("#bx_filter_form").serialize();
        var dval = $('.design_select option:selected').val();
        //        var sval = $('.bx_filter_checkbox_wrapper input[type="checkbox"]:checked').val();
        $('.design_select').empty();
        //        $("#slider-range").slider("destroy");
        $.getJSON('/bitrix/templates/zolotoy/ajax/design.php', function (data) {
            $('.design_select').append('<option value="">------</option>');
            $.each(data, function (key, val) {
                $('.design_select').append('<option' + (val.ID == dval ? ' selected' : '') + ' value="' + val.ID + '">' + val.NAME + '</option>');
                //$('.design_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/bitrix/templates/zolotoy/ajax/sizes.php', function (data) {
            var sval = [];
            $('.bx_filter_checkbox_wrapper input[type="checkbox"]:checked').each(function () {
                sval.push($(this).val());
            });
            $('.bx_filter_checkbox_wrapper').empty();
            for (var i = 0; i < data.length; i++) {
                var _values = data[i];
                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" name="size"' + ((sval.indexOf(_values.ID) != -1) ? ' checked ' : '') + 'value="' + _values.ID + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.NAME + '</span>');
            }
        });


        //        $("#slider-range").slider({
        //            range: true,
        //            min: 0,
        //            max: options.length - 1,
        //            values: [1, options.length - 1]
        //        });
        //        var op1 = $("#slider-range").slider("values", 0);
        //        var op2 = $("#slider-range").slider("values", 1);
        //        $('#sliderval1').val(options[op1]);
        //        $('#sliderval2').val(options[op2]);
        $("#show_button").fadeIn(300);
    });
    //Change color, size and slider filtre's options
    $('.design_select').on('change', function () {
        var design_option = $('.design_select option:selected').val();
        $('#designval').val(design_option);
        $("#bx_filter_form").serialize();
        var cval = $('.color_select option:selected').val();
        $('.color_select').empty();
        //        $("#slider-range").slider("destroy");
        $.getJSON('/bitrix/templates/zolotoy/ajax/colors.php', function (data) {
            $('.color_select').append('<option value="">------</option>');
            $.each(data, function (key, val) {
                $('.color_select').append('<option' + (val.ID == cval ? ' selected' : '') + ' value="' + val.ID + '">' + val.NAME + '</option>');
            });
        });
        $.getJSON('/bitrix/templates/zolotoy/ajax/sizes.php', function (data) {
            var sval = [];
            $('.bx_filter_checkbox_wrapper input[type="checkbox"]:checked').each(function () {
                sval.push($(this).val());
            });
            $('.bx_filter_checkbox_wrapper').empty();
            for (var i = 0; i < data.length; i++) {
                var _values = data[i];
                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" name="size"' + ((sval.indexOf(_values.ID) != -1) ? ' checked ' : '') + 'value="' + _values.ID + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.NAME + '</span>');
            }

        });
        //        $("#slider-range").slider({
        //            range: true,
        //            min: 0,
        //            max: options.length - 1,
        //            values: [0, options.length-1]
        //        });
        //        var op1 = $("#slider-range").slider("values", 0);
        //        var op2 = $("#slider-range").slider("values", 1);
        //        $('#sliderval1').val(options[op1]);
        //        $('#sliderval2').val(options[op2]);
        $("#show_button").fadeIn(300);
    });
    //Change color, design and slider filtre's options
    $(document).on('change', '.bx_filter_checkbox_wrapper input[type="checkbox"]', function () {
        var size_option = $('.bx_filter_checkbox_wrapper input[type="checkbox"]:checked').val();
        $('#sizeval').val(size_option);
        $("#bx_filter_form").serialize();
        var dval = $('.design_select option:selected').val();
        var cval = $('.color_select option:selected').val();
        $('.color_select').empty();
        $('.design_select').empty();
        //        $("#slider-range").slider("destroy");
        if ($(this).prop("checked")) {
            $.getJSON('/bitrix/templates/zolotoy/ajax/colors.php', function (data) {
                $('.color_select').append('<option value="">------</option>');
                $.each(data, function (key, val) {
                    $('.color_select').append('<option' + (val.ID == cval ? ' selected' : '') + ' value="' + val.ID + '">' + val.NAME + '</option>');
                });
            });
            $.getJSON('/bitrix/templates/zolotoy/ajax/design.php', function (data) {
                $('.design_select').append('<option value="">------</option>');
                $.each(data, function (key, val) {
                    $('.design_select').append('<option' + (val.ID == dval ? ' selected' : '') + ' value="' + val.ID + '">' + val.NAME + '</option>');
                });
            });
            //            $("#slider-range").slider({
            //                range: true,
            //                min: 0,
            //                max: options.length - 1,
            //                values: [1, options.length-1]
            //            });
            //            var op1 = $("#slider-range").slider("values", 0);
            //            var op2 = $("#slider-range").slider("values", 1);
            //            $('#sliderval1').val(options[op1]);
            //            $('#sliderval2').val(options[op2]);
            $("#show_button").fadeIn(300);
        } else {
            $.getJSON('/bitrix/templates/zolotoy/ajax/colors.php', function (data) {
                $('.color_select').append('<option value="">------</option>');
                $.each(data, function (key, val) {
                    $('.color_select').append('<option' + (val.ID == cval ? ' selected' : '') + ' value="' + val.ID + '">' + val.NAME + '</option>');
                });
            });
            $.getJSON('/bitrix/templates/zolotoy/ajax/design.php', function (data) {
                $('.design_select').append('<option value="">------</option>');
                $.each(data, function (key, val) {
                    $('.design_select').append('<option' + (val.ID == dval ? ' selected' : '') + ' value="' + val.ID + '">' + val.NAME + '</option>');
                });
            });
            //            $("#slider-range").slider({
            //                range: true,
            //                min: 0,
            //                max: options.length - 1,
            //                values: [1, options.length-1]
            //            });
        }
    });    
});