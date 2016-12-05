(
    function solution(options) {

        var array = options.array || [],
            number = options.number,
            has = false;

        for (var i = 1; i <= array.length; i++) {
            if (C(array, i)) {
                has = true;
                alert('存在');
                break;
            }
        }
        if (!has) {

            alert('不存在');
        }


        function C(array, n) {



            if (true) {
                return true;
            }

            return false;
        }

        function valiArray(array, n) {

            if (n == 1) {

            } else {
                for (var i = 1; i <= n; i++) {
                    array[i];
                    var cArray = cloneArray(array);
                    cArray = cArray.splice(i);
                    valiArray(cArray, n - 1);
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
            var num = 0;
            for (var i = _array.length - 1; i >= 0; i--) {
                num += _array[i];
            }

            return number == num ? true : false;
        }
    }
    
)()
