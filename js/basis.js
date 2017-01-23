$(document).ready(function() {

	$('.zol_basis .tip').tooltipsy({
		delay: 0,
		offset: [0,-1],
		className: 'tooltipsy',
		content: function ($el, $tip) {
			$tip.html( $el.next().html() );
		}
	});

});
