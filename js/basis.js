$(document).ready(function () {

    $('.zol_basis .tip').tooltipsy({
        delay: 0,
        offset: [0, -1],
        className: 'tooltipsy',
        content: function ($el, $tip) {
            $tip.html($el.next().html());
        }
    });


    $(function () {
        $.getJSON('/color.json', function (data) {
            $.each(data, function (key, val) {
                $('.color_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/design.json', function (data) {
            $.each(data, function (key, val) {
                $('.design_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/sizes.json', function (data) {
            for (var i = 0; i < data.sizes.length; i++) {
                var _values = data.sizes[i];

                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" id="' + _values.id + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
            }
        });
    });
    $('.color_select').select2({
        minimumResultsForSearch: Infinity
    });
    $('.design_select').select2({
        minimumResultsForSearch: Infinity
    });


    $('.color_select').on('change', function () {
        $('.design_select').empty();
        $('.bx_filter_checkbox_wrapper').empty();
        $.getJSON('/design1.json', function (data) {
            $.each(data, function (key, val) {
                $('.design_select').append('<option value="">------</option>');
                $('.design_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/sizes1.json', function (data) {
            for (var i = 0; i < data.sizes.length; i++) {
                var _values = data.sizes[i];

                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" id="' + _values.id + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
            }
        });
    });
    $('.design_select').on('change', function () {
        $('.color_select').empty();
        $('.bx_filter_checkbox_wrapper').empty();
        $.getJSON('/color1.json', function (data) {
            $.each(data, function (key, val) {
                $('.color_select').append('<option value="">------</option>');
                $('.color_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/sizes1.json', function (data) {
            for (var i = 0; i < data.sizes.length; i++) {
                var _values = data.sizes[i];

                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" id="' + _values.id + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
            }
        });
    });
    $(document).on('change', '.bx_filter_checkbox_wrapper input[type="checkbox"]', function () {
        $('.color_select').empty();
        $('.design_select').empty();
        $.getJSON('/color1.json', function (data) {
            $.each(data, function (key, val) {
                $('.color_select').append('<option value="">------</option>');
                $('.color_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/design1.json', function (data) {
            $.each(data, function (key, val) {
                $('.design_select').append('<option value="">------</option>');
                $('.design_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
    });

});