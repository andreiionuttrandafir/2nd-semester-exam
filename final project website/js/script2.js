var slideIndex2 = 0;
showSlides2();
var slides2,dots;

function plusSlides2(position) {
    slideIndex2 += position;
    if (slideIndex2 > slides2.length) {slideIndex2 = 1}
    else if(slideIndex2 < 1){slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
       slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");

      }
        slides2[slideIndex2-1].style.display = "block";  
        dots[slideIndex2-1].className += " active";
    }

function currentSlide2(index) {
    if (index > slides2.length) {index = 1}
    else if(index < 1){index = slides2.length}
    for (i = 0; i < slides2.length; i++) {
       slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
        slides2[index-1].style.display = "block";  
        dots[index-1].className += " active";
    }

function showSlides2() {
    var i;
    slides2 = document.getElementsByClassName("mySlides2");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides2.length; i++) {
       slides2[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2> slides2.length) {slideIndex2 = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 3000); // Change image every 3 seconds
}
