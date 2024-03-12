/*For (let I = 0; I < accordian.length; i++) {
    Accordian[i].addEventListener(“click”, function () {
      If (this.childNodes[1].classList.contains(“fa-plus”)) {
        This.childNodes[1].classList.remove(“fa-plus”);
        This.childNodes[1].classList.add(“fa-times”);
      } else {
        This.childNodes[1].classList.remove(“fa-times”);
        This.childNodes[1].classList.add(“fa-plus”);
      }
  
      Let content = this.nextElementSibling;
      If (content.style.maxHeight) {
        Content.style.maxHeight = null;
      } else {
        Content.style.maxHeight = content.scrollHeight + “px”;
      }
    });
  }
  */
  

  const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "web_dev") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})