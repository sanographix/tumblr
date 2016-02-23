"use strict";

$(function(){
    $("a[href^=#]").click(function() {
        var scrollHref= $(this).attr("href");
        var scrollPosition = $(scrollHref).offset().top;
        $("html,body").animate({scrollTop : scrollPosition}, '700');
        return false;
    });

    //ロード or スクロールされると実行
    $(window).on('load scroll', function(){
        //ヘッダーの高さ分(80px)スクロールするとfixedクラスを追加
        if ($(window).scrollTop() > 200) {
            $('.globalheader').addClass('is-fixed');
        } else {
            //80px以下だとfixedクラスを削除
            $('.globalheader').removeClass('is-fixed');
        }
    });


});

(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].origin !== location.origin) {
      a[i].setAttribute('target', '_blank');
    }
  }
}());

var selector_gothic = document.querySelector('.js-selector-gothic');
var selector_mincho = document.querySelector('.js-selector-micho');
var ss_gothic = document.querySelector('.js-ss-gothic');
var ss_mincho = document.querySelector('.js-ss-mincho');

selector_gothic.addEventListener('click', function(){
   ss_gothic.classList.add('is-active');
   selector_gothic.classList.add('is-active');
   ss_mincho.classList.remove('is-active');
   selector_mincho.classList.remove('is-active');
});

selector_mincho.addEventListener('click', function(){
   ss_mincho.classList.add('is-active');
   selector_mincho.classList.add('is-active');
   ss_gothic.classList.remove('is-active');
   selector_gothic.classList.remove('is-active');
});
