$(function(){

    //ロード or スクロールされると実行
    $(window).on('load scroll', function(){
        //ヘッダーの高さ分(80px)スクロールするとfixedクラスを追加
        if ($(window).scrollTop() > 740) {
            $('.navbar').addClass('fixed');
        } else {
            //80px以下だとfixedクラスを削除
            $('.navbar').removeClass('fixed');
        }
    });

    // 外部サイトにはtarget blankする
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });

    $("a[href^=#]").click(function() {
        var scrollHref= $(this).attr("href");
        var scrollPosition = $(scrollHref).offset().top;
        $("html,body").animate({scrollTop : scrollPosition}, '700');
        return false;
    });

});