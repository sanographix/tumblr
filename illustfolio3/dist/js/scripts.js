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

    // Installボタンを押したら、作者からのメッセージ(Lumina誘導)パネルを開く
    var $ctaPanel = $('#ctaPanel');
    $('.js-install-btn').on('click', function(e) {
        e.preventDefault();
        // 押されたボタンの親(.btn-wrapper)の中にパネルを移動して、ボタンの真下に出す
        $(this).closest('.btn-wrapper').append($ctaPanel);
        $ctaPanel.addClass('is-active');
        // 同じ場所で開いたクリックが、すぐ下の「外側クリックで閉じる」処理に届かないようにする
        e.stopPropagation();
    });

    // パネルの外側をクリックしたら閉じる
    $(document).on('click', function(e) {
        if (!$(e.target).closest('#ctaPanel').length) {
            $ctaPanel.removeClass('is-active');
        }
    });

    // Escキーでも閉じる
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape') {
            $ctaPanel.removeClass('is-active');
        }
    });

});
