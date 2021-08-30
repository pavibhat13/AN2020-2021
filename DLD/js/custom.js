// let Scrollbar = window.Scrollbar;
// const options = {
//   'damping': 0.5,
//   // 'renderByPixels': false,
//   'alwaysShowTracks': true
// }
// Scrollbar.init(document.querySelector('#my-scrollbar'), options);
// Scrollbar.init(document.querySelector('#card-scrollbar1'), options);
// Scrollbar.init(document.querySelector('#card-scrollbar2'), options);
// Scrollbar.init(document.querySelector('#card-scrollbar3'), options);
// Scrollbar.init(document.querySelector('#card-scrollbar4'), options);

AOS.init();

// if ($(html).hasClass("translated-ltr")) {
//   console.log("translated"); .goog-te-banner-frame 
// }

// document.addEventListener('DOMSubtreeModified', function (e) {
//   if(e.target.tagName === 'HTML' && window.google) {
//       if(e.target.className.match('translated')) {
//           // page has been translated
//           console.log("translated");
//           $(".lavalamp-menu").addClass("lavalamp-menu-top");
//        } else {
//           // page has been translated and translation was canceled
//           console.log("not translated");
//           $(".lavalamp-menu").removeClass("lavalamp-menu-top");
//       }
//  }
// }, true);

// $(".goog-close-link > img").click(function () {
//   console.log("not translated");
//   $(".lavalamp-menu").removeClass("lavalamp-menu-top");
// });

$(".info").hover(function () {
  var data_id_info = $(this).attr('data-id');
  $('.infoText').hide();
  $('#content' + data_id_info).show();
}, function () {
  $('.infoText').hide();
});
// -------------------section 1-------------------
function readMoreFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
    $(".section-1-desc3").css("display", "none");
    $(".section-1-heading").addClass("section-1-heading-effect", 2000, "swing");
    $(".section-1-desc1").addClass("section-1-desc1-padding", 2000, "swing");
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
    $(".section-1-desc3").css("display", "block");
    $(".section-1-heading").removeClass("section-1-heading-effect", 2000, "swing");
    $(".section-1-desc1").removeClass("section-1-desc1-padding", 2000, "swing");
  }

}

// -------------------section 2-------------------
var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-count').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
          duration: 5000,
          easing: 'swing',
          step: function (now) {
            $(this).text(Math.ceil(now));
          }
        });
    });
    a = 1;
  }

});

// -------------------section 3-------------------

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

// var slideIndex = 1;
// // showSlides(slideIndex);
// showSlides();

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   // var dots = document.getElementsByClassName("dot");
//   // if (n > slides.length) { slideIndex = 1 }
//   // if (n < 1) { slideIndex = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}  
//   // for (i = 0; i < dots.length; i++) {
//   //     dots[i].className = dots[i].className.replace(" active", "");
//   // }
//   slides[slideIndex - 1].style.display = "block";
//   setTimeout(showSlides, 5000); 
//   // dots[slideIndex - 1].className += " active";
// }
// -------------------section 4-------------------
$("#content41").show();
$("#showDiv41").addClass("activeMenu4");
$(".showDiv4").on('click',function(){
    var hello1 = $(this).attr('data-id');
    $('.hidden4').hide();
    $('#content'+hello1).show();
    $(".showDiv4").removeClass("activeMenu4");//to toggle back all non active menu item
    $(this).addClass("activeMenu4");  //to turn selected menu item to active state
 });

 $("#hiddenScreenshot41").show();
 $(".project1").css("text-decoration", "underline");
$(".projectName").on('click',function(){
    var hello1 = $(this).attr('data-id');
    $('.hiddenScreenshotImg').hide();
    $('#hiddenScreenshot'+hello1).show();
    $(".projectName").css("text-decoration", "none");
    $(this).css("text-decoration", "underline");
 });

//  $(".degreedBtn").click(function () {
//   $(".degreedAssets").toggle("slow");
//   $(".intrepidAssets").css("display", "none");
// });
// $(".intrepidBtn").click(function () {
//   $(".intrepidAssets").toggle("slow");
//   $(".degreedAssets").css("display", "none");
// });

 var slideIndexIn = 1;
showSlidesIn(slideIndexIn);

function plusSlidesIn(n) {
  showSlidesIn(slideIndexIn += n);
}

// function currentSlideIn(n) {
//   showSlidesIn(slideIndexIn = n);
// }

function showSlidesIn(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesIn");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndexIn = 1 }
  if (n < 1) { slideIndexIn = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" activeSlide", "");
  // }
  slides[slideIndexIn - 1].style.display = "block";
  // dots[slideIndexIn - 1].className += " activeSlide";
}

var slideIndexHTML = 1;
showSlidesHTML(slideIndexHTML);

function plusSlidesHTML(n) {
  showSlidesHTML(slideIndexHTML += n);
}

function currentSlide(n) {
  showSlidesHTML(slideIndexHTML = n);
}

