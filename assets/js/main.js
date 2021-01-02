$(document).ready(function() {

    $('.clear-icon').on('click', function(e) {
        $(this).parent('.with-icon').find('input').val('');
    })

    $('.show-icon').on('click', function(e) {
        var type = $(this).data('change-to');
        if ($(this).hasClass('clicked')) {
            $(this).parent('.with-icon').find('input').prop('type', 'password');
            $(this).removeClass('clicked');
        } else {
            $(this).parent('.with-icon').find('input[type="password"]').prop('type', type);
            $(this).addClass('clicked');
        }
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

    $('.test-radio').on('change', function(e) {
        console.log($(this).is(':checked'));

        $('.test-text').css('background-color', 'rgba(255, 255, 255, 0.9)')
        $('.test-text').find('label').css('color', 'unset')


        if ($(this).is(':checked')) {
            $(this).parent('.test-text').css('background-color', ' #0DA0A6')
            $(this).parent('.test-text').find('label').css('color', 'white')
        }

    })

    $('.dropdown-menu.first > .dropdown-item').mouseenter(function(e) {
        $('.dropdown-menu.secondary').removeClass('show');
        $(this).find('.dropdown-menu.secondary').addClass('show');
    })

    $('.dropdown-menu.secondary').mouseleave(function(e) {
        $('.dropdown-menu.secondary').removeClass('show');
    })

})