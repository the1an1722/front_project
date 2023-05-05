let prevScrollPos = window.pageYOffset;
const nav = document.querySelector('nav');

window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    nav.classList.remove('hidden');
  } else {
    nav.classList.add('hidden');
  }
  prevScrollPos = currentScrollPos;
}
const toggleBtn = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', () => {
  toggleBtn.classList.toggle('active');
  menu.classList.toggle('active');
});




const sendEgiftBtn = document.querySelector('#send-egift');
sendEgiftBtn.addEventListener('click', function() {
  location.href = 'https://www.starbucks.com/gift';
});

