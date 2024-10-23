let currentIndex = 0;
const images = document.querySelectorAll('.slider-img');

function showSlide(index) {
    if (index >= images.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = images.length - 1;
    } else {
        currentIndex = index;
    }
    images.forEach((img, i) => {
        img.style.display = (i === currentIndex) ? 'block' : 'none';
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Initialize the slider by showing the first image
showSlide(currentIndex);
