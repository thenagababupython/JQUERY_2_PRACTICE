// Get the HTML Elements
let cardHeader = $('#form-card-header');
let cardTitle = $('#card-title');
let theButton = $('#submit-button');

// Login Button Logic
$('#login-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-warning').addClass('bg-success');
    cardTitle.text('Login Here');
    theButton.removeClass('btn-teal').removeClass('btn-warning').addClass('btn-success').text('Login');
});

// Register Button Logic
$('#register-button').click(function() {
    cardHeader.removeClass('bg-teal').removeClass('bg-success').addClass('bg-warning');
    cardTitle.text('Register Here');
    theButton.removeClass('btn-teal').removeClass('btn-success').addClass('btn-warning').text('Register');
});

// SignUp Button Logic
$('#signup-button').click(function() {
    cardHeader.removeClass('bg-warning').removeClass('bg-success').addClass('bg-teal');
    cardTitle.text('Signup Here');
    theButton.removeClass('btn-warning').removeClass('btn-success').addClass('btn-teal').text('Signup');
});