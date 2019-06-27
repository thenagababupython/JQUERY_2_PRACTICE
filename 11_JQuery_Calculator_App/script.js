// Click on Minus Button
$('#minus-button').click(function() {
   $('#operator').text($(this).text());
    calculate();
});

// Click on Plus Button
$('#plus-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on Divide Button
$('#divide-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click on Multiply Button
$('#multiply-button').click(function() {
    $('#operator').text($(this).text());
    calculate();
});

// Click Equals Button
$('#equals-button').click(function() {
    calculate();
});

// Calculate Logic
let calculate = () => {
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    let operator = $('#operator').text();
    let result = 0;
    if(firstNumber !== '' && secondNumber !== ''){
        let num1 = Number.parseFloat(firstNumber);
        let num2 = Number.parseFloat(secondNumber);
        switch(operator){
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '*':
                result = num1 * num2;
                break;
        }
        $('#result-button').text(result);
    }
};

// Clear Button
$('#clear-button').click(function() {
   $('#firstNumber').val('');
    $('#secondNumber').val('');
    $('#operator').text('+');
    $('#result-button').text('RESULT');
});