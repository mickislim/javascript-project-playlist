let eyeIcon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeIcon.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eyeIcon.src = "show.jpeg";
  } else {
    password.type = "password";
    eyeIcon.src = "hide.jpeg";
  }
});
