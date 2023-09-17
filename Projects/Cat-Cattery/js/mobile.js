document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-button');
  const submenu = document.querySelector('.submenu');

  // Toggle the active class and show/hide the submenu when the menu button is clicked
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    submenu.classList.toggle('show');
  });

  // Scroll to the target element when a submenu link is clicked
  submenu.addEventListener('click', event => {
    const target = event.target.closest('a[data-target]');
    if (target) {
      event.preventDefault();
      const targetId = target.getAttribute('data-target');
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        submenu.classList.remove('show');
        menuButton.classList.remove('active');
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});
