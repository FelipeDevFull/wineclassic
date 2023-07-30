
$(document).ready(function(){


  

  //Animação Home
  $(".section_home h1").css("opacity", "1");
  $(".container_img").css("top", "20%");
  // var mq = window.matchMedia( "(min-width: 980px)" );
  // if (mq.matches) {
  //   $(".container_img").css("top", "20%");
  // }
 

  //Buttons Section Home
  $(".button_about").click(function(){
    $(".section_about").css("bottom", "0%");
  });
  $(".button_product").click(function(){
    $(".section_home").css("display", "none");
    $(".section_product_slideshow").css("display", "block");
  });
  $(".button_contact").click(function(){
    $(".section_contact").css("left", "0%");
    $(".section_contact h2").css("opacity", "1");
    $(".section_contact p").css("opacity", "1");
    $(".section_contact button").css("opacity", "1");
    $(".section_contact_container_social").css("opacity", "1");
  });
  

  //Button Section About
  $(".section_about_button_home").click(function(){
    $(".section_about").removeAttr("style");
  });
  var slider = document.getElementById("myRange");
  slider.oninput = function() {
    var valor = this.value;
    document.getElementById("section_about_slide_first").style.marginLeft = '-'+valor+'%';
  } 
 

  //Button/slide Section Product
  $(".button_home_product").click(function(){
    $(".section_product_slideshow").css("display", "none");
    $(".section_home").css("display", "block");
  });
  
  let slideIndex = 1;
  showSlides(slideIndex);
  document.getElementById("prev").onclick = function() {
    var n = -1;
    showSlides(slideIndex += n);
  }
  document.getElementById("next").onclick = function() {
    var n = 1;
    showSlides(slideIndex += n);
  }  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";
  }


  //Button Section Contact
  $(".button_home_contact").click(function(){
    $(".section_contact").removeAttr("style");
  });

});