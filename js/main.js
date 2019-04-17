
/*Navigation Menu */
$(document).ready(function(e) {
    $('.click-toggle').click(function() {
        $('.menu-nav').slideToggle();
        return false
    });
});

/*Window Resize */
var breakpoint = 768;
$(window).resize(function() {
    if($(document).width() >= breakpoint){
        $('.menu-nav').show();
        } else {
        $('.menu-nav').hide();
        }
});
