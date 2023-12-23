let form = document.getElementById("form");
form.addEventListener("submit", function () {
  event.preventDefault();
  console.log("I will handle the submission");
  console.log(event);
  let username = document.getElementById("username");
  let password = document.getElementById("password");
  console.log(username.value);
  console.log(password.log);
  if (username.value == "debanshu" && password.value == "1769") {
    console.log("User matched");
    this.reset();
  }
});
