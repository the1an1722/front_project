
document.addEventListener('DOMContentLoaded', () => {
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
});

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');

  toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});





// const sendEgiftBtn = document.querySelector('#send-egift');
// sendEgiftBtn.addEventListener('click', function() {
//   location.href = 'https://www.starbucks.com/gift';
// });

//
function toggleAccordion(index) {
  var accordion = document.getElementsByClassName("accordion")[index - 1];
  var accordionContent = accordion.querySelector(".accordion-content");
  var icon = accordion.querySelector(".icon");

  accordion.classList.toggle("active");

  if (accordion.classList.contains("active")) {
    accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
    icon.classList.add("rotate");
  } else {
    accordionContent.style.maxHeight = "0";
    icon.classList.remove("rotate");
  }
}

// Show login prompt
function showLoginPrompt() {
  var username = prompt("Please enter your username:");
  var password = prompt("Please enter your password:");
  // Here is simply to output the input account and password in the console
  console.log("Username: " + username);
  console.log("Password: " + password);
}



// Function to trigger when the find a store button is clicked
function showLocationPrompt() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getUserLocation);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Get user location information and perform reverse geocoding operations
function getUserLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Build the request URL for the OpenCage Geocoder API
  const apiKey = 'c0cc2bf85b894e56b7b3a35c00a49240';
  const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}`;

  // Sending an API request
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Extract city, region and zip code information
      const city = data.results[0].components.city;
      const region = data.results[0].components.state;
      const postalCode = data.results[0].components.postcode;

      // Create a string containing location information
      const locationInfo = `\n Latitude: ${latitude} \n Longitude: ${longitude} \n City: ${city} \n Region: ${region} \n Postal Code: ${postalCode}`;

      // Pop up alert
      alert(`Your location: ${locationInfo}`);
            // Show location info
            const locationElement = document.getElementById("location");
            locationElement.textContent = `Your location: ${locationInfo}`;
          })
          .catch(error => {
            console.error('Error:', error);
          });
      }


