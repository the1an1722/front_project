// Toggle the display state of the drop-down menu
for (let i = 1; i <= 10; i++) {
  $(`#navbarDropdownMenuLink${i}`).on('mouseenter', function () {
    showDropdown(`#dropdownMenu${i}`);
    hideAllOtherDropdowns(`#dropdownMenu${i}`);
  });
}

$('.navbar').on('mouseleave', function () {
  hideAllDropdowns();
});

// Show the dropdown menu
function showDropdown(dropdownSelector) {
  console.log('Showing dropdown menu');
  console.log(`Dropdown selector: ${dropdownSelector}`);
  $(dropdownSelector).show();
}

/**
 * Hides all dropdown menus except the specified dropdown menu.
 * @param {string} exceptDropdownSelector - The selector of the dropdown menu to exclude from hiding.
 */
function hideAllOtherDropdowns(exceptDropdownSelector) {
  // Iterate through the dropdown menus
  for (let i = 1; i <= 10; i++) {
    const dropdownSelector = `#dropdownMenu${i}`;

    // Hide the dropdown menu if it is not the specified dropdown menu
    if (dropdownSelector !== exceptDropdownSelector) {
      $(dropdownSelector).hide();
    }
  }
}

/**
 * Hides all dropdown menus.
 */
// Hide all dropdown menus except the specified dropdown menu
function hideAllDropdowns() {
  // Iterate through all dropdown menus
  for (let i = 1; i <= 10; i++) {
    const dropdownId = `dropdownMenu${i}`;
    const dropdownSelector = `#${dropdownId}`;

    // Check if the mouse is not over the dropdown menu
    if (!$(dropdownSelector).is(':hover')) {
      $(dropdownSelector).hide();
    }
  }
}

$('.navbar').on('mouseleave', function () {
  $('.fullscreen-dropdown').hide();
});

// When the shopping bag icon is clicked, show or hide the drop-down menu
$('.shopping-bag').click(function () {
  $('.shopping-bag-dropdown').toggleClass('open');
});

// Carousel button action
$(document).ready(function () {
  var $carousel = $('#carouselExampleIndicators');
  var $carouselButton = $('#carouselButton');
  var $icon = $carouselButton.find('i');

  $carouselButton.click(function () {
    if ($carousel.data('bs.carousel')._interval) {
      $carousel.carousel('pause');
      $icon.removeClass('fa-pause');
      $icon.addClass('fa-play');
    } else {
      $carousel.carousel('cycle');
      $icon.removeClass('fa-play');
      $icon.addClass('fa-pause');
    }
  });

  $carousel.on('slid.bs.carousel', function () {
    if (!$carousel.data('bs.carousel')._interval) {
      $icon.removeClass('fa-pause');
      $icon.addClass('fa-play');
    } else {
      $icon.removeClass('fa-play');
      $icon.addClass('fa-pause');
    }
  });
});

/**
 * Toggles the accordion specified by the given ID.
 * @param {number} accordionId - The ID of the accordion to toggle.
 */
function toggleAccordion(accordionId) {
  // Find the accordion element using the accordionId
  const accordion = document.querySelector(
    `.accordion:nth-child(${accordionId})`
  );

  // Find the content element within the accordion
  const content = accordion.querySelector('.accordion-content');

  // Find the icon element within the accordion
  const icon = accordion.querySelector('.icon');

  // Toggle the 'active' class on the content element
  content.classList.toggle('active');

  // Update the text content of the icon element based on the 'active' class
  icon.textContent = content.classList.contains('active') ? '-' : '+';
}

/**
 * Toggles the accordion at the given index.
 *
 * @param {number} index - The index of the accordion to toggle.
 */
function toggleAccordion(index) {
  // Get the accordion element at the given index
  const accordion = document.getElementsByClassName('accordion')[index - 1];

  // Get the accordion content and icon elements
  const accordionContent = accordion.querySelector('.accordion-content');
  const icon = accordion.querySelector('.icon');

  // Toggle the 'active' class on the accordion element
  accordion.classList.toggle('active');

  if (accordion.classList.contains('active')) {
    // If the accordion is active, set the maximum height of the content and update the icon
    setTimeout(() => {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      icon.innerHTML = '-';
    }, 10);
  } else {
    // If the accordion is not active, set the maximum height of the content to 0 and update the icon
    accordionContent.style.maxHeight = '0';
    icon.innerHTML = '+';
  }
}
