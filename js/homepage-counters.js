// Home Page Count Up + Fade Animation
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.count-up');
  
    counters.forEach(counter => {
      let started = false;
  
      const animate = () => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 200;
        let current = 0;
  
        const update = () => {
          current += increment;
          if (current < target) {
            counter.innerText = Math.floor(current).toLocaleString();
            requestAnimationFrame(update);
          } else {
            counter.innerText = target.toLocaleString();
          }
        };
        update();
      };
  
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !started) {
            started = true;
            animate();
          }
        });
      }, { threshold: 0.7 });
  
      observer.observe(counter);
    });
  });
  