var ssq = {

    choseArray: [],

    init: function() {
        ssq.initChose();
        ssq.bindEvent();
    },

    // 初始化选球区
    initChose: function() {
        
        $('#chose').html('');

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

    getRedArray: function() {
        var redArray = [];
        for (var i = 1; i <= 33; i++) {
            redArray.push(i);
        }

        return redArray;
    },

    getBlueArray: function() {
        var blueArray = [];
        for (var i = 1; i <= 16; i++) {
            blueArray.push(i);
        }

        return blueArray;
    },

    getChose: function() {
        var chose = $('#chose').find('.active').clone();

        chose = $('<p></p>').append(chose);

        var redNum = chose.find('.redSpan').length;
        var blueNum = chose.find('.blueSpan').length;

        if (redNum != 6 || blueNum != 1) {
            alert('请输入6个红球和1个蓝球！');
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

    getRandom: function() {
        var redRandom, blueRandom, comb = window.comb();

        comb.getRandom(ssq.getRedArray(), 6);

        redRandom = comb.random.data;

        comb.getRandom(ssq.getBlueArray(), 1);

        blueRandom = comb.random.data;

        redRandom = redRandom.sort(function(a, b) {
            return b - a;
        });

        var container = $('<p></p>');

        for (var i = redRandom.length - 1; i >= 0; i--) {
            var redElement = $('<span class="redSpan active"></span>');
            redElement.attr('code', redRandom[i]);
            redElement.text(redRandom[i]);
            container.append(redElement);
        }

        var blueElement = $('<span class="blueSpan active"></span>');
        blueElement.attr('code', blueRandom[0]);
        blueElement.text(blueRandom[0]);
        container.append(blueElement);

        $('#chosed').append(container);
    },

    analyse: function() {
        var obj = {
                code: 1, //   号码
                type: 'red', //  号码颜色
                times: 1, //  号码出现初次
                rate: 0.11, //  号码出现频率
            },
            countArray = [];

        for (var i = 1; i <= 33; i++) {
            var codeObj = ssq.cloneObj(obj);
            codeObj.code = i;
            codeObj.type ;
        }
    },

    cloneObj: function(obj) {
        var returnObj = {};
        for (i in obj) {
            returnObj[i] = obj[i];
        }

        return returnObj;
    },

    bindEvent: function() {
        $('#getNum').click(function() {
            ssq.getChose();
            ssq.clear();
        });
        $('#clear').click(function() {
            ssq.clear();
        });
        $('#getRandom').click(function() {
            ssq.getRandom();
        });
        $('#getRandom100').click(function() {
            for (var i = 100; i >= 1; i--) {
                ssq.getRandom();
            }
        });
        $('#getRandomBy').click(function() {
            var random = +$('#ssq_setRandom').val();
            if (isNaN(random) || random < 1) {
                alert('请输入大于1的数字');
            }
            for (var i = random; i >= 1; i--) {
                ssq.getRandom();
            }
        });
        $('#clearChose').click(function() {
            ssq.clearChose();
        });
        $('#analyse').click(function() {
            ssq.analyse();
        });
    }
};

window.onload = ssq.init;
