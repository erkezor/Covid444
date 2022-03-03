(function ($) {
  $(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");
  });
})(jQuery);
var ss = document.querySelectorAll(".btn").length;
for(var i = 0; i<ss; i++){
  document.querySelectorAll(".btn")[i].addEventListener("click", function(){
    var audio = new Audio ('sound/sound.mp3');
    audio.play();
  });
};

var kp = document.querySelector(".form-control").addEventListener('keypress', highlight);

function highlight(text) {
  var inputText = document.getElementsByClassName("card-title");
  var innerHTML = inputText.innerHTML;
  var index = innerHTML.indexOf(text);
  if (index >= 0) { 
   innerHTML = innerHTML.substring(0,index) + "<span class='highlight'>" + innerHTML.substring(index,index+text.length) + "</span>" + innerHTML.substring(index + text.length);
   inputText.innerHTML = innerHTML;
  }
}