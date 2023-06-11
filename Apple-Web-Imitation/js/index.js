function toggleAccordion(accordionId) {
	const accordion = document.querySelector(`.accordion:nth-child(${accordionId})`);
	const content = accordion.querySelector('.accordion-content');
	const icon = accordion.querySelector('.icon');
  
	content.classList.toggle('active');
	icon.textContent = content.classList.contains('active') ? '-' : '+';
  }
  
  function toggleAccordion(index) {
	var accordion = document.getElementsByClassName("accordion")[index - 1];
	var accordionContent = accordion.querySelector(".accordion-content");
	var icon = accordion.querySelector(".icon");
  
	accordion.classList.toggle("active");
  
	if (accordion.classList.contains("active")) {
	  setTimeout(function () {
		accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
		icon.innerHTML = "-";
	  }, 10); // 设置延时时间，单位为毫秒
	} else {
	  accordionContent.style.maxHeight = "0";
	  icon.innerHTML = "+";
	}
  }
  




// Elements to get the search icon and the shopping bag icon
// var searchIcon = document.getElementById("search-icon");
// var shoppingBagIcon = document.getElementById("shopping-bag-icon");

// // Click event listener
// searchIcon.addEventListener("click", toggleSubMenu);
// shoppingBagIcon.addEventListener("click", toggleSubMenu);

var menuToggle = document.getElementById('selectSubmenu');

// // // Show or Hide the submenu
function toggleSubMenu() {
	const temp = document.querySelector(".submenu");
	if (temp.style.display === "block") {
		temp.style.display = "none";
		// temp.style.visibility = "visible";
	} else {
		temp.style.display = "block";
	}
}

// function closeSubmenu() {
// 	const desktopNav = document.querySelector(".desktop-nav ul li:not(:nth-last-child(2)):not(:last-child):hover > .submenu");
// 	if (desktopNav != null) {
// 		const temp = document.querySelector(".submenu");
// 		temp.style.display = "none";
// 	}
// } 




function search() {
	console.log("search");
	if (event.keyCode === 13) {  // Check if the key pressed is the Enter key
		// To get input value
		var searchInput = document.querySelector("#search-icon input").value;

		// Clear input
		document.querySelector("#search-icon input").value = "";
	}
}


function showRelatedResults(searchTerm) {
	// Simulate the process of getting relevant search results
	var relatedResults = getRelatedResults(searchTerm);

	// Get a display list of related search results
	var relatedResultsList = document.getElementById("related-results");

	// Clear the contents of the list
	relatedResultsList.innerHTML = "";

	// Add relevant search results to the list
	relatedResults.forEach(function (result) {
		var listItem = document.createElement("li");
		listItem.textContent = result;
		listItem.addEventListener("click", function () {
			selectRelatedResult(result);
		});
		relatedResultsList.appendChild(listItem);
	});
}

// Simulate a function to get relevant search results
function getRelatedResults(searchTerm) {

	return ["related link 1", "related link2", "related link3"];
}

function selectRelatedResult(result) {
	console.log("Select Related Result: " + result);
}

function clearInput(event) {
	event.preventDefault();
	var inputElement = document.querySelector("#search-icon input");
	inputElement.value = "";
	inputElement.focus();
	toggleClearButtonVisibility(false);
}

function toggleClearButtonVisibility(hasInput) {
	var clearButton = document.querySelector("#search-icon .clear-icon");
	clearButton.style.display = hasInput ? "inline-block" : "none";
}

function showRelatedResults(searchTerm) {
	toggleClearButtonVisibility(searchTerm.length > 0);
}

function stopPropagation(event) {
	event.stopPropagation();
}

document.querySelector(".menu-toggle").addEventListener("click", function() {
	document.querySelector(".mobile-nav .submenu").classList.toggle("show");
  });



// const menuToggle1 = document.querySelector('.menu-toggle');
// const mobileNav = document.querySelector('.mobile-nav');

// function toggleMenu() {
//   mobileNav.classList.toggle('show');
// }

// menuToggle1.addEventListener('click', toggleMenu);


// var submenu = menuToggle1.querySelector('.submenu');
// var storeLink = menuToggle1.querySelector('a[href="https://www.apple.com/store"]');
// var subSubmenu = submenu.querySelector('.submenu');
// var columns = submenu.querySelectorAll('.column');



// menuToggle1.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	const temp = document.getElementById("temp");
// 	temp.style.display = "block";
//   if (event.target === storeLink) {
// 	event.preventDefault();
// 	submenu.classList.toggle('show');
// 	subSubmenu.classList.remove('show');
// 	columns.forEach(function(column) {
// 	  column.style.display = 'none';
// 	});
//   }
// 	// if (temp.style.display === "block") {
// 	// 	temp.style.display = "none";
// 	// } else {
// 	// 	temp.style.display = "block";
// 	// }

// 	console.log(temp.style.display);
// });

// storeLink.addEventListener('click', function(event) {
//   event.preventDefault();
//   subSubmenu.classList.toggle('show');
//   columns.forEach(function(column) {
// 	column.style.display = 'block';
//   });
// });
