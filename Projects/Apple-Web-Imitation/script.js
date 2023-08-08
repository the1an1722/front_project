// 切换下拉菜单的显示状态
$('#navbarDropdownMenuLink1').on('mouseenter', function () {
    $('#dropdownMenu1').show();
    $('#dropdownMenu2, #dropdownMenu3, #dropdownMenu4, #dropdownMenu5, #dropdownMenu6, #dropdownMenu7, #dropdownMenu8, #dropdownMenu9, #dropdownMenu10').hide();
});

$('#navbarDropdownMenuLink2').on('mouseenter', function () {
    $('#dropdownMenu2').show();
    $('#dropdownMenu1, #dropdownMenu3, #dropdownMenu4, #dropdownMenu5, #dropdownMenu6, #dropdownMenu7, #dropdownMenu8, #dropdownMenu9, #dropdownMenu10').hide();
});

$('#navbarDropdownMenuLink3').on('mouseenter', function () {
    $('#dropdownMenu3').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu4, #dropdownMenu5, #dropdownMenu6, #dropdownMenu7, #dropdownMenu8, #dropdownMenu9, #dropdownMenu10').hide();
});

$('#navbarDropdownMenuLink4').on('mouseenter', function () {
    $('#dropdownMenu4').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu3, #dropdownMenu5, #dropdownMenu6, #dropdownMenu7, #dropdownMenu8, #dropdownMenu9, #dropdownMenu10').hide();
});


$('#navbarDropdownMenuLink5').on('mouseenter', function () {
    $('#dropdownMenu5').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu3, #dropdownMenu4, #dropdownMenu6, #dropdownMenu7, #dropdownMenu8, #dropdownMenu9, #dropdownMenu10').hide();
});

$('#navbarDropdownMenuLink6').on('mouseenter', function () {
    $('#dropdownMenu6').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu3, #dropdownMenu4, #dropdownMenu5, #dropdownMenu7, #dropdownMenu8, #dropdownMenu9, #dropdownMenu10').hide();
});


$('#navbarDropdownMenuLink7').on('mouseenter', function () {
    $('#dropdownMenu7').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu3, #dropdownMenu4, #dropdownMenu5, #dropdownMenu6, #dropdownMenu8, #dropdownMenu9, #dropdownMenu10').hide();
});

$('#navbarDropdownMenuLink8').on('mouseenter', function () {
    $('#dropdownMenu8').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu3, #dropdownMenu4, #dropdownMenu5, #dropdownMenu6, #dropdownMenu7, #dropdownMenu9, #dropdownMenu10').hide();
});

$('#navbarDropdownMenuLink9').on('mouseenter', function () {
    $('#dropdownMenu9').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu3, #dropdownMenu4, #dropdownMenu5, #dropdownMenu6, #dropdownMenu7, #dropdownMenu8, #dropdownMenu10').hide();
});
$('#navbarDropdownMenuLink10').on('mouseenter', function () {
    $('#dropdownMenu10').show();
    $('#dropdownMenu1, #dropdownMenu2, #dropdownMenu3, #dropdownMenu4, #dropdownMenu5, #dropdownMenu6, #dropdownMenu7, #dropdownMenu8, #dropdownMenu9').hide();
});


$('.navbar').on('mouseleave', function () {
    $('.fullscreen-dropdown').hide();
});


// function search(event) {
//     event.preventDefault();
//     // Get the value of the search input box
//     const searchValue = document.getElementById('searchInput').value;
//     // Perform a search
//     // Here you can use the search value to perform corresponding processing according to your needs,
//     // such as jumping to the search result page or performing other search logic
//     console.log('Perform search:', searchValue);
// }

// // Get references to the input box and the delete button
// const searchInput = document.getElementById('searchInput');
// const clearButton = document.querySelector('.clear-button');

// // Listen to the input event of the input box
// searchInput.addEventListener('input', function () {
//     // If there is content in the input box, the delete button is displayed; otherwise, the delete button is hidden
//     if (searchInput.value.length > 0) {
//         clearButton.style.display = 'block';
//     } else {
//         clearButton.style.display = 'none';
//     }
// });

// // Clear the content of the input box when the delete button is clicked
// function clearSearchInput() {
//     searchInput.value = '';
//     searchInput.focus(); // Keep input box focus
// }

// // When the shopping bag icon is clicked, show or hide the drop-down menu
// $(".shopping-bag").click(function () {
//     $(".shopping-bag-dropdown").toggleClass("open");
// });

// Carousel button action
$(document).ready(function () {
    var $carousel = $("#carouselExampleIndicators");
    var $carouselButton = $("#carouselButton");
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
  