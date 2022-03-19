$(document).ready(function(){
    justToggleSlide();
});

function justToggleSlide() {

    $('.toggle-trigger').click(function(){

        $('.toggle-able').slideToggle();
        $('.toggle-block').toggleClass('active');

    });

}
