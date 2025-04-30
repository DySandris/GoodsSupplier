// Sign In button click
document.querySelector('.signin-btn')?.addEventListener('click', () => {
  console.log('Sign In clicked');
  window.location.href = "/signin.html"; // Update as needed
});

// Sign Up button click
document.querySelector('.signup-btn')?.addEventListener('click', () => {
  console.log('Sign Up clicked');
  window.location.href = "/signup.html"; // Update as needed
});

// Language/Currency click (placeholder dropdown)
document.querySelector('.language-btn')?.addEventListener('click', () => {
  alert("Language & Currency options coming soon!");
});

// Camera icon functionality (if added)
document.querySelector('.camera-btn')?.addEventListener('click', () => {
  alert("Open camera or upload image feature coming soon!");
});

// Focus/Blur animation on search input
const searchInput = document.querySelector('.search-input');
searchInput?.addEventListener('focus', () => {
  searchInput.classList.add('focused');
});

searchInput?.addEventListener('blur', () => {
  searchInput.classList.remove('focused');
});
