// 
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll(".container");
  
    sections.forEach(function(section) {
      var image = section.querySelector(".image");
  
      var img = new Image();
      var imageUrl = image.dataset.imageUrl;
      img.src = imageUrl;
      img.onload = function() {
        setImageHeight(image, img);
      };
    });
  });
  
  function setImageHeight(image, img) {
    if (img.height > 625) {
      image.style.backgroundImage = "url('" + img.src + "')";
      image.style.height = "625px";
    } else {
      image.style.backgroundImage = "url('" + img.src + "')";
      image.style.height = img.height + "px";
    }
  }
  
  