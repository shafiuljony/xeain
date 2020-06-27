(function ($) {
"use strict";
 $('.testimonial-active').owlCarousel({
 	loop:true,
	 margin:10,
	
 	nav:false,
	 autoplay:true,
	 dots:true,
	
 	responsive:{
 		0:{
 			items:1,
 			nav:false
 		},

 		600:{
 			items:1
 		},
 		1000:{
		items:1
 		}
 	}
 });

 $('.testimonial-active2').owlCarousel({
	loop:true,
	margin:10,
   
	nav:false,
	autoplay:true,
	dots:true,
   
	responsive:{
		0:{
			items:1,
			nav:false
		},

		600:{
			items:1
		},
		1000:{
	   items:1
		}
	}
});

// 
 $('.brand-active').owlCarousel({
	loop:true,
	margin:10,
	navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	nav:true,
	autoplay:true,
	
	responsive:{
		0:{
			items:2,
			nav:false
		},
         480:{
			items:2,
            nav:false
		},

		768:{
			items:3
		},
		1000:{
			items:4
		}
	}
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



$('.grid').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		columnWidth: '.grid-item',
	  }
	});
	// filter items on button click
    $('.portfolio-menu').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });	
});





//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});
///progress bar//
$(function() {
	$('.chart').easyPieChart({
		//your options goes here
	});
});




})(jQuery);

    /*-----------------
    meanmenu 
    -----------------*/
    $('nav#mobile-menu').meanmenu({
        meanScreenWidth: "992",
        meanMenuContainer: '.mobile-menu',
	});
	// tab//
	$('#myTabs a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	  })

	  ///map//
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}