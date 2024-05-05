const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("#formWrapper input").addEventListener("keydown", (e) => {
    if (e && e.keyCode == 13) {
      submit();
    }
  });
});

function submit() {
  console.log("clicked");
  document.getElementById("formWarning").innerHTML = "";
  document.getElementById("errorIcon").style.display = "none";
  let input = document.querySelector("#formWrapper input");
  if (input && input.value) {
    let value = input.value.toLowerCase();
    let matched = value.match(emailRegex);
    if (!matched) {
      document.getElementById("errorIcon").style.display = "block";
      document.getElementById("formWarning").innerHTML = "Please provide a valid email";
      return;
    }
  }
}