function showSlidesHTML(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesHTML");
  // var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndexHTML = 1 }
  if (n < 1) { slideIndexHTML = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  // for (i = 0; i < dots.length; i++) {
  //     dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndexHTML - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}

// -------------------section 5-------------------
$(".cardBox1").on('click', function () {
  console.log("clicked");
  $('.collapse1').collapse("show");
  $(".cardBox1").animate({
    marginTop: "10%"
  }, 500, function () {
    // Animation complete.
  });
  $('.footer').css("position", "relative");
  $(".cardBox1").css("pointer-events","none");
  $(".arrow1").css("display", "none");
});

$(".cardBox2").on('click', function () {
  console.log("clicked");
  $('.collapse2').collapse("show");
  $(".cardBox2").animate({
    marginTop: "10%"
  }, 500, function () {
    // Animation complete.
  });
  $('.footer').css("position", "relative");
  $(".cardBox2").css("pointer-events","none");
  $(".arrow2").css("display", "none");
});

$(".cardBox3").on('click', function () {
  console.log("clicked");
  $('.collapse3').collapse("show");
  $(".cardBox3").animate({
    marginTop: "10%"
  }, 500, function () {
    // Animation complete.
  });
  $('.footer').css("position", "relative");
  $(".cardBox3").css("pointer-events","none");
  $(".arrow3").css("display", "none");
});

$(".cardBox4").on('click', function () {
  console.log("clicked");
  $('.collapse4').collapse("show");
  $(".cardBox4").animate({
    marginTop: "10%"
  }, 500, function () {
    // Animation complete.
  });
  $('.footer').css("position", "relative");
  $(".cardBox4").css("pointer-events","none");
  $(".arrow4").css("display", "none");
});


var slideIndexTrends = 1;
showSlidesTrends(slideIndexTrends);

function plusSlidesTrends(n) {
  showSlidesTrends(slideIndexTrends += n);
}

function showSlidesTrends(n) {
  var i;
  var slides = document.getElementsByClassName("mySlidesTrends");
  if (n > slides.length) { slideIndexTrends = 1 }
  if (n < 1) { slideIndexTrends = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndexTrends - 1].style.display = "block";
}

function aiReadMoreFunction() {
  var dots = document.getElementById("aiDots");
  var moreText = document.getElementById("aiMore");
  var btnText = document.getElementById("aiBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }

}

// -------------------section 6-------------------
var slideIndexTest = 1;
var millisTest = 10000;
var intervalTest;

startSlidesTest();

function startSlidesTest(){
  pauseSlidesTest();
  nextSlideTest();
  intervalTest = setInterval(nextSlideTest, millisTest);
}


function resumeSlidesTest() {
  nextSlideTest();
}

function pauseSlidesTest() {
  clearInterval(intervalTest);
}

function nextSlideTest() {
  showSlideTest();
  slideIndexTest++;
}

function plusSlidesTest(n) {
  clearInterval(intervalTest);
  slideIndexTest += n;
  nextSlideTest();
  intervalTest = setInterval(nextSlideTest, millisTest);
}

function currentSlideTest(n) {
  clearInterval(intervalTest);
  slideIndexTest = n + 1;
  nextSlideTest();
  intervalTest = setInterval(nextSlide, millis);
}

function showSlideTest() {
  var i;
  var slides = document.getElementsByClassName("mySlidesTest");
  var dots = document.getElementsByClassName("dotTest");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  if (slideIndexTest > slides.length) {
      slideIndexTest = 1;
  }
  if (slideIndexTest < 1) {
      slideIndexTest = slides.length;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlideTest", "");
  }
  slides[slideIndexTest - 1].style.display = "block";
  dots[slideIndexTest - 1].className += " activeSlideTest";
}

// var slideIndexTest = 0;
// showSlidesTest();

// // function plusSlidesIn(n) {
// //   showSlidesIn(slideIndexIn += n);
// // }

// function currentSlideTest(n) {
//   showSlidesTest(slideIndexTest = n);
// }

// function showSlidesTest() {
//   var i;
//   var slides = document.getElementsByClassName("mySlidesTest");
//   var dots = document.getElementsByClassName("dotTest");
//   // if (n > slides.length) { slideIndexTest = 1 }
//   // if (n < 1) { slideIndexTest = slides.length }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndexTest++;
//   if (slideIndexTest > slides.length) {slideIndexTest = 1} 
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" activeSlideTest", "");
//   }
//   slides[slideIndexTest - 1].style.display = "block";
//   dots[slideIndexTest - 1].className += " activeSlideTest";
//   setTimeout(showSlidesTest, 8000); // Change image every 2 seconds
// }

// ----------footer----------------
$(".cta-more1").hover(function () {
  $(".cta-more-box1").addClass("boxActive1");
}, function () {
  $(".cta-more-box1").removeClass("boxActive1");
});
$(".cta-more2").hover(function () {
  $(".cta-more-box2").addClass("boxActive2");
}, function () {
  $(".cta-more-box2").removeClass("boxActive2");
});
$(".cta-more3").hover(function () {
  $(".cta-more-box3").addClass("boxActive3");
}, function () {
  $(".cta-more-box3").removeClass("boxActive3");
});