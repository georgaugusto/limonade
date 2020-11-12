let last_known_scroll_position = 0;
let ticking = false;

let slideInLeft = document.getElementById("left")
let slideInRight = document.getElementById("right")
let expand = document.getElementById("expand")

let visibleElement = document.getElementById("visible")

function doSomething(scroll_pos) {
  x = window.scrollY;
  if (x > 1000 & x < 1400 ) {
    slideInLeft.classList.add("slide-in-left");
    slideInRight.classList.add("slide-in-right");
    expand.classList.add("tracking-in-expand");
    
    visibleElement.classList.remove('visible')
  }
}

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});