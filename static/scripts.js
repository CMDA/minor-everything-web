//quotes even laten scrollen
//voor de 'discoverability' weetjewel - http://whatis.techtarget.com/definition/discoverability-in-UX-design
//beetje easing https://www.kirupa.com/html5/introduction_to_easing_in_javascript.htm

var q = document.querySelector('aside > div')
var i = .01

function preScroll() {
  i += .035
  q.scrollLeft += (10 * i);
  if (q.scrollLeft<200) {
    window.requestAnimationFrame(preScroll)
  }
}

window.requestAnimationFrame(preScroll)
