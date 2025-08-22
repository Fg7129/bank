import { users } from "./bank.mjs";

const form = document.getElementById("login");
window.onload=function(){
  isLoggedIn()
}


form.addEventListener("submit", (event) => {
  event.preventDefault();
  event.stopPropagation();
  login();
});

function login() {
  const idelement = document.getElementById("idNo");
  const pinelement = document.getElementById("pin");

  const idNo = idelement.value;
  const pin = pinelement.value;
  usercheck(idNo, pin);
}

// parameters are variables defined in the function definition.
// arguments are values passed when calling a function.

function usercheck(idNum, pinNo) {
  console.log("ID Number:", idNum);
  console.log("Pin Number:", pinNo);
  const user = users.find((s) => {
    if (s.idnum == idNum && s.pin == pinNo) {
      return true;
    } else {
      return false;
    }
  });

  if (!user) {
    alert("Invalid details");
  } else {
    const userToStore = JSON.stringify(user);
    localStorage.setItem("user", userToStore);
    window.location.href = "bank.html";
  }
}

function isLoggedIn() {
  const user = localStorage.getItem("user");
  if(user){
    window.location.replace("bank.html")
  }
}
