document.addEventListener('DOMContentLoaded', function() {
    // Testimonial Slider Functionality
    const testimonials = document.querySelectorAll('.testimonial');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    let currentIndex = 0;
    
    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToTestimonial(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = document.querySelectorAll('.dot');
    
    // Update slider
    function updateSlider() {
        testimonials.forEach((testimonial, index) => {
            testimonial.classList.remove('active', 'prev');
            
            if (index === currentIndex) {
                testimonial.classList.add('active');
            } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                testimonial.classList.add('prev');
            }
        });
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Go to specific testimonial
    function goToTestimonial(index) {
        currentIndex = index;
        updateSlider();
    }
    
    // Next testimonial
    function nextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateSlider();
    }
    
    // Previous testimonial
    function prevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateSlider();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextTestimonial);
    prevBtn.addEventListener('click', prevTestimonial);
    
    // Auto-rotate testimonials
    let sliderInterval = setInterval(nextTestimonial, 5000);
    
    // Pause on hover
    const slider = document.querySelector('.testimonials-slider');
    slider.addEventListener('mouseenter', () => {
        clearInterval(sliderInterval);
    });
    
    slider.addEventListener('mouseleave', () => {
        sliderInterval = setInterval(nextTestimonial, 5000);
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextTestimonial();
        } else if (e.key === 'ArrowLeft') {
            prevTestimonial();
        }
    });
    
    // Smooth hover effects for buttons
    const buttons = document.querySelectorAll('button, .learn-more-btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
});