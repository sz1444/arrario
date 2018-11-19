$(document).on('ready', function () {
    $('.rio-promos').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
        },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }]
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
$(function() {
    var $inputs = $('form input[required], form textarea[required], select[required]');

    var displayFieldError = function($elem) {
        var $fieldRow = $elem.closest('.form-row');
        var $fieldError = $fieldRow.find('.field-error');
        if (!$fieldError.length) {
            var errorText = $elem.attr('data-error');
            var $divError = $('<div class="field-error">' + errorText + '</div>');
            $fieldRow.append($divError);
        }
    };

    var hideFieldError = function($elem) {
        var $fieldRow = $elem.closest('.form-row');
        var $fieldError = $fieldRow.find('.field-error');
        if ($fieldError.length) {
            $fieldError.remove();
        }
    };

    $inputs.on('input keyup', function() {
        var $elem = $(this);
        if (!$elem.get(0).checkValidity()) {
            $elem.addClass('error');
        } else {
            $elem.removeClass('error');
            hideFieldError($elem);
        }
    });

    $inputs.filter(':checkbox').on('click', function() {
        var $elem = $(this);
        var $row = $(this).closest('.form-row');
        if ($elem.is(':checked')) {
            $elem.removeClass('error');
            hideFieldError($elem);
        } else {
            $elem.addClass('error');
        }
    });
    $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex','-1'); 
            $target.focus(); 
          };
        });
      }
    }
  });
    
    $(".menu-toggle").on('click', function() {
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
        document.querySelector('.logo a img').src="img/logo.png";
    } else {
        document.querySelector('nav').classList.remove('nav');
         document.querySelector('.logo a img').src="img/logowhite.png";
    }
}
var phone =document.querySelector('.number');

phone.addEventListener('keypress', noNumbers);

function noNumbers(e)
{
 if ((e.which < 48 || e.which > 57)) {
            e.preventDefault();
    }}

document.addEventListener('DOMContentLoaded', loadEnd);

function loadEnd(){
    document.querySelector('.load').classList.add('hidden');
}

function openAlert(){
    document.querySelector('.alert').classList.remove('hidden');
}


function closeAlert(){
    document.querySelector('.alert').classList.add('hidden');
}

