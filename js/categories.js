// Animate categories on scroll
function animateCategoriesOnScroll() {
  const categoryCards = document.querySelectorAll('.category-card');
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
          }
      });
  }, { threshold: 0.1 });
  
  categoryCards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = `all 0.5s ease ${index * 0.1}s`;
      observer.observe(card);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  animateCategoriesOnScroll();
  
  // Add click animation to category cards
  document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('click', function(e) {
          // Add a ripple effect
          const ripple = document.createElement('span');
          ripple.className = 'ripple-effect';
          
          const rect = this.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          
          ripple.style.width = ripple.style.height = `${size}px`;
          ripple.style.left = `${e.clientX - rect.left - size/2}px`;
          ripple.style.top = `${e.clientY - rect.top - size/2}px`;
          
          this.appendChild(ripple);
          
          setTimeout(() => {
              ripple.remove();
          }, 1000);
      });
  });
});