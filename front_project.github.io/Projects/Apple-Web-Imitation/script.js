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


function search(event) {
    event.preventDefault();
    // 获取搜索输入框的值
    const searchValue = document.getElementById('searchInput').value;
    // 执行搜索操作
    // 这里可以根据你的需求使用搜索值进行相应的处理，比如跳转到搜索结果页面或执行其他搜索逻辑
    console.log('Perform search:', searchValue);
}

// 获取输入框和删除按钮的引用
const searchInput = document.getElementById('searchInput');
const clearButton = document.querySelector('.clear-button');

// 监听输入框的输入事件
searchInput.addEventListener('input', function () {
    // 如果输入框中有内容，则显示删除按钮；否则隐藏删除按钮
    if (searchInput.value.length > 0) {
        clearButton.style.display = 'block';
    } else {
        clearButton.style.display = 'none';
    }
});

// 点击删除按钮时清空输入框内容
function clearSearchInput() {
    searchInput.value = '';
    searchInput.focus(); // 保持输入框焦点
}

// 当购物袋图标被点击时，显示或隐藏下拉菜单
$(".shopping-bag").click(function () {
    $(".shopping-bag-dropdown").toggleClass("open");
});

// carousel button action
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
  