$(document).ready(function(){
    var button = $('#btn-offer');
    var modal = $('#modal-offer');
    var close = $('#close-offer');


    button.on('click', function() {
        modal.addClass('modal-offer_active');
    });

    close.on('click', function() {
        modal.removeClass('modal-offer_active');
    });
});