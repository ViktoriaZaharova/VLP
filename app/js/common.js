$(function() {

    $(".header-slider").owlCarousel({
        loop: true,
        mouseDrag: true,
        items: 1,
        center: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 5000
    });

    $(".portfolio-slide").owlCarousel({
        loop: true,
        mouseDrag: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        margin: 0,
        items: 4,
        autoplay: true,
        autoplayTimeout: 4000,
        navSpeed: 900,
        responsive: {
            0: {
                items: 1,
            },
            630: {
                items: 2,
            },
            800: {
                items: 2,
            },
            970: {
                items: 3,
            },
            1200: {
                items: 4,
            },
        }
    });

    $(".review-carousel").owlCarousel({
        loop: true,
        mouseDrag: true,
        nav: true,
        navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        margin: 0,
        items: 3,
        autoplay: true,
        autoplayTimeout: 3000,
        navSpeed: 900,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            800: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });

    $("a.gallery").fancybox(
        {
            "padding": 20,
            "imageScale": false,
            "zoomOpacity": false,
            "zoomSpeedIn": 1000,
            "zoomSpeedOut": 1000,
            "zoomSpeedChange": 1000,
            "frameWidth": 700,
            "frameHeight": 600,
            "overlayShow": true,
            "overlayOpacity": 0.8,
            "hideOnContentClick": false,
            "centerOnScroll": false

        });

});

$(window).scroll(function () { //фиксированное меню при скролле
    if ($(this).scrollTop() > 50) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});

$(document).ready(function(){ //плавный скролл
    $(".go_to").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 500 мс
        $('body,html').animate({scrollTop: top-60}, 500);
    });
});

$('.block-arrows').on('click', function() { //плавный скролл ниже к блоку
    $('html,body').animate({scrollTop:$('#about').offset().top+"px"},{duration:1E3});
});


$(document).ready(function () { // модальное окно форма обратной связи
    $('.popup-btn').on('click', function (event) {
        event.preventDefault();
        $('#overlay').fadeIn(400,
            function () {
                $('#modal_form')
                    .css('display', 'block')
                    .animate({opacity: 1, top: '50%'}, 200);
            });
    });

    $('#modal_close, #overlay').on('click', function () {
        $('#modal_form')
            .animate({opacity: 0, top: '45%'}, 200,
                function () {
                    $(this).css('display', 'none');
                    $('#overlay').fadeOut(400);
                }
            );
    });
});

$(document).ready(function() {

    $(".form").submit(function() {
        $.ajax({
            type: "POST",
            url: "mail.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form").trigger("reset");
        });
        return false;
    });

});

(function ($) {

    var $body;

    $(document).ready(function () {
        $body = $('body');

        $body
            .find('.user-phone').each(function () {
            $(this).mask("+7 (999) 999-99-99", {autoclear: false});
        });

        $body.on('keyup', '.user-phone', function () {
            var phone = $(this),
                phoneVal = phone.val(),
                form = $(this).parents('form');

            if ((phoneVal.indexOf("_") != -1) || phoneVal == '') {
                form.find('.btn_submit').attr('disabled', true);
            } else {
                form.find('.btn_submit').removeAttr('disabled');
            }
        });

    });

})(jQuery);

/*******Прелоадер************/

$(window).on('load', function () {
    $('.preloader').delay(50).fadeOut('slow');
});

$('#mobile_mnu').on('click', function () {
   $('.mnu-line ul').slideToggle();
});
