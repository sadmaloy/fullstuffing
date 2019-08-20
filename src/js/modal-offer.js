$(document).ready(function(){
    var button = $('#btn-offer');
    var modal = $('#modal-offer');
    var close = $('#close-offer');



    close.on('click', function() {
        modal.removeClass('modal-offer_active');
    });
});