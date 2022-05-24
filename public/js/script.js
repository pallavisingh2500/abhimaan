function formValidation() {
    const firstname = document.getElementById("firstname");
    const phone_no = document.getElementById("phone_no");
    const email = document.getElementById("email");
    const upassword = document.getElementById("upassword");
    const confirmPassword = document.getElementById("confirmPassword");
    
    // function for form validation
    
      
      // checking name length
      if (!firstname.value.match(/^[A-Za-z\s]+$/)) {
        alert("Name should only contains characters.");
        firstname.focus();
        return false;
      }
    
      if (firstname.value.length < 2 || firstname.value.length > 20) {
        alert("Name length should be more than 2 and less than 50");
        firstname.focus();
        return false;
      }
    
    // checking phone_no length
    
      if ( !phone_no.value.match(/[0-9]/))  {
        alert("Phone no should only contains numbers");
        phone_no.focus();
        return false;
      }
      
      if (phone_no.value.length != 10)  {
        alert("Phone no length should be 10 digits");
        phone_no.focus();
        return false;
      }
    
    
      // checking email
      if (!email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        alert("Please enter a valid email!");
        email.focus();
        return false;
      }
      // checking password
      if (!upassword.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)) {
        alert("Password should contain 8 characters having a number, lower and upper case and special character.");
        upassword.focus();
        return false;
      }
     
      if(upassword.value != confirmPassword.value){
          alert("Passwords donot match");
          confirmPassword.focus();
          return false;
      }
      return true;
    }