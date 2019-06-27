// External JQuery
$('#green-btn').click(function() {
    $('#green-card').slideToggle(1000);
});

// Keyup event
$('#username').keyup(function() {
    $('#display').text($(this).val());
});