// Owlcarousel
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        center:true,
        mouseDrag:false,
        startPosition:1,
        nav:true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });

  });