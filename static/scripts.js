//quotes even laten scrollen
//voor de 'discoverability' weetjewel - http://whatis.techtarget.com/definition/discoverability-in-UX-design
//beetje easing https://www.kirupa.com/html5/introduction_to_easing_in_javascript.htm

// (function() {
//   var comments = document.querySelector('aside > div'),
//     title = document.querySelector('h1'),
//     i = 0.01,
//     pos = 120;

//   function preScroll() {
//     i += 0.035;
//     comments.scrollLeft += 10 * i;
//     if (comments.scrollLeft < pos) {
//       requestAnimationFrame(preScroll);
//     }
//   }

//   requestAnimationFrame(preScroll);

//   title.addEventListener('click', () => {
//     document.body.classList.toggle('show-comments');
//   });
// })();


anime({
  targets: 'h1 svg polygon',
  points: [
    { value: [
      '50,25 250,25 150,200',
      '60,35 225,55 130,180']
    }
  ],
  easing: 'linear',
  duration: 2000,
  loop: true,
  direction:'alternate',
  easing: 'spring(1, 20, 10, 0)'
});