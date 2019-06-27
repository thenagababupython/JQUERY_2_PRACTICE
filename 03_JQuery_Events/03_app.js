// Click Event
$('#btn-1').click(function() {
    $(this).removeClass('btn-success').addClass('btn-danger').text('Register');
});

// DBL Click
$('#btn-2').dblclick(function() {
    $(this).removeClass('btn-danger').addClass('btn-success').text('Login');
});

// Toggle
$('#btn-3').click(function() {
    let buttonText = $(this).text();
    if(buttonText === 'Login'){
        $(this).removeClass('btn-success').addClass('btn-danger').text('Register');
    }
    else{
        $(this).removeClass('btn-danger').addClass('btn-success').text('Login');
    }
});

// change Event
$('#select-1').change(function() {
    let value = $(this).val();
    $('#display-1').text(value);
});

// Change Images
let images = ['image1.jpg','image2.jpg','image3.jpeg','image4.jpeg','image5.jpeg','image6.jpeg','image7.jpeg','image5.jpeg','image3.jpeg','image4.jpeg'];

let nextCount = 0;
$('#next-btn').click(function() {
    $('#image').attr('src',`../img/${images[nextCount]}`);
    if(nextCount >= 9){
        nextCount = 0;
    }
    else{
        nextCount++;
    }
});

let prevCount = 9;
$('#prev-btn').click(function() {
    $('#image').attr('src',`../img/${images[prevCount]}`);
    if(prevCount <= 0){
        prevCount = 9;
    }
    else{
        prevCount--;
    }
});