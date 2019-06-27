// SMS App
$('#text-area').keyup(function () {
    $('#span-1').text(100 - $(this).val().length);
});

// Change Password
$('#check').change(function() {
    let passwordBox = $('#password');
    (passwordBox.attr('type') === 'password') ? passwordBox.attr('type','text') : passwordBox.attr('type','password');
});

// Likes App
let likes = 0;
let dislikes = 0;
let total = 0;
$('#likes-btn').click(function() {
    likes++;
    total++;
    $('#likes').text(likes);
    $('#total').text(total);
});
$('#dislikes-btn').click(function() {
    dislikes++;
    total++;
    $('#dislikes').text(dislikes);
    $('#total').text(total);
});

// Hobbies Selection App
$('#eating').change(function () {
    let card = $('#eating-card');
    card.hasClass('d-none') ?card.removeClass('d-none') : card.addClass('d-none');
});

$('#coding').change(function () {
    let card = $('#coding-card');
    card.hasClass('d-none') ?card.removeClass('d-none') : card.addClass('d-none');
});

$('#sleeping').change(function () {
    let card = $('#sleeping-card');
    card.hasClass('d-none') ?card.removeClass('d-none') : card.addClass('d-none');
});