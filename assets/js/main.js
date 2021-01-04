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

    if ($('.date-picker').length > 0) {
        $('.date-picker').datepicker({
            format: 'dd-mm-yyyy',
            weekStart: 1,
            maxViewMode: 2,
            language: 'az',
            autoclose: true,
            orientation: 'bottom'
        });
    }

    $('.button-edit-icon input[type="text"]').on('click', function(e) {
        e.stopPropagation();
    })

    $('.button-edit-icon:not(.active)').on('click', function(e) {
        // e.stopPropagation();      

        $('.button-edit-icon').removeClass('edit');
        $('.button-edit-icon').find('input').hide();
        $('.button-edit-icon').find('.cancel, .save').hide();
        $('.button-edit-icon').find('span, .edit-icon').show();
    })

    $('.button-edit-icon .edit-icon').on('click', function(e) {
        e.stopPropagation();
        var parent = $(this).parent('.button-edit-icon');        
        var value = $(parent).find('span').text();
        
        $(parent).find('span, .edit-icon').hide();
        $(parent).addClass('edit');
        $(parent).find('input').show().val(value);
        $(parent).find('.cancel, .save').show();
    })

    $('.button-edit-icon .save').on('click', function(e) {
        e.stopPropagation();
        var parent = $(this).parent('.button-edit-icon');        
        var value = $(parent).find('input').val();

        $(parent).find('span').text(value); 

        $(parent).removeClass('edit');
        $(parent).find('input').hide();
        $(parent).find('.cancel, .save').hide();
        $(parent).find('span, .edit-icon').show();

        //ajax
    })

    $('.button-edit-icon .cancel').on('click', function(e) { 
        e.stopPropagation();
        var parent = $(this).parent('.button-edit-icon');   

        $(parent).removeClass('edit');
        $(parent).find('span, .edit-icon').show();
        $(parent).find('input').hide();
        $(parent).find('.cancel, .save').hide();
    })

    $('.grogram-add').on('click', function(e) {
        $(this).hide();
        $('.program-block').show();
    })

    $('.program-block .cancel').on('click', function(e) {
        $('.program-block').find('input[type="text"]').val('')
        $('.grogram-add').show();
        $('.program-block').hide();
    })

    $('.program-block .add').on('click', function(e) {
        $('.program-block').find('input[type="text"]').val('')
        $('.grogram-add').show();
        $('.program-block').hide();

        //ajax
    })

})