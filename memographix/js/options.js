$(function() {
  setTimeout(function(){
    $("body").addClass('load');
    
    $('.hatena-star-add-button').tipsy({
    gravity: 's',
    fade: false, 
    });
    
    $('.hatena-star-add-button').attr("title","★をつける");
  },1200);
});
function init()
{
  FLAutoKerning.process($('header h1 a'), FLAutoKerning.DEFAULT_KERNING_INFO);
  FLAutoKerning.process($('.entry-content h1'), FLAutoKerning.DEFAULT_KERNING_INFO);
  FLAutoKerning.process($('.entry-content h2'), FLAutoKerning.DEFAULT_KERNING_INFO);
  FLAutoKerning.process($('.entry-content h3'), FLAutoKerning.DEFAULT_KERNING_INFO);
  FLAutoKerning.process($('.entry-content h4'), FLAutoKerning.DEFAULT_KERNING_INFO);
  FLAutoKerning.process($('.entry-content h5'), FLAutoKerning.DEFAULT_KERNING_INFO);
  FLAutoKerning.process($('.entry-content h6'), FLAutoKerning.DEFAULT_KERNING_INFO);
}