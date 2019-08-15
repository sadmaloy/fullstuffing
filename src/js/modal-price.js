$(document).ready(function(){
    var modal = $('#modal');
    var close = $('#close');
    var cardLink = $('.card__link');

    cardLink.on('click', function(event) {
        event.preventDefault();
        modal.addClass('modal_active');
        var target = $(this).attr('data-target');
        $('.modal-content').load(target+".html");
    });

    close.on('click', function() {
        modal.removeClass('modal_active');
    });
});