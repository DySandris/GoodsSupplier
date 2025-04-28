// Explore Section Counters (DySandris + BePakistaniBuyPakistani)
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; 
  
    counters.forEach(counter => {
      const animate = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText.replace(/,/g, '');
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment).toLocaleString();
          setTimeout(animate, 20);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      animate();
    });
  });
  