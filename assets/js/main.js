$(document).ready(function() {

    $('.clear-icon').on('click', function(e) {
        $(this).parent('.with-icon').find('input').val('');
    })

    $('.show-icon').on('click', function(e) {
        $(this).parent('.with-icon').find('input').prop('type', $(this).data('change-to'));
    })



    $('.more-button').on('click', function(e) {
        e.stopPropagation();
        let menu = $(this).parent().find('.sub-menu');
        $('.table-custom tr.selected').removeClass('selected');

        if ($(menu).is(':visible')) {

            $('.sub-menu').hide();

        } else {

            $('.sub-menu').hide();
            $(menu).show();
            $(this).closest('tr').addClass('selected');

        }
    })

    $(document).click(function() {

        $('.sub-menu').hide();
        $('.table-custom').find('tr').removeClass('selected');

    })

    $('.tab-button').on('click', function(e) {

        let target = $(this).data('target');
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        $('.profile-tab-item').hide();
        $(target).show();
    })

    $('.radio-button').on('click', function(e) {
        $('.radio-button').removeClass('active');
        $(this).addClass('active');
    })




    $('.slider-main').slick({
        infinite: true,
        speed: 500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        dots: true,
        // appendDots: $(this).siblings('.dots-container'),
        customPaging: function(slider, i) {
            return '<div class="slider-dot slider-dot-1"></div>';
        },
        slidesToShow: 1,
        slidesToScroll: 1,
    });



    $('.slider-categories').slick({
        infinite: false,
        rows: 2,
        slidesPerRow: 3,
        speed: 500,
        dots: true,
        customPaging: function(slider, i) {
            return '<div class="slider-dot slider-dot-2"></div>';
        },
        arrows: false,
        slidesToShow: 1,
        centerMode: false,
        swipe: false,
        dots: false,
        responsive: [                    
            {
                breakpoint: 768,
                settings: {
                    rows: 1,
                    slidesPerRow: 1,
                    slidesToShow: 1,
                    swipe: true,
                    dots: true,
                    centerMode: true,
                    focusOnSelect: true,
                    // initialSlide: 1,
                }
            }
        ],
    });
    


    $('.btn-burger').on('click', function() {
        if ($('body').hasClass('menu-active')) {
            $(this).find('.burger').removeClass('open');
            $('body').removeClass('menu-active');
        } else {
            $(this).find('.burger').addClass('open');
            $('body').addClass('menu-active');
        }
    })

    $('.nav-link').on('click', function() {
        if ($('body').hasClass('menu-active')) {
            $('.burger').removeClass('open');
            $('body').removeClass('menu-active');
        }
    })

})