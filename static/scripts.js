//quotes even laten scrollen
//voor de 'discoverability' weetjewel - http://whatis.techtarget.com/definition/discoverability-in-UX-design
var q = document.querySelector('aside > div');
var scroller = window.setInterval(scrollanimate, 10);
function scrollanimate() {
    q.scrollLeft += 1;
    if(q.scrollLeft>100){
        clearInterval(scroller);
    }
}
