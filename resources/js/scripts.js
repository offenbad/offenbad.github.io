$(document).ready(function() {
 
    /*main navigation */
    $('.js--nav-icon').click(function() {
       var nav = $('.js--header__nav');
       var icon = $('.js--nav-icon i');    
    
       nav.slideToggle(300);
        
       if (icon.hasClass('ion-navicon-round')) {
           icon.addClass('ion-close-round');
           icon.removeClass('ion-navicon-round')
       } else {
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round')
       }
    });
    
    $('.js--works__icon').click(function() {
       var worksNav = $('.js--works__nav');
       var worksIcon = $('.js--works__icon i');
       
       worksNav.slideToggle(300);
        
        if (worksIcon.hasClass('ion-plus-round')) {
            worksIcon.addClass('ion-minus-round');
            worksIcon.removeClass('ion-plus-round')
       } else {
            worksIcon.addClass('ion-plus-round');
            worksIcon.removeClass('ion-minus-round')
       }    
        
    });
    
    $('.js--about__icon').click(function() {
       var aboutNav = $('.js--about__nav');
       var aboutIcon = $('.js--about__icon i');
       
       aboutNav.slideToggle(300);
        
        if (aboutIcon.hasClass('ion-plus-round')) {
            aboutIcon.addClass('ion-minus-round');
            aboutIcon.removeClass('ion-plus-round')
       } else {
            aboutIcon.addClass('ion-plus-round');
            aboutIcon.removeClass('ion-minus-round')
       }    
        
    });
    
    
    /*slideshow version */
    
    $(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title');
			}
		}
	});
});
    

    
    
});