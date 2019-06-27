// Hide , Show
$('#btn-1').click(function() {
    if($(this).text() === 'HIDE'){
        $(this).text('SHOW');
        $('#card-1').hide(500);
    }
    else{
        $(this).text('HIDE');
        $('#card-1').show(500);
    }
});

// Hide , Show => Toggle
$('#btn-2').click(function() {
    $('#card-2').toggle(500);
    ($(this).text() === 'HIDE') ? $(this).text('SHOW') : $(this).text('HIDE');
});