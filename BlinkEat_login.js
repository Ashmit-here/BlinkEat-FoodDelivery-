// Apply saved theme from main page
const currentTheme = localStorage.getItem('theme') || 'light';
document.body.classList.add(currentTheme + '-mode');

// Back button functionality with smooth transition
const backBtn = document.querySelector('.back-btn');

backBtn.addEventListener('click', (e) => {
  e.preventDefault();
  
  // Add fade out animation
  document.body.style.opacity = '0';
  document.body.style.transition = 'opacity 0.3s ease';
  
  // Navigate after animation
  setTimeout(() => {
    window.location.href = 'BlinkEat.html';
  }, 300);
});