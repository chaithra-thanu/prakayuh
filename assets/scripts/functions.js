/**  jquery document.ready functions */
jQuery(document).ready(function($) {

    'use strict';
    /* ------------------------------- Responsive Menu Start ------------------------------- */
    if (jQuery('.main-navigation>ul').length != '') {
        jQuery('.main-navigation>ul').slicknav();
    }
    /* ------------------------------- Responsive Menu Start ------------------------------- */

    /* ------------------------------- Home Page Slider with header start ------------------------------- */
    if (jQuery('.banner-transparent').length != '') {
        jQuery('.banner-transparent').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
        });
    }
  
    /* ------------------------------- Home Page Slider with header End --------------------------------- */

    /* ------------------------------- Portfolio Slider start ------------------------------- */
    if (jQuery('.portfolio-slider').length != '') {
        jQuery('.portfolio-slider').slick({
            infinite: true,
            speed: 900,
            autoplaySpeed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            responsive: [{
                breakpoint: 1170,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            }, {
                breakpoint: 813,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false
                }
            }]
        });
    }
    /* ------------------------------- Portfolio Slider End --------------------------------- */

    /* ------------------------------- Testimonials Slider start ------------------------------- */
    if (jQuery('.bu-testimonial-slider').length != '') {
        jQuery('.bu-testimonial-slider').slick({
            infinite: true,
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            dots: true
        });
    }
    /* ------------------------------- Testimonials Slider End --------------------------------- */   
   /* ------------------------------- Logos carousel Start ------------------------------- */ 
    if (jQuery('.logo-transparent').length != '') {
        jQuery('.logo-transparent').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
            
        });
    }
/* ------------------------------- Logos carousel End ------------------------------- */  
    /* ------------------------------- Top Search ------------------------------- */
    jQuery(document).on('click', '.search-area a', function(e) {
            e.preventDefault();
            jQuery(this).siblings('form').toggle(500);
        });
    
    jQuery(document).on('click', '.search-area', function(){
      jQuery(this).find(jQuery('.ti')).toggleClass('ti-search ti-close');
    });
    /* ------------------------------- Top Search ------------------------------- */

    /* ------------------------------- Blog Detail slider start ------------------------------- */
        if (jQuery('.blog-detail-slider').length != '') {
            jQuery('.blog-detail-slider').slick({
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            });
        }
    /* ------------------------------- Blog Detail slider End --------------------------------- */              

    /* ------------------------------- Counter start ------------------------------- */
       if (jQuery('.counter').length != '') {
            jQuery('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        }
    /* ------------------------------- Counter End --------------------------------- */ 

    /*LIghtBOx*/
    jQuery(document).on('click', '[data-toggle="lightbox"]', function(event) {
        event.preventDefault();
        jQuery(this).ekkoLightbox();
    });
    /*LightBox*/

    /*Sticky Header Function*/
    jQuery(window).scroll(function() {    
        var scroll = jQuery(window).scrollTop();

        if (scroll >= 155) {
            jQuery('#header').addClass('fixed-header');
        } else {
            jQuery('#header').removeClass('fixed-header');
        }
    });
    /*Sticky Header Function*/
});
/**  jquery document.ready functions */


/* -------------------------------
 * Window Load Funtion Start
 ------------------------------- */
 jQuery(window).on('load', function() {
/* ------------------------------- Portfolio Filters End --------------------------------- */
    
  /* activate jquery isotope */
if (jQuery('#posts').length != '') {
  var jQuerycontainer = jQuery('#posts').isotope({
    itemSelector: '.item',
    isFitWidth: true
  });

  jQuery(window).smartresize(function() {
    jQuerycontainer.isotope({
      columnWidth: '.col-sm-3'
    });
  });

  jQuerycontainer.isotope({ filter: '*' });

  // filter items on button click

  jQuery('#filters').on('click', 'button', function() {
    var filterValue = jQuery(this).attr('data-filter');
    jQuerycontainer.isotope({ filter: filterValue });
  });
}
    /* ------------------------------- Portfolio Filters End --------------------------------- */
});

/* -------------------------------
 * Window Load Funtion End
 -------------------------------  */