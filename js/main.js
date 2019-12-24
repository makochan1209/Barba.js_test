Barba.Pjax.init();
//Barba.Prefetch.init();

var PageTransition = Barba.BaseTransition.extend({
    start: function() {
        // startはページトランジションの開始時に呼び出されるメソッド
        var _this = this;
        var _LoadOut =  new Promise(function(resolve) { 
            _this.LoadOut(resolve);
        });
 
        // トランジション開始と同時にnewContainerLoadingメソッドも呼ばれ、
        // トランジション用のメソッドとどちらもresolve()であればthen()が呼ばれる。
        Promise
            .all([this.newContainerLoading, this.loadOut()])
            .then(this.loadIn.bind(this));
    },
    loadOut :function(resolve){
        // 何かアニメーション処理を書いてその処理が完了した際にresolve()を実行する。
        resolve();
    },
    loadIn :function(){
        var _this = this;
        // 完了
        _this.done();
    },
});

// returnに作ったトランジションを設定。
Barba.Pjax.getTransition = function() {
    return PageTransition;
};

Barba.Pjax.start();