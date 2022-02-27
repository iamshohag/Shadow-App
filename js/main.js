$(document).ready(function(){
	// video Popup
	const videoSrc = $("#player-1").attr("src");
	$(".video-play-btn, .video_popup").on("click",function(){
		if($(".video_popup").hasClass("open")){
			$(".video_popup").removeClass("open");
			$("#player-1").attr("src","");
		}
		else{
			$(".video_popup").addClass("open");
			if($("#player-1").attr("src")==''){
				$("#player-1").attr("src",videoSrc);
			}
		}
	});
	// features-carosuel
	$('.features').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });
    // app screenshot-carosuel
	$('.screenshot-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:4,
        }
    }
    });
    // testimonial-carosuel
    $('.testimonial-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayHoverPause:true,
    margin:0,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
        }
    }
    });
    //counter up plugin
    $('.counter').counterUp({
    delay: 20,
    time: 3000,
    });
});