document.addEventListener('DOMContentLoaded', () => {
  let prevScrollPos = window.pageYOffset;
  const nav = document.querySelector('nav');

  /**
   * Attach an event listener to the window scroll event.
   * On scroll, toggle the 'hidden' class of the nav element based on the scroll position.
   */
  window.onscroll = function () {
    // Get the current scroll position
    const currentScrollPos = window.pageYOffset;

    // Toggle the 'hidden' class of the nav element
    nav.classList.toggle('hidden', prevScrollPos <= currentScrollPos);

    // Update the previous scroll position
    prevScrollPos = currentScrollPos;
  };
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});

/**
 * Toggles the accordion at the specified index.
 * @param {number} index - The index of the accordion to toggle.
 */
function toggleAccordion(index) {
  // Get the accordion element at the specified index
  const accordion = document.getElementsByClassName('accordion')[index - 1];
  // Get the content element of the accordion
  const accordionContent = accordion.querySelector('.accordion-content');
  // Get the icon element of the accordion
  const icon = accordion.querySelector('.icon');

  // Toggle the 'active' class of the accordion element
  accordion.classList.toggle('active');
  // Set the max-height of the accordion content based on whether the accordion is active or not
  accordionContent.style.maxHeight = accordion.classList.contains('active')
    ? accordionContent.scrollHeight + 'px'
    : '0';
  // Toggle the 'rotate' class of the icon element based on whether the accordion is active or not
  icon.classList.toggle('rotate', accordion.classList.contains('active'));
}

/**
 * Prompts the user to enter their username and password,
 * and logs the input values to the console.
 */
function showLoginPrompt() {
  // Prompt the user to enter their username
  const username = prompt('Please enter your username:');

  // Prompt the user to enter their password
  const password = prompt('Please enter your password:');

  // Log the username and password to the console
  console.log(`Username: ${username}`);
  console.log(`Password: ${password}`);
}

/**
 * Shows a prompt to the user to get their current location.
 * If geolocation is supported by the browser, it gets the user's current position.
 * If geolocation is not supported, it displays an error message.
 */
function showLocationPrompt() {
  // Check if geolocation is supported by the browser
  if (navigator.geolocation) {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(getUserLocation);
  } else {
    // Display an error message if geolocation is not supported
    console.log('Geolocation is not supported by this browser.');
  }
}
/**
 * Fetches the user's location using the browser's Geolocation API,
 * and displays the location information on the webpage.
 *
 * @param {Position} position - The position object returned by the Geolocation API.
 */
function getUserLocation(position) {
  const { latitude, longitude } = position.coords;
  const apiKey = 'c0cc2bf85b894e56b7b3a35c00a49240';
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const { city, state, postcode } = data.results[0].components;
      const locationInfo = `
        Latitude: ${latitude}
        Longitude: ${longitude}
        City: ${city}
        Region: ${state}
        Postal Code: ${postcode}
      `;
      alert(`Your location: ${locationInfo}`);
      const locationElement = document.getElementById('location');
      locationElement.textContent = `Your location: ${locationInfo}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
