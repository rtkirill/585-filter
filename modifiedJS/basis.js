$(document).ready(function () {

    $('.zol_basis .tip').tooltipsy({
        delay: 0,
        offset: [0, -1],
        className: 'tooltipsy',
        content: function ($el, $tip) {
            $tip.html($el.next().html());
        }
    });

    //Get options for color, design, size selects from JSONs
    $(function () {
        $.getJSON('/bitrix/templates/zolotoy/ajax/color.json', function (data) {
            $.each(data, function (key, val) {
                $('.color_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/bitrix/templates/zolotoy/ajax/design.json', function (data) {
            $.each(data, function (key, val) {
                $('.design_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/bitrix/templates/zolotoy/ajax/sizes.json', function (data) {
            for (var i = 0; i < data.sizes.length; i++) {
                var _values = data.sizes[i];

                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" id="' + _values.id + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
            }
        });
    });
    //    Initilizaiting select2
    $('.color_select').select2({
        minimumResultsForSearch: Infinity
    });
    $('.design_select').select2({
        minimumResultsForSearch: Infinity
    });
    //    UI slider with CHANGE other filtre's options
    var options = [2, 2.5, 3, 4, 6.5]; //options for slider
    $(function () {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: options.length - 1,
            values: [0, 5],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            },
            change: function (event, ui) {
                $('.color_select').empty();
                $('.design_select').empty();
                $('.bx_filter_checkbox_wrapper').empty();
                $.getJSON('/bitrix/templates/zolotoy/ajax/color1.json', function (data) {
                    $.each(data, function (key, val) {
                        $('.color_select').append('<option value="">------</option>');
                        $('.color_select').append('<option value="' + key + '">' + val + '</option>');
                    });
                });
                $.getJSON('/bitrix/templates/zolotoy/ajax/design1.json', function (data) {
                    $.each(data, function (key, val) {
                        $('.design_select').append('<option value="">------</option>');
                        $('.design_select').append('<option value="' + key + '">' + val + '</option>');
                    });
                });
                $.getJSON('/bitrix/templates/zolotoy/ajax/sizes1.json', function (data) {
                    for (var i = 0; i < data.sizes.length; i++) {
                        var _values = data.sizes[i];

                        $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" id="' + _values.id + '">');
                        $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
                    }
                });
            }
        });
        $("#amount").val("$" + $("#slider-range").slider("values", 0) +
            " - $" + $("#slider-range").slider("values", 1));

    });
    //    Options for UI slider
    $.getJSON('/bitrix/templates/zolotoy/ajax/slider-options.json', function (data) {
        $.each(data, function (key, val) {
            $('.slider_options').append('<span>' + val + '</span>');
        });
    });

    //Change design, size and slider filtre's options
    $('.color_select').on('change', function () {
        $('.design_select').empty();
        $('.bx_filter_checkbox_wrapper').empty();
        $("#slider-range").slider("destroy");
        $.getJSON('/bitrix/templates/zolotoy/ajax/design1.json', function (data) {
            $.each(data, function (key, val) {
                $('.design_select').append('<option value="">------</option>');
                $('.design_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/bitrix/templates/zolotoy/ajax/sizes1.json', function (data) {
            for (var i = 0; i < data.sizes.length; i++) {
                var _values = data.sizes[i];

                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" id="' + _values.id + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
            }
        });
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: options.length - 1,
            values: [1, 2],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
    });
    //Change color, size and slider filtre's options
    $('.design_select').on('change', function () {
        $('.color_select').empty();
        $('.bx_filter_checkbox_wrapper').empty();
        $("#slider-range").slider("destroy");
        $.getJSON('/bitrix/templates/zolotoy/ajax/color1.json', function (data) {
            $.each(data, function (key, val) {
                $('.color_select').append('<option value="">------</option>');
                $('.color_select').append('<option value="' + key + '">' + val + '</option>');
            });
        });
        $.getJSON('/bitrix/templates/zolotoy/ajax/sizes1.json', function (data) {
            for (var i = 0; i < data.sizes.length; i++) {
                var _values = data.sizes[i];
                $('.bx_filter_checkbox_wrapper').append('<input type="checkbox" id="' + _values.id + '">');
                $('.bx_filter_checkbox_wrapper').append('<span>' + _values.text + '</span>');
            }
        });
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: options.length - 1,
            values: [0, 3],
            slide: function (event, ui) {
                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            }
        });
    });
    //Change color, design and slider filtre's options
    $(document).on('change', '.bx_filter_checkbox_wrapper input[type="checkbox"]', function () {
        $('.color_select').empty();
        $('.design_select').empty();
        $("#slider-range").slider("destroy");
        if ($(this).prop("checked")) {
            $.getJSON('/bitrix/templates/zolotoy/ajax/color1.json', function (data) {
                $.each(data, function (key, val) {
                    $('.color_select').append('<option value="">------</option>');
                    $('.color_select').append('<option value="' + key + '">' + val + '</option>');
                });
            });
            $.getJSON('/bitrix/templates/zolotoy/ajax/design1.json', function (data) {
                $.each(data, function (key, val) {
                    $('.design_select').append('<option value="">------</option>');
                    $('.design_select').append('<option value="' + key + '">' + val + '</option>');
                });
            });
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: options.length - 1,
                values: [1, 2],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
        } else {
            $.getJSON('/bitrix/templates/zolotoy/ajax/color.json', function (data) {
                $.each(data, function (key, val) {
                    $('.color_select').append('<option value="' + key + '">' + val + '</option>');
                });
            });
            $.getJSON('/bitrix/templates/zolotoy/ajax/design.json', function (data) {
                $.each(data, function (key, val) {
                    $('.design_select').append('<option value="' + key + '">' + val + '</option>');
                });
            });
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: options.length - 1,
                values: [0, 5],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
        }
    });

    //Serialize
    $("#bx_filter_form").on("submit", function (event) {
        event.preventDefault();
        console.log($(this).serialize());
    });

});