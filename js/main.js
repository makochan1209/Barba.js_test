Barba.Pjax.init();
//Barba.Prefetch.init();

/* アニメーションの関数を記述
--------------------------------------------------*/
var HideShowTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },

  finish: function() {
    document.body.scrollTop = 0;
    this.done();
  }
});
  
  Barba.Pjax.HideShowTransition = function() {
    return FadeTransition;
  };
  
Barba.BaseView.init();
Barba.Pjax.start();