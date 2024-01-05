document.addEventListener('DOMContentLoaded', function() {
    const scrollLeftButton = document.querySelector('.scroll-left');
    const scrollRightButton = document.querySelector('.scroll-right');
    const reviewsContainer = document.querySelector('.reviews-container');
    const reviewItemWidth = document.querySelector('.review-item').offsetWidth + 20; // 20px for the gap

    let isScrolling;

    scrollLeftButton.addEventListener('click', () => {
        if (isScrolling) {
            clearTimeout(isScrolling);
        }
        reviewsContainer.scrollBy({ left: -reviewItemWidth, behavior: 'smooth' });
        isScrolling = setTimeout(() => { isScrolling = false; }, 500);
    });

    scrollRightButton.addEventListener('click', () => {
        if (isScrolling) {
            clearTimeout(isScrolling);
        }
        reviewsContainer.scrollBy({ left: reviewItemWidth, behavior: 'smooth' });
        isScrolling = setTimeout(() => { isScrolling = false; }, 500);
    });
});
