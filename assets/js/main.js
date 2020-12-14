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

    })

    $('.tab-button').on('click', function(e) {

        let target = $(this).data('target');
        $('.tab-button').removeClass('active');
        $(this).addClass('active');
        $('.profile-tab-item').hide();
        $(target).show();
    })

})