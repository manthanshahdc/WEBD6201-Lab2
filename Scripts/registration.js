
    
  //Global Variables 
  var noErrors;
 
function validateField(id,value) {
    if((id == 'fname') && value.length <= 1){

        
    }else if((id == "lname") && value.length <= 1){

    }else if(id="femail"){
             
    }else if(id="pass"){

    }else if(id="repassword"){
        
    }
}

// First Name Validation
    $('#fname').on('input', function(){
      if( $(this).val().length <= 1){
          $("#ErrorMessage").show();
          $('#ErrorMessage').text("First Name should be minimum 2 characters required ");
          $("#registerBtn").attr("disabled", true);
          $("#registerBtn" ).addClass( "disabled-btn" );
        }else{
          $("#registerBtn").removeAttr("disabled");
          $("#registerBtn").removeClass( "disabled-btn");
          $("#ErrorMessage").hide();
        }
    });
//last Name Validation
     $('#lname').on('input', function(){
      if( $(this).val().length <= 1){
          $("#ErrorMessage").show();
          $('#ErrorMessage').text("Last Name should be minimum 2 characters required ");
        }else{
         $("#ErrorMessage").hide();
       }
     });

// Email Validation 
    $('#femail').on('input', function(){
      var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])/;

      if( $(this).val().length >= 8){
            $("#ErrorMessage").hide();
            if(mailformat.test($(this).val()))
            {
               $("#ErrorMessage").hide();
               $('#ErrorMessage').text(" ");    
            }
            else
            {
               $("#ErrorMessage").show();
               $('#ErrorMessage').text("Invalid email address . It should contain ");   
             }    
        }  
        else
        {
          $("#ErrorMessage").show();
          $('#ErrorMessage').text("Email should be minimum 8 characters required ");
        }    
    });
  
// Password Validation
    $('#pass').on('input', function(){
      if( $(this).val().length <= 6){
        $("#ErrorMessage").show();
        $('#ErrorMessage').text("Password should be minimum 6 characters required ");
        $("#registerBtn").attr("disabled", true);
        $("#registerBtn" ).addClass( "disabled-btn" );
      }else{
        $("#registerBtn").removeAttr("disabled");
        $("#registerBtn").removeClass( "disabled-btn");
        $("#ErrorMessage").hide();
      }
    });

// Repassword Validation    
    $('#repassword').on('input', function(){
      if( $(this).val() != $('#pass').val() ){
        $("#ErrorMessage").show();
        $('#ErrorMessage').text("Confirm Passwords did not match");
        $("#registerBtn").attr("disabled", true);
        $("#registerBtn" ).addClass( "disabled-btn" );
      }else{
        $("#registerBtn").removeAttr("disabled");
        $("#registerBtn").removeClass( "disabled-btn");
        $("#ErrorMessage").hide();
      }
    });
    
  //Submit Button Validation Listener
  $('#registerBtn').click(function(event){
    event.preventDefault()
    // Create Instance of User Class
    var user = new User($('#fname').val(),$('#lname').val(),$('#femail').val(),$('#pass').val());
    console.log(user.fname)
    console.log(user.lname)
    console.log(user.email)
    console.log(user.password)
  });