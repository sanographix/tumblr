// Add target="_blank" when user opens external link
(function() {
  var a = document.querySelectorAll('a');
  for (var i = 0; i < a.length; i++) {
    if (a[i].host !== location.host) {
      a[i].setAttribute('target', '_blank');
      a[i].setAttribute('rel', 'noopener noreferrer');
    }
  }
}());
