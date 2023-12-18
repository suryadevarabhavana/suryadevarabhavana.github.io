$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    //>=, not <=
    if (scroll >= 500) {
        //clearHeader, not clearheader - caps H
        $(".navbar-light").addClass("shownav");
        $(".back-to-top").addClass("shownav");

    }
    else {
        $(".navbar-light").removeClass("shownav");
        $(".back-to-top").removeClass("shownav");
    }
    //>=, not <=
    if (scroll <= 500) {
        //clearHeader, not clearheader - caps H
        $(".scroll-to-bottom").addClass("showarrow");
    }
    else {
        $(".scroll-to-bottom").removeClass("showarrow");
    }
}); //missing );


// Set the width to animate the progress bar 
// Along with time duration in milliseconds 

$(".bg-warning").animate({
    width: "85%",
}, 2500);

$(".bg-danger").animate({
    width: "80%",
}, 2500);

$(".bg-dark").animate({
    width: "65%",
}, 2500);

$(".bg-success").animate({
    width: "65%",
}, 2500);

$(".bg-info").animate({
    width: "85%",
}, 2500);

