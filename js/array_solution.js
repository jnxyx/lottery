(function() {
    function solution(options) {

        var array = options.array || [],
            number = options.number,
            has = false;

        for (var i = 1; i <= array.length; i++) {
            if (C(array, i)) {
                // has = true;
                // alert('存在');
                // break;
            }
        }
        // if (!has) {

        //     alert('不存在');
        // }


        function C(array, n) {
            var array = cloneArray(array);

            var result = valiArray(array, n, []);

            return result || true;
        }

        function valiArray(array, n, behindArray) {
            if (n == array.length) {
                return check(array);
            } else {
                for (var i = 0; i < array.length; i++) {

                    if (n == 1) {
                        var result = check(behindArray.concat(array[i]));
                        if (result) {
                            return true;
                        }
                    } 
                    // else if (n == array.length) {
                    //     var result = check(array);
                    //     if (result) {
                    //         return true;
                    //     }
                    // } 
                    else {
                        var cArray = cloneArray(array);
                        var _behindArray = cloneArray(behindArray);
                        _behindArray.push(cArray.splice(i, 1)[0]);
                        valiArray(cArray, n - 1, _behindArray);
                        array.splice(i, 1)[0];
                        i--;
                    }

                }
            }
        }

        function cloneArray(array) {
            var returnArray = [];
            for (var i = 0; i < array.length; i++) {
                returnArray.push(array[i]);
            }
            return returnArray;
        }

        function check(_array) {
            console.log(_array);
            return false;
            var num = 0;
            for (var i = _array.length - 1; i >= 0; i--) {
                num += _array[i];
            }

            return number == num ? true : false;
        }
    }

    window.solution = solution;
})()
