// Tag , class , id Selector
$('.red-color').click(function() {
    $(this).css({
        'background-color' : 'darkred',
        'padding' : '15px',
        'color' : 'white',
        'box-shadow' : '0 0 10px black'
    });
});

// Attribute Selection
$('input[type="text"]').focus(function() {
    $(this).css({
        'background-color': 'lightsalmon'
    });
}).blur(function() {
    $(this).css({
        'background-color': 'white'
    });
});