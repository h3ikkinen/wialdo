import $ from "jquery"
const scrollChange = 1;
const header = $(".header");

$(document).on('click', '.js-burger-trigger', function() {
    $(this).toggleClass('js-active');
    $('.js-burger').toggleClass('js-active');
    const scroll = $(window).scrollTop();
    if ($(this).hasClass('js-active')) {
        header.addClass('header_white');
        $('.js-feedback-btn').addClass('inversion')
    } else if (scroll < 1) {
        header.removeClass("header_white");
        $('.js-feedback-btn').removeClass('inversion')
    }
})

$(window).scroll(function() {
    const scroll = $(window).scrollTop();

    if (scroll >= scrollChange) {
        header.addClass('header_white');
        $('.js-feedback-btn').addClass('inversion')
    } else {
        header.removeClass("header_white");
        $('.js-feedback-btn').removeClass('inversion')
    }
});