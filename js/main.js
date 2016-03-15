$('#hover-1').hover (
	// function(){ $('.body-container').addClass('test') },
	// function(){ $('.body-container').removeClass('test')},
	// function(){ $('video.left-nav-video').addClass('remove-nav') },
	// function(){ $('video.left-nav-video').removeClass('remove-nav') },
	function(){ $('.jumbo-1').addClass('show-jumbo') },
	function(){ $('.jumbo-1').removeClass('show-jumbo') }
);

$('#hover-2').hover (
	function(){ $('.jumbo-2').addClass('show-jumbo') },
	function(){ $('.jumbo-2').removeClass('show-jumbo') }
);

$('#hover-3').hover (
	function(){ $('.jumbo-3').addClass('show-jumbo') },
	function(){ $('.jumbo-3').removeClass('show-jumbo') }
);

// $(window).scroll(function() {    
//    var scroll = $(window).scrollTop();
//    if (scroll >= 1040) {
//     $(".top-banner").addClass("remove-banner");
//    }else{
//    	$(".top-banner").removeClass("remove-banner");
//    }
// });



$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "fade",
    slideshowSpeed: 5000,
    animationLoop: true
  });
});