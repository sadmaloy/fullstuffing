$(document).ready(function(){
    var modal = $('#modal-offer');
    var close = $('#close-offer');

    close.on('click', function() {
        modal.removeClass('modal-offer_active');
    });
});