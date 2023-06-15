document.addEventListener('DOMContentLoaded', () => {

  const menuButton = document.querySelector('.menu-button');
  const submenu = document.querySelector('.submenu');
  const submenuItems = submenu.querySelectorAll('a'); // Get all secondary menu items

  const submenuLevel3 = document.querySelector('.submenu-level-3');
  const backButton = document.querySelector('.back-button');

  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('active');
    submenu.classList.toggle('show');
    submenuLevel3.classList.remove('show');
  });

  submenu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
      if (event.target === submenuItems[0]) { // Select the first secondary menu item using the index
        event.preventDefault();
        submenuLevel3.classList.toggle('show');
      }
    }
  });

  backButton.addEventListener('click', () => {
    submenuLevel3.classList.remove('show');
  });
});

