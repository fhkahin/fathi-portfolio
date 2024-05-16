let slideIndex = 0;
let slideshowPaused = false;
let slideshowTimeout;

showSlides();

function plusSlides(n) {
    clearTimeout(slideshowTimeout);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(slideshowTimeout);
    showSlides(slideIndex = n);
}

function toggleSlideshow() {
    slideshowPaused = !slideshowPaused;
    if (!slideshowPaused) {
        showSlides(slideIndex);
    }
}

function showSlides(n = slideIndex) {
    let i;
    let slides = document.getElementsByClassName("slide");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove("fade");
    }

    // Reset slideIndex if it exceeds the number of slides
    if (n > slides.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.length;
    }

    // Display the current slide and add fade effect
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].classList.add("fade");

    // Increment slideIndex for automatic slide transition
    slideIndex++;

    // Set the next slide to appear after 1 second (1000 milliseconds)
    if (!slideshowPaused) {
        slideshowTimeout = setTimeout(() => showSlides(slideIndex), 2000);
    }
}
