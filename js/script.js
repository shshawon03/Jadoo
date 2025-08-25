// javascript start
	// wow start
	wow = new WOW(
	  {
	  boxClass: 'wow',
	  animateClass: 'animated',
	  offset: 0,
	  mobile: true,
	  live: true
	}
	)
	wow.init();
	// testimonials start
	let wrapper = document.getElementById('testimonialWrapper');
	let upBtn = document.getElementById('upBtn');
	let downBtn = document.getElementById('downBtn');
	let testimonials = document.querySelectorAll('.testimonial');
	let currentIndex = 0;
	function updateSlider() {
	  let isMobile = window.innerWidth < 576; // Adjust if needed
	  let slideHeight = isMobile ? 330 : 280;
	  wrapper.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
	};
	upBtn.addEventListener('click', () => {
	  if (currentIndex > 0) {
	    currentIndex--;
	    updateSlider();
	  }
	});
	downBtn.addEventListener('click', () => {
	  if (currentIndex < testimonials.length - 1) {
	    currentIndex++;
	    updateSlider();
	  }
	});
	// Recalculate on window resize
	window.addEventListener('resize', updateSlider);
	// Initial run
	updateSlider();

// jquery start
$(document).ready(function(){
	// scroll_up start
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 550) {
	    $(".scrollup").fadeIn();
	  } else {
	    $(".scrollup").fadeOut();
	  }
	});
	$(".scrollup").click(function() {
	  $("html").animate({
	    scrollTop: 0
	  }, 550);
	  return false;
	});
	// video start
  $("#b_play").videoPopup();
  // count_1 start
	$('.counter').counterUp({
    time: 1500
	});
	// progress start	
 let progress = 40;
  $('.td_bgc').animate({ width: progress + '%' }, 2000);
	// owl start
  $('.owl-carousel').owlCarousel({
  	items: 5,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    dots: false,
    margin: 40,
    responsiveClass:true,
    responsive:{
      0:{
        items: 1,
        margin: 0
      },
      576:{
        items: 2,
        margin: 20
      },
      768:{
        items: 3,
        margin: 30
      },
      992:{
      	items:5,
      }
    }
	});
});
