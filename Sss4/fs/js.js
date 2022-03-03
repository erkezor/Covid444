(function ($) {
  $(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });
})(jQuery);
function slowScroll(id){
            $('html, body').animate({
               scrollTop: $(id).offset().top
            }, 500);
         }

         $(document).on("scroll", function(){
            if($(window).scrollTop() === 0)
               $("header").removeClass("fixed");
            else
               $("header").attr("class", "fixed");
         });
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};
var das = document.querySelector(".icon-box");
das.onmouseenter = function(){
  this.style.borderColor = "white";
  this.style.boxShadow = "10px 20px 30px gray";
  this.style.transform = "translateY(-10px)";
}
das.onmouseleave = function(){
  this.style.borderColor = null;
  this.style.boxShadow = null;
  this.style.transform = null;
}
var das = document.querySelectorAll(".icon-box")[1];
das.onmouseenter = function(){
  this.style.borderColor = "white";
  this.style.boxShadow = "10px 20px 30px gray";
  this.style.transform = "translateY(-10px)";
}
das.onmouseleave = function(){
  this.style.borderColor = null;
  this.style.boxShadow = null;
  this.style.transform = null;
}
var das = document.querySelectorAll(".icon-box")[2];
das.onmouseenter = function(){
  this.style.borderColor = "white";
  this.style.boxShadow = "10px 20px 30px gray";
  this.style.transform = "translateY(-10px)";
}
das.onmouseleave = function(){
  this.style.borderColor = null;
  this.style.boxShadow = null;
  this.style.transform = null;
}
var das = document.querySelectorAll(".icon-box")[3];
das.onmouseenter = function(){
  this.style.borderColor = "white";
  this.style.boxShadow = "10px 20px 30px gray";
  this.style.transform = "translateY(-10px)";
}
das.onmouseleave = function(){
  this.style.borderColor = null;
  this.style.boxShadow = null;
  this.style.transform = null;
}
var das = document.querySelectorAll(".icon-box")[4];
das.onmouseenter = function(){
  this.style.borderColor = "white";
  this.style.boxShadow = "10px 20px 30px gray";
  this.style.transform = "translateY(-10px)";
}
das.onmouseleave = function(){
  this.style.borderColor = null;
  this.style.boxShadow = null;
  this.style.transform = null;
}
var das = document.querySelectorAll(".icon-box")[5];
das.onmouseenter = function(){
  this.style.borderColor = "white";
  this.style.boxShadow = "10px 20px 30px gray";
  this.style.transform = "translateY(-10px)";
}
das.onmouseleave = function(){
  this.style.borderColor = null;
  this.style.boxShadow = null;
  this.style.transform = null;
};

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
  slides[currentSlide].className = 'slide';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide showing';
}

var playing = true;
var pauseButton = document.getElementById('pause');

function pauseSlideshow(){
  pauseButton.innerHTML = 'Play';
  playing = false;
  clearInterval(slideInterval);
}

function playSlideshow(){
  pauseButton.innerHTML = 'Pause';
  playing = true;
  slideInterval = setInterval(nextSlide,2000);
}

pauseButton.onclick = function(){
  if(playing){ pauseSlideshow(); }
  else{ playSlideshow(); }
};

var ss = document.querySelectorAll(".btn").length;
for(var i = 0; i<ss; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var audio = new Audio ('sound/sound.mp3');
    audio.play();
  });
};

