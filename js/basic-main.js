(function ($)
    { "use strict"
        var sidebarBox = document.querySelector('#mobile-box-menu');
        var sidebarBtn = document.querySelector('#mobile-menu');
        var pageWrapper = document.querySelector('#main');
        
        sidebarBtn.addEventListener('click', function(event) {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                sidebarBox.classList.remove('active');
            } else {
                this.classList.add('active');
                sidebarBox.classList.add('active');
            }
        });
        
        pageWrapper.addEventListener('click', function(event) {
            if (sidebarBox.classList.contains('active')) {
                sidebarBtn.classList.remove('active');
                sidebarBox.classList.remove('active');
            }
        });
        
        window.addEventListener('keydown', function(event) {
            if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
                sidebarBtn.classList.remove('active');
                sidebarBox.classList.remove('active');
            }
        });
        $('#back-top').hide();
        $('.hamburger').toggleClass('is-active');
        $('.hamburger').next().toggleClass('nav-menu-show')
    
        $(document).ready(function(){
            $('#preloader-active').delay(450).fadeOut('slow');
            $('body').delay(450).css({
                'overflow': 'visible'
            });
        })
        
        $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 400) {
            $('#back-top').fadeOut(500);
        } else {
            $('#back-top').fadeIn(500);
        }
        });

        $('#back-top a').on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
        });
  
        $('.hamburger').on('click', function() {
            $(this).toggleClass('is-active');
            $(this).next().toggleClass('nav-menu-show')
        });

})(jQuery);
