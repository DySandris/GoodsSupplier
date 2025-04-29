// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get all feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    
    // Add event listeners to each card
    featureCards.forEach((card, index) => {
      // Mouse enter effect
      card.addEventListener('mouseenter', function() {
        this.classList.add('active');
        
        // Enhance icon effect
        const icon = this.querySelector('.feature-icon svg');
        if (icon) {
          icon.style.transform = 'scale(1.2) rotate(5deg)';
          icon.style.transition = 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        }
        
        // Enhance text effect
        const heading = this.querySelector('h3');
        const paragraph = this.querySelector('p');
        
        if (heading) {
          heading.style.transform = 'translateX(8px)';
        }
        
        if (paragraph) {
          paragraph.style.color = 'rgba(255, 255, 255, 1)';
        }
      });
      
      // Mouse leave effect
      card.addEventListener('mouseleave', function() {
        this.classList.remove('active');
        
        // Reset icon
        const icon = this.querySelector('.feature-icon svg');
        if (icon) {
          icon.style.transform = 'scale(1)';
        }
        
        // Reset text
        const heading = this.querySelector('h3');
        const paragraph = this.querySelector('p');
        
        if (heading) {
          heading.style.transform = 'translateX(0)';
        }
        
        if (paragraph) {
          paragraph.style.color = 'rgba(255, 255, 255, 0.8)';
        }
      });
      
      // Click effect
      card.addEventListener('click', function() {
        // First remove pulse class from all cards
        featureCards.forEach(c => c.classList.remove('pulse'));
        
        // Add pulse animation to clicked card
        this.classList.add('pulse');
        
        // Remove pulse class after animation completes
        setTimeout(() => {
          this.classList.remove('pulse');
        }, 1500);
        
        // Scroll to the card if needed
        this.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
      });
      
      // Set initial staggered animation
      card.style.opacity = '0';
      card.style.transform = 'translateY(30px)';
      card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      
      // Trigger entrance animation with staggered timing
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 150 * index);
    });
    
    // Setup interval for highlighting a random feature every few seconds
    setupRandomHighlight();
  });
  
  // Function to highlight features randomly to draw attention
  function setupRandomHighlight() {
    const highlightInterval = 8000; // 8 seconds between highlights
    
    setInterval(() => {
      const cards = document.querySelectorAll('.feature-card');
      
      // Don't highlight if user is probably interacting with the page
      if (document.querySelector('.feature-card:hover, .feature-card.active')) {
        return;
      }
      
      // Pick a random card to highlight
      const randomIndex = Math.floor(Math.random() * cards.length);
      
      // Add subtle highlight
      cards[randomIndex].classList.add('pulse');
      
      // Remove highlight after animation
      setTimeout(() => {
        cards[randomIndex].classList.remove('pulse');
      }, 1500);
    }, highlightInterval);
  }