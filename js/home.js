//Function to create carousel effect
var slideIndex=0;
autoCarousel();

function autoCarousel(){
    var i;
    var slides = document.getElementsByClassName("carouHolder");
    var dots = document.getElementsByClassName("dot");

    for (i=0;i<3;i++){
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slideIndex++;
    if(slideIndex > slides.length-1)
    {
        slideIndex = 0;
    }
    slides[slideIndex].style.display="block";
    dots[slideIndex].className += " active";
    setTimeout(autoCarousel, 1500); // Change image every 1.5 second
}
