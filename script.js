function seterror(id, error) {
  //sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML = "";
    }
}

function validateForm() {
  var returnval = false;
  clearErrors();
  //name validation
  var name = document.forms["myForm"]["fname"].value;
  if (name.length < 5) {
    seterror("name", "*Length of name is too short");
    returnval = false;
  }
  if (name.length == 0) {
    seterror("name", "*Name cannot be blank");
    returnval = false;
  }
  //email validation
  var email = document.forms["myForm"]["femail"].value;

  if (email.length > 20) {
    seterror("email", "Email length is too long");
    returnval = false;
  }
  if (email.length == 0) {
    seterror("email", "Please enter email");
    returnval = false;
  }
  //phone validation
  var phone = document.forms["myForm"]["fphone"].value;

  if (phone.length != 10) {
    seterror("phone", "Enter a valid phone number");
    returnval = false;
  }

  //password validation
  var password = document.forms['myForm'] ["password"].value;

  if (password.length < 10){
      seterror("password", "password should be 10 digits");
      returnval = false;
  }
  //password confirm validation

  var cpassword = document.forms['myForm']["fcpass"].value;
  if (cpassword != password){
      seterror("cpass", "Both passwords must match");
      returnval = false;
    }
   

  return false;
}
