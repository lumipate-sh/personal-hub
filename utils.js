const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', () => document.documentElement.dataset.theme = themeToggle.checked ? 'dark' : 'light');
themeToggle.checked = localStorage.theme === 'dark';