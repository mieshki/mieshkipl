$("#arrow").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 2000);
});