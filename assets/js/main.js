$(document).ready(function() {

    $('.clear-icon').on('click', function(e) {
        $(this).parent('.with-icon').find('input').val('');
    })

    $('.show-icon').on('click', function(e) {
        $(this).parent('.with-icon').find('input').prop('type', $(this).data('change-to'));
    })

})