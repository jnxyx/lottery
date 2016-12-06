var ssq = {

    choseArray: [],

    init: function() {
        ssq.initChose();
        ssq.bindEvent();
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
        var chose = $('#chose').find('.active').clone();

        chose = $('<p></p>').append(chose);

        var redNum = chose.find('.redSpan').length;
        var blueNum = chose.find('.blueSpan').length;

        if (redNum < 6 || blueNum == 0) {
            return;
        }

        $('#chosed').append(chose);
    },

    clear: function() {
        $('#chose').find('.redSpan,.blueSpan').removeClass('active');
    },

    clearChose: function() {
        $('#chosed').html('');
        ssq.choseArray = [];
    },

    bindEvent: function() {
        $('#getNum').click(function() {
            ssq.getChose();
            ssq.clear();
        });
        $('#clear').click(function() {
            ssq.clear();
        });
        $('#clearChose').click(function() {
            ssq.clearChose();
        });
    }
};

window.onload = ssq.init;
