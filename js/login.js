let attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate() {
  //Grab username and password from form
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  //Statically sent the username and passowrd for testing
  if (username == "babyBean@gmail.com" && password == "@tryM3") {
    window.location("index.html");
  } else {
    document.getElementById("forgotten").style.display = "block";
    attempt--; //This is where the number of password attempts are decreemented
    // After three attempts blank the fields and redirect to the password reset page
    if (attempt == 0) {
      window.location("index.html");
    }
  }
}
