$(document).ready(function() {
    var button = $('#button');
    var call = $('#call');
    var close = $('#close-call');

    button.on('click', function() {
        call.addClass('call_active');
    });

    close.on('click', function() {
        call.removeClass('call_active');
    });
});