$(window).scroll(function(){
    if ($(this).scrollTop() > 20) {
        $("header").addClass("active-bg");
    } else {
        $("header").removeClass("active-bg");
    }
    });
    