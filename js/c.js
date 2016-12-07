/**
 *  组合方法
 */
;
(function() {

    function C( options ) {

        if ( !( this instanceof C ) ) {
            return new C( options );
        }

        var defaults = {
            array: [],
            n: 0,
            auto:false
        }

        this . init( options || defaults );

        return this;
    }

    C.prototype = {

        init: function( options ) {
        	if( !options.array && !options.array.length || !options.n ){
        		throw '缺少必要参数';
        		return;
        	}

        	if(options.auto){
        		this . loop ( options.array , options.n , [] );
        	}
        },

        renderData : function(){

        	if( !options.array && !options.array.length || !options.n ){
        		throw '缺少必要参数';
        		return;
        	}

        	this.restoreArray = [];

    		this . loop ( options.array , options.n , [] );
        },

        loop: function( array , n , behindArray ) {

			if ( n == array.length ) {

                check( behindArray.concat( array ) );

            } else {

                for ( var i = 0; i < array.length; i++ ) {

                    if ( n == 1 ) {
                        
                       this.restore( behindArray.concat( array[i] ) );

                    } else {

                        var cArray = this.cloneArray( array );

                        var _behindArray = this.cloneArray( behindArray );
                        _behindArray.push( cArray.splice(i, 1)[0] );

                        this.loop( cArray , n - 1 , _behindArray );

                        array.splice(i, 1)[0];
                        i--;
                    }

                }
            }
        },

        restore : function( array ){

        	this.restoreArray = this.restoreArray ? this.restoreArray . push( array ) : [ array ];

        	this.data = this.restoreArray;
        },

        getRandom : function(){
        	
        },

        clearRestoreArray : function(){

        	this.restoreArray = [];
        },

    	cloneArray : function( array ){

            var returnArray = [];
            for ( var i = 0 ; i < array.length ; i++ ) {
                returnArray.push( array[i] );
            }

            return returnArray;
    	}

    }

    window.comb = C;

})();
