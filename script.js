document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('theme-toggle');

  if (toggleButton) {
    const icon = toggleButton.querySelector('i');
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      icon.classList.replace('fa-moon', 'fa-sun');
    }

    toggleButton.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');

      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');

      if (isDark) {
        icon.classList.replace('fa-moon', 'fa-sun');
      } else {
        icon.classList.replace('fa-sun', 'fa-moon');
      }
    });
  }

  const expandButtons = document.querySelectorAll('.expand-btn');
  expandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.block').classList.toggle('collapsed');
    });
  });

  const copyables = document.querySelectorAll('.copyable');
  copyables.forEach(el => {
    el.addEventListener('click', () => {
      const textToCopy = el.getAttribute('data-text');
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = el.textContent;
        el.textContent = 'Скопировано!';
        setTimeout(() => {
          el.textContent = originalText;
        }, 1500);
      });
    });
  });

  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});