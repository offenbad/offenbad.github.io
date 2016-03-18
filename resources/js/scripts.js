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
    
        document.getElementById('links').onclick = function (event) {
            event = event || window.event;
            var target = event.target || event.srcElement,
                link = target.src ? target.parentNode : target,
                options = {index: link, event: event},
                links = this.getElementsByTagName('a');
            blueimp.Gallery(links, options);
        };



    
});