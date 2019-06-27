$.validator.setDefaults( {
    submitHandler: function () {
        alert( "Form Submitted Successfully!" );
    }
} );
$('#register-form').validate({
    rules : {
        firstname : {
            required : true,
            minlength : 5
        },
        lastname : {
            required : true,
            minlength : 5
        },
        username : {
            required : true,
            minlength : 5
        },
        email : {
            required : true,
            email : true
        },
        password : {
            required : true,
            minlength : 5
        },
        c_password : {
            required : true,
            minlength : 5,
            equalTo : '#password'
        },
        terms : {
            required : true
        }
    },
    messages : {
        firstname : {
            required : 'Please Enter a First Name',
            minlength : 'Enter at least 5 letters for First Name'
        },
        lastname : {
            required : 'Please Enter a Last Name',
            minlength : 'Enter at least 5 letters for Last Name'
        },
        username : {
            required : 'Please Enter a User Name',
            minlength : 'Enter at least 5 letters for User Name'
        },
        email : {
            required : 'Please Enter a valid Email',
            email : 'Please Enter a valid Email Id'
        },
        password : {
            required : 'Please Enter a Password',
            minlength : 'Enter at least 5 letters for Password'
        },
        c_password : {
            required : 'Please Enter a Confirm Password',
            minlength : 'Enter at least 5 letters for Confirm Password',
            equalTo : 'Both the passwords are not matched'
        },
        terms : {
            required : 'Please accept the licence'
        }
    },
    errorPlacement: function ( error, element ) {
        // Add the `invalid-feedback` class to the error element
        error.addClass( "invalid-feedback" );

        if ( element.prop( "type" ) === "checkbox" ) {
            error.insertAfter( element.next( "label" ) );
        } else {
            error.insertAfter( element );
        }
    },
    highlight: function ( element, errorClass, validClass ) {
        $( element ).addClass( "is-invalid" ).removeClass( "is-valid" );
    },
    unhighlight: function (element, errorClass, validClass) {
        $( element ).addClass( "is-valid" ).removeClass( "is-invalid" );
    }
});