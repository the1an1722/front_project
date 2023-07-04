
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const submenu = document.querySelector('.submenu');
  
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    submenu.classList.toggle('show');
  });

  submenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      event.preventDefault();
      const targetId = event.target.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        submenu.classList.remove('show');
        menuButton.classList.remove('active');
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
