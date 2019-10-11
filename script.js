$(document).ready(function () {
    ($('.evaliation-main__block').eq(0)).toggleClass('active');
    $('.evaluation-nav__btn').click(function () {
        var indexBtn = $('.evaluation-nav__btn').index(this);
        $('.evaliation-main__block').removeClass('active');
        ($('.evaliation-main__block').eq(indexBtn)).toggleClass('active').hide().fadeIn("slow");
    });
    $('.nav__list li ul').hide();
    $('.menu__nav-mobile').hide();
    $('li').hover(
        function () {
            $('ul', this).fadeIn(100);
        },
        function () {
            $('ul', this).fadeOut(100);
        }
    );

    $('.menu__btn').hover(
        function () {
            $('ul', this).fadeIn(100);
        },
        function () {
            $('ul', this).fadeOut(100);
        }
    );

});