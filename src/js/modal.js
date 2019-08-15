$(document).ready(function(){
    var button = $('#button');
    var modal = $('#call');
    var close = $('#close-call');

    button.on('click', function() {
        modal.addClass('call_active');
    });

    close.on('click', function() {
        modal.removeClass('call_active');
    });
});