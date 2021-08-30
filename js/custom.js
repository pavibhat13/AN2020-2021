
var slideIndextest = 1;
showSlidesTest(slideIndextest);

function plusSlidesTest(n) {
  showSlidesTest(slideIndextest += n);
}

// function currentSlideIn(n) {
//   showSlidesIn(slideIndexIn = n);
// }

function showSlidesTest(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesTest");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndextest = 1 }
  if (n < 1) { slideIndextest = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" activeSlide", "");
  // }
  slides[slideIndextest - 1].style.display = "block";
  // dots[slideIndexIn - 1].className += " activeSlide";
}


var slideIndextest2 = 1;
showSlidesTest2(slideIndextest2);

function plusSlidesTest2(n) {
  showSlidesTest2(slideIndextest2 += n);
}

// function currentSlideIn(n) {
//   showSlidesIn(slideIndexIn = n);
// }

function showSlidesTest2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesTest2");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndextest2 = 1 }
  if (n < 1) { slideIndextest2 = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" activeSlide", "");
  // }
  slides[slideIndextest2 - 1].style.display = "block";
  // dots[slideIndexIn - 1].className += " activeSlide";
}