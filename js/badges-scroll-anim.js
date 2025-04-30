// document.addEventListener("DOMContentLoaded", () => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add("visible");
//           observer.unobserve(entry.target);
//         }
//       });
//     }, {
//       threshold: 0.3,
//     });
  
//     document.querySelectorAll(".animate-on-scroll").forEach(el => observer.observe(el));
//   });

 
  
  document.addEventListener("DOMContentLoaded", () => {
    const badges = document.querySelectorAll(".animate-on-scroll");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.1 });
  
    badges.forEach(badge => observer.observe(badge));
  });
  