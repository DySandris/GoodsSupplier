// Footer Mini Animation (optional for hover)
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.mini-footer a');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.textDecoration = 'underline';
      });
      link.addEventListener('mouseleave', () => {
        link.style.textDecoration = 'none';
      });
    });
  });
  