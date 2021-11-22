$(document).ready(function () {

    $('header .dropdown-city').mouseover(function () {
        $(this).dropdown('show');
    })
    $('header .dropdown-city').mouseleave(function () {
        $(this).dropdown('hide');
    })
    $('#rooms').children('[disabled]').hide();
    $('input[type="tel"]').mask("+7 (999) 999 - 99 - 99");
    $(function () {
        $('[data-toggle="popover"]').popover({
            trigger: 'hover',
            'html': true,
            'template': '<div class="place-popover" role="tooltip"><div class="popover-body"></div></div>'
        })
    });
    $(document).on('click', '.footer-menu a', function () {
        var linkID = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkID).offset().top
        }, 'slow');
    });

    $(document).on('click', '.mobile-menu nav a', function () {
        var linkID = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(linkID).offset().top
        }, 'slow');
        $('.mobile-menu').removeClass('opened');
    });

    // resize video
    if ($(window).width() > 1200) {
        let video = document.querySelector('video');

        function HandleResize() {
            let w0 = 290, h0 = 290, r0 = w0 / h0;
            let w = $('.section-main').innerWidth(), h = $('.section-main').innerHeight(), r = w / h;

            video.style.transform = r0 < r ? 'scale(' + r / r0 + ')' : 'scale(' + r0 / r + ')';
        }

        HandleResize();
        $(window).resize(HandleResize);
    }


    //vildate
    $('.main-validate').validate({
        errorElement: 'span',
        rules: {
            rooms: {
                required: true
            },
            tel: {
                minlength: 11,
                required: true,
            }
        },
        messages: {
            rooms: {
                required: 'Укажите количество квартир'
            },
            tel: {
                minlength: 'Не менее 11 цифр',
                required: 'Пожалуйста, введите номер'
            }
        }
    });

    $('.reservingValidate').validate({
        errorElement: 'span',
        rules: {
            name: {
                minlength: 2,
                required: true
            },
            tel: {
                minlength: 11,
                required: true,
            }
        },
        messages: {
            name: {
                minlength: 'Не менее 2 символов',
                required: 'Пожалуйста, введите имя'
            },
            tel: {
                minlength: 'Не менее 11 цифр',
                required: 'Пожалуйста, введите номер'
            }
        }
    });

    $('.form-tel-validation').validate({
        errorElement: 'span',
        rules: {
            tel: {
                minlength: 11,
                required: true,
            }
        },
        messages: {
            tel: {
                minlength: 'Не менее 11 цифр',
                required: 'Пожалуйста, введите номер'
            }
        }
    });

    $('.form-tel-validation2').validate({
        errorElement: 'span',
        rules: {
            tel: {
                minlength: 11,
                required: true,
            }
        },
        messages: {
            tel: {
                minlength: 'Не менее 11 цифр',
                required: 'Пожалуйста, введите номер'
            }
        }
    });

    $('.burger-menu').click(function() {
        $('.mobile-menu').addClass('opened');
    })

    $('.mobile-menu .close').click(function() {
        $('.mobile-menu').removeClass('opened');
    })

    $('.body-overlay').click(function() {
        $('.mobile-menu').removeClass('opened');
    })

    $('.mobile-menu .dropdown-city').click(function() {
        $('.mobile-menu .dropdown-city__list').slideToggle(200);
    })

    if ($(window).width() < 992) {

        $('.b-cleaning').each(function(index, item) {
            if (!$(item).hasClass('b-cleaning--standart') && !$(item).hasClass('b-cleaning--consult')) {

                $('#slider1').append(item);
                item = $(item).wrap("<div></div>");
            }
        })

        $('#slider1').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            margin: 10,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });

    }

    if($(window).width() < 768) {
        $('.b-cost').wrap("<div></div>");

        $('#slider2').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
        });
    }

    $('.toggle-reviews').click(function() {
        $('.review').not(':first-child').toggle(300);
        $('span').toggle();
    });

    $('.modal-cleaning .button-empty').click(function() {
        $('.modal-cleaning').modal('hide');
        $('#reservingModal').modal('show');
        setTimeout(function() {
            $('body').addClass('modal-open');
        }, 500);
    });

    $(window).scroll(function(e) {
        if ($(window).scrollTop() > 0) {
            $('header').addClass('header--bg');
        } else {
            $('header').removeClass('header--bg');
        }
    });

    if($('.city-modal').hasClass('shown')) {
        $('.city-modal-overlay').show();
    }

    $('input[name="rooms"]').change(function() {
        let labelText = $(this).next().text();
        $('.dropdown-rooms .btn span').text(labelText);
        $('.dropdown-rooms .btn span').addClass('checked');
    });
});