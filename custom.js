$(document).ready(function(){
    justToggleSlide();
});

function justToggleSlide() {

    $('.toggle-trigger').click(function(){

        $('.toggle-able').slideToggle();
        $('.toggle-block').toggleClass('active');

    });

}

$(document).ready(function(){
    justToggleSlide2();
});

function justToggleSlide2() {

    $('.toggle-trigger2').click(function(){

        $('.toggle-able2').slideToggle();
        $('.toggle-block2').toggleClass('active');

    });

}