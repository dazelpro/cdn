$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".link1").addClass("active");
        $(".link2").removeClass("active");
        $(".link3").removeClass("active");
        $(".link4").removeClass("active");
    }
    if (scroll >= 1100) {
        $(".link2").addClass("active");
        $(".link1").removeClass("active");
        $(".link3").removeClass("active");
        $(".link4").removeClass("active");
    }
    if (scroll >= 1600) {
        $(".link3").addClass("active");
        $(".link1").removeClass("active");
        $(".link2").removeClass("active");
        $(".link4").removeClass("active");
    }
    if (scroll >= 2200) {
        $(".link4").addClass("active");
        $(".link1").removeClass("active");
        $(".link2").removeClass("active");
        $(".link3").removeClass("active");
    }
});