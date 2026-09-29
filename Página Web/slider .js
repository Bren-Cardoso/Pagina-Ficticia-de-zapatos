document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const carouselContainer = document.querySelector('.carousel-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let index = 0;
    const productWidth = document.querySelector('.product').offsetWidth;
    const productsCount = document.querySelectorAll('.product').length;
    const visibleProducts = Math.floor(carousel.offsetWidth / productWidth);

    function updateIndex() {
        if (index < 0) {
            index = 0;
        } else if (index > productsCount - visibleProducts) {
            index = productsCount - visibleProducts;
        }
    }

    function updateSlider() {
        carouselContainer.style.transform = `translateX(-${index * productWidth}px)`;
    }

    function prevSlide() {
        index--;
        updateIndex();
        updateSlider();
    }

    function nextSlide() {
        index++;
        updateIndex();
        updateSlider();
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
});

  