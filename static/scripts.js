(function(){
  var el = document.querySelector('aside > div')
  var i = .01;
  var pos = 120;

  function preScroll() {
    i += .035
    el.scrollLeft += (10 * i);
    if (el.scrollLeft<pos) {
      requestAnimationFrame(preScroll)
    }
  }

  requestAnimationFrame(preScroll)

}());

//quotes even laten scrollen
//voor de 'discoverability' weetjewel - http://whatis.techtarget.com/definition/discoverability-in-UX-design
//beetje easing https://www.kirupa.com/html5/introduction_to_easing_in_javascript.htm
