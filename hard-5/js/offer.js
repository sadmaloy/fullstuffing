$('#offer-form').on('submit', function(event) {
    event.preventDefault();
    var form = this;
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: $(this).serialize()
    }).done(function() {
        form.reset();
    });
});