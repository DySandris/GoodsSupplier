document.addEventListener('DOMContentLoaded', function() {
    // Make header sticky (already done with CSS, this is for scroll effects)
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
        }
    });

    // Mobile menu toggle would go here
    // For desktop version, we don't need it yet
    
    // Country selector functionality
    const countrySelectors = document.querySelectorAll('.country-selector');
    countrySelectors.forEach(selector => {
        selector.addEventListener('click', function() {
            // Add country selection logic here
            console.log('Country selector clicked');
        });
    });

    // Language selector functionality
    const languageSelectors = document.querySelectorAll('.language-selector');
    languageSelectors.forEach(selector => {
        selector.addEventListener('click', function() {
            // Add language selection logic here
            console.log('Language selector clicked');
        });
    });
});