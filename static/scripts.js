(function(){
  var comments = document.querySelector('aside > div'),
      title = document.querySelector('h1'),
      i = .01,
      pos = 120

  function preScroll() {
    i += .035
    comments.scrollLeft += (10 * i);
    if (comments.scrollLeft<pos) {
      requestAnimationFrame(preScroll)
    }
  }

  requestAnimationFrame(preScroll)

  title.addEventListener('click', () => {
    document.body.classList.toggle('show-comments')
  })

}())

//quotes even laten scrollen
//voor de 'discoverability' weetjewel - http://whatis.techtarget.com/definition/discoverability-in-UX-design
//beetje easing https://www.kirupa.com/html5/introduction_to_easing_in_javascript.htm
