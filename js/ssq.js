var ssq = {

    init: function() {
        ssq.initChose();
    },

    // 初始化选球区
    initChose: function() {

        // 添加红蓝选区容器
        $('#chose').append('<div id="redContainer"></div><div id="blueContainer"></div>')

        // 初始化红球选区
        var redElement, redElementHtml = '<span class="redSpan"></span>';

        for (var red = 1; red < 34; red++) {
            redElement = $(redElementHtml);
            redElement.attr('code', red);
            redElement.text('' + red);
            redElement.click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).addClass('active');
                }
            });
            $('#redContainer').append(redElement);
        }

        // 初始化蓝球选区
        var blueElement, blueElementHtml = '<span class="blueSpan"></span>';

        for (var blue = 1; blue < 17; blue++) {
            blueElement = $(blueElementHtml);
            blueElement.attr('code', blue);
            blueElement.text('' + blue);
            blueElement.click(function() {
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).addClass('active');
                }
            });
            $('#blueContainer').append(blueElement);
        }
    },

    getChose: function() {
        var chose = $('.active').clone();

        chose = $('<p></p>').append(chose);

        $('#chosed').append(chose);
    }
};

window.onload = ssq.init;
