// Initialize category sliders
function initCategorySliders() {
    const sliders = document.querySelectorAll('.categories-slider-container');
    
    sliders.forEach(container => {
        const slider = container.querySelector('.categories-slider');
        const prevBtn = container.querySelector('.prev-arrow');
        const nextBtn = container.querySelector('.next-arrow');
        const categoryRow = container.querySelector('.category-row');
        const cardWidth = container.querySelector('.category-card').offsetWidth;
        const gap = 15; // Same as CSS gap
        
        let scrollPosition = 0;
        const scrollAmount = (cardWidth + gap) * 3; // Scroll 3 cards at a time
        
        // Next button click
        nextBtn.addEventListener('click', () => {
            scrollPosition += scrollAmount;
            if (scrollPosition > slider.scrollWidth - slider.clientWidth) {
                scrollPosition = slider.scrollWidth - slider.clientWidth;
            }
            slider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
        
        // Previous button click
        prevBtn.addEventListener('click', () => {
            scrollPosition -= scrollAmount;
            if (scrollPosition < 0) {
                scrollPosition = 0;
            }
            slider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        });
        
        // Mouse wheel scrolling
        slider.addEventListener('wheel', (e) => {
            e.preventDefault();
            slider.scrollLeft += e.deltaY;
        });


        // Slider functionality
        document.querySelectorAll('.categories-slider-container').forEach(container => {
        const slider = container.querySelector('.categories-slider');
        const prev = container.querySelector('.prev-arrow');
        const next = container.querySelector('.next-arrow');
    
        prev.addEventListener('click', () => {
        slider.scrollBy({ left: -300, behavior: 'smooth' });
        });
    
         next.addEventListener('click', () => {
         slider.scrollBy({ left: 300, behavior: 'smooth' });
        });
        });

        
        // Touch support for mobile
        let isDown = false;
        let startX;
        let scrollLeft;
        
        slider.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        });
        
        slider.addEventListener('mouseleave', () => {
            isDown = false;
        });
        
        slider.addEventListener('mouseup', () => {
            isDown = false;
        });
        
        slider.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initCategorySliders();
    
    // Make section headers clickable
    document.querySelectorAll('.section-header').forEach(header => {
        header.addEventListener('click', function() {
            // You can add specific behavior here if needed
            // Currently it's handled by the onclick attribute in HTML
        });
    });
});

