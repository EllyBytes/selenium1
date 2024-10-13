var slideIndex = 1;
var i;
var slides = document.getElementsByClassName("myslides");
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // Hide all slides
    }

    for (i = 0; i < slides.length; i++) { // Fix here: use 'i' instead of 'int'
        slides[i].className = slides[i].className.replace(" active", ""); // Remove 'active' class
    }

    slides[slideIndex - 1].style.display = "block"; // Show the current slide
}

function autoplay() {
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    showSlides(slideIndex);  
    setTimeout(autoplay, 3000); // Change slide every 3 seconds
}

autoplay();
