
  document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-content ul li a');

    navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = event.target.dataset.target;
        const targetElement = document.getElementById(target);

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    (function () {
      Fancybox.bind("[data-fancybox]", {
        // Your custom options
      });
    })();
  });


    
    $(document).ready(function () {
      var totalItems = $('.item').length;

      // Generate indicators
      for (var i = 0; i < totalItems; i++) {
        var indicatorHTML = '<li data-target="#myCarousel" data-slide-to="' + i + '"></li>';
        if (i === 0) {
          // add 'active' class for the first indicator
          indicatorHTML = '<li data-target="#myCarousel" data-slide-to="' + i + '" class="active"></li>';
        }
        $('.carousel-indicators').append(indicatorHTML);
      }

      // Handle pause/play button
      $('.carousel-pause').click(function () {
        var $btn = $(this);
        var $carousel = $('#myCarousel');
        if ($btn.text() === 'Pause') {
          $carousel.carousel('pause');
          $btn.text('Play');
        } else {
          $carousel.carousel('cycle');
          $btn.text('Pause');
        }
      });
    });
    //

    $(document).ready(function () {
      // initialization of swipe function 
      $('#image-slider').on('mousedown touchstart', function (event) {
        $(this).data('down', true).data('x', event.clientX || event.originalEvent.touches[0].clientX);
        return false;
      }).on('mouseup touchend', function () {
        $(this).data('down', false);
      }).on('mousemove touchmove', function (event) {
        if ($(this).data('down') === true) {
          var newX = event.clientX || event.originalEvent.touches[0].clientX;
          var deltaX = $(this).data('x') - newX;
          $(this).scrollLeft($(this).scrollLeft() + deltaX);
          $(this).data('x', newX);
        }
      });
    });



    //

    $(document).ready(function () {
      // Popup window
      $('.add-to-bag').click(function () {
        var $imageBlock = $(this).closest('.image-block');
        var imageSrc = $imageBlock.find('img').attr('src');
        var description = '';
    
        // Loop through all <p> elements and append their HTML to the description
        $imageBlock.find('p').each(function () {
          description += $(this).prop('outerHTML');
        });
    
        $('.popup-image').attr('src', imageSrc);
        $('.popup-description').html(description); // set the description HTML
        $('.popup').fadeIn();
      });
    
      // Close popup window
      $('.close').click(function () {
        $('.popup').fadeOut();
      });
    });
    



    $(document).ready(function () {
      // Set the behavior of the navbar when scrolling
      $(window).on('scroll', function() {
        var navbar = $('.navbar');
        if ($(window).scrollTop() > 0) {
          navbar.addClass('fixed');
        } else {
          navbar.removeClass('fixed');
        }
      });
    
      // Close popup
      $('.close-popup').on('click', function(event) {
        event.preventDefault();
        closePopup();
      });
    
      // Function to close the popup window
      function closePopup() {
        $('.popup').hide();
      }
    });
    