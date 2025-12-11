// Dark/Light Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
body.classList.add(currentTheme + '-mode');

// Update button icon based on current theme
updateToggleIcon();

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
  }
  updateToggleIcon();
});

function updateToggleIcon() {
  const icon = themeToggle.querySelector('.theme-icon');
  if (body.classList.contains('dark-mode')) {
    icon.textContent = '☀️';
  } else {
    icon.textContent = '🌙';
  }
}
