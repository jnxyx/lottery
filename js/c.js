/**
 *  组合方法
 */
;
(function() {

    function C(options) {

        if (!(this instanceof C)) {
            return new C(options);
        }

        var defaults = {
            array: [],
            n: 0,
            auto: false
        }

        this.options = this.extend(defaults, options);

        this.length = this.options.length;

        this.random = {
            data: [],
            type: 'empty' // filling finish
        }

        this.init(this.options);

        return this;
    }

    C.prototype = {

        init: function(options) {
            if (!options.array && !options.array.length || !options.n) {
                throw '缺少必要参数';
                return;
            }

            if (options.auto) {
                this.loop(options.array, options.n, []);
            }
        },

        renderData: function() {

            if (!options.array && !options.array.length || !options.n) {
                throw '缺少必要参数';
                return;
            }

            this.restoreArray = [];

            this.loop(options.array, options.n, []);
        },

        loop: function(array, n, behindArray) {

            if (n == array.length) {

                check(behindArray.concat(array));

            } else {

                for (var i = 0; i < array.length; i++) {

                    if (n == 1) {

                        this.restore(behindArray.concat(array[i]));

                    } else {

                        var cArray = this.cloneArray(array);

                        var _behindArray = this.cloneArray(behindArray);
                        _behindArray.push(cArray.splice(i, 1)[0]);

                        this.loop(cArray, n - 1, _behindArray);

                        array.splice(i, 1)[0];
                        i--;
                    }

                }
            }
        },

        restore: function(array) {

            this.restoreArray = this.restoreArray ? this.restoreArray.push(array) : [array];

            this.data = this.restoreArray;
        },

        getRandom: function(array, number) {
            if (this.random.type == 'finish') {
                this.random.data = [];
            }

            number = +number > array.length ? array.length : +number;
            if (number == 0) {
                this.random.type == 'finish';

                return this.random.data;
            }

            this.random.type == 'filling';

            var random = parseInt((number - 1) * Math.random());

            this.random.data.push(array.splice(random, 1));

            this.getRandom(array, --number);
        },

        clearRestoreArray: function() {

            this.restoreArray = [];
        },

        cloneArray: function(array) {

            var returnArray = [];
            for (var i = 0; i < array.length; i++) {
                returnArray.push(array[i]);
            }

            return returnArray;
        },

        each: function(loopable, callback, self) {

            //保存追加参数
            var additionalArgs = Array.prototype.slice.call(arguments, 3);

            if (loopable) {
                //数组类型
                if (loopable.length === +loopable.length) {

                    var i;
                    for (i = 0; i < loopable.length; i++) {
                        callback.apply(self, [loopable[i], i].concat(additionalArgs));
                    }
                }
                //对象类型
                else {

                    for (var item in loopable) {
                        callback.apply(self, [loopable[item], item].concat(additionalArgs));
                    }
                }
            }
        },

        extend: function(base) {

            var self = this;

            self.each(Array.prototype.slice.call(arguments, 1), function(extensionObject) {

                self.each(extensionObject, function(value, key) {

                    if (extensionObject.hasOwnProperty(key)) {
                        base[key] = value;
                    }
                });
            });

            return base;
        }

    }

    window.comb = C;

})();
