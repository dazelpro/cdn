$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".link1").addClass("actives");
        $(".link2").removeClass("actives");
        $(".link3").removeClass("actives");
        $(".link4").removeClass("actives");
    }
    if (scroll >= 1100) {
        $(".link2").addClass("actives");
        $(".link1").removeClass("actives");
        $(".link3").removeClass("actives");
        $(".link4").removeClass("actives");
    }
    if (scroll >= 1600) {
        $(".link3").addClass("actives");
        $(".link1").removeClass("actives");
        $(".link2").removeClass("actives");
        $(".link4").removeClass("actives");
    }
    if (scroll >= 2200) {
        $(".link4").addClass("actives");
        $(".link1").removeClass("actives");
        $(".link2").removeClass("actives");
        $(".link3").removeClass("actives");
    }
});