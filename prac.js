$(document).ready( () => {
    var countError = [];
    $('button').on('click', () => {
        var name = $('#name').val();
        var age = $('#age').val();
        var nickname = $('#nick').val();
        // Name cannot empty and cannot only number
        var isNameValid = name != "" && isNaN(name);
        if(isNameValid) {
            borderGreen('name');
            countError[0] = 0;
        }else {
            borderRed('name');
            countError[0] = 1;
        }

        // Age should be int number and positive 
        var isAgeValid = age != "" && age > 0 && !isNaN(age) && age == parseInt(age) && age.length <= 3;
        if(isAgeValid) {
            borderGreen('age');
            countError[1] = 0;
        }else {
            borderRed('age');
            countError[1] = 2;
        }

        // Nickname must be container 1 uppercase and at least 9 chars
        var atLeast9Chars = nickname.length >= 9 && nickname != "";
        var atLeast1Uppercase = false;
        for(let i = 0; i < nickname.length; i++) {
            var chars = nickname.charAt(i);
            if(isNaN(chars)) {
                var isUppercase = chars.toUpperCase() == chars;
                atLeast1Uppercase = atLeast1Uppercase || isUppercase;
            }
        }
        var isNicknameValid = atLeast9Chars && atLeast1Uppercase;
        if(isNicknameValid) {
            borderGreen('nick');
            countError[2] = 0;
        }else {
            borderRed('nick');
            countError[2] = 3;
        }

        // All information correct !
        var allValid = isNameValid && isAgeValid && isNicknameValid;
        if(allValid) {
            showMessageSuccess();
        }else {
            showMessageError(countError);
        }


    });
});
 

// show message success
var showMessageSuccess = () => {
    var success = "";
    success += `
        <div class="alert alert-success">
            <strong>Success !</strong>
        </div>
    `;
    $('#message').html(success);
} 
// show message error
var errorSMS = ["Name is empty!", "Age must be number!", 
                "Nickname shall contain 1 uppercase and 9 chars"];
var showMessageError = (errors) => {
    var showError = "";
    // name error
    if(errors[0] == 1) {
        showError += " - " + errorSMS[0] + "<br>";
    }else {
        showError += "";
    }
    // age error
    if(errors[1] == 2) {
        showError += " - " + errorSMS[1] + "<br>";
    }else {
        showError += "";
    }
    // nickname error
    if(errors[2] == 3) {
        showError += " - " + errorSMS[2] + "<br>";
    }else {
        showError += "";
    }
    
    $('#message').html(
        `
        <div class="alert alert-danger">
            <strong>${showError}</strong>
        </div>
    `
    );
}



 var borderGreen = (element) => {
    $('#' + element).addClass('border-success').removeClass('border-danger');
 }

 function borderRed(e) {
     $('#' + e).addClass('border-danger').removeClass('border-success');
 }



// $(document).ready(function() {
//     var countError=[];
//     $('button').on('click',function() {
//         var name = $('#name').val();
       
//        var age = $('#age').val();
//        var isNum = /^\d+$/.test(age);  
//         var nick = $('#nick').val();
//         // console.log(name + age + nick);
//         //Name cannot empty and cannot only number
//         var isNameValid = name !="" && isNaN(name);
//         if(isNameValid) {
//             success('name');
//             countError[0] =0;
//         }else {
//             setError('name');
//             countError[0] = 1;
//         }

//         var isAgeValid = !isNaN(age) && age > 0 && age!="" && age == parseInt(age) && age.length <=3;
//         if(isAgeValid) {
//             success('age');
//             countError[1] =0;
//         }else {
//             setError('age');
//             countError[1] =2;
//         }


//         // Nickname must be contain 1 uppercase and at least 9 chars

//         var atLeast9Char= nick.length>=9 && nick !="";
//         var atLeastOneUpperCase = false;
//         for(let i=0;i<nick.length;i++) {
//             var chars = nick.charAt(i);
            
//             if(isNaN(chars)) {
//                 var isUppercase = chars.toUpperCase() ==chars;
//                 atLeastOneUpperCase = atLeastOneUpperCase || isUppercase;
//             }
//         }
//         var isNicknameValid = atLeast9Char && atLeastOneUpperCase;
//         if(isNicknameValid) {
//             success('nick');
//             countError[2] =0;
//         }else{
//             setError('nick');
//             countError[2] =3;
//         }


//         if(isNameValid && isAgeValid && isNicknameValid) {
//             messageSucc();
//         }else {
//             messageError(countError);
//         }
//     });
// });



// // function borderGreen(s) {
// //     $('#' + s).addClass('border-success').removeClass('border-danger');
// // } or 




// // show message success
// var messageSucc = () => {
//     var success ="";
//     success +=`
//         <div class="alert alert-success">
//             <strong>Success</storng>
//         </div>
//     `;
//     $('#message').html(success);
// }

// // show message error
// var messageError= () => {
//     var error ="";
//     error +=`
//         <div class="alert alert-danger">
//             <strong>error</storng>
//         </div>
//     `;
//     $('#message').html(error);
    
// }


// // show message error

// var errorSMS = ["Name is empty","Age must be a number","Nickname at least has one uppercase and 9 chars"];
// var showMessageError = (errors) => {
//     // name error
//     if(errors[0] ==1) {
//         showError += errorSMS[0] + "<br>";
//     }else {
//         showError += "";
//     }
    
// }
