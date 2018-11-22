$(document).on('ready', function () {
    $('.rio-promos').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
                breakpoint: 900,
                settings: {
                     arrows: false,
                    slidesToShow:1,
                    slidesToScroll: 1
                }
        },
            ]
    });
    $(".lazy").slick({
        autoplay: true,
        dots: true,
        arrows: false,
        lazyLoad: 'ondemand',
        infinite: true,


    });

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
    }
  ]
    });
});
$(function () {
   
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        };
                    });
                }
            }
        });

    $(".menu-toggle").on('click', function () {
        $(this).toggleClass("on");
        $('.menu-section').toggleClass("on");
        $("nav ul").toggleClass('hidden-menu');
    });

})
 


window.addEventListener('scroll', navColor);
document.querySelector('.call').addEventListener('click', openAlert);
document.querySelector('.close').addEventListener('click', closeAlert);

function navColor() {

    if (pageYOffset > 100) {
        document.querySelector('nav').classList.add('nav');
        document.querySelector('.logo a img').src = "img/logo.png";
    } else {
        document.querySelector('nav').classList.remove('nav');
        document.querySelector('.logo a img').src = "img/logowhite.png";
    }
}
var phone = document.querySelectorAll('.number');
for(var i =0; i<phone.length; i++){
phone[i].addEventListener('keypress', noNumbers);}

function noNumbers(e) {
    if ((e.which < 48 || e.which > 57)) {
        e.preventDefault();
    }
}

document.addEventListener('DOMContentLoaded', loadEnd);

function loadEnd() {
    document.querySelector('.load').classList.add('hidden');
}

function openAlert() {
    document.querySelector('.alert').classList.remove('hidden');
}


function closeAlert() {
    document.querySelector('.alert').classList.add('hidden');
}
