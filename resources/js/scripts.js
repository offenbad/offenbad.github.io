$(document).ready(function() {
 
    /* mobile navigation */
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
    

    
    
});