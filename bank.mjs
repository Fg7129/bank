const balanceEl = document.getElementById("balance");
const logoutButton = document.getElementById("logout");
const greetingEl = document.getElementById("time");
const susie=document.getElementById("susie");
const kris=document.getElementById("kris");
const ralsei=document.getElementById("ralsei");

let clickLogoutBtnEvent;
let clicksusie;
let clickkris;
let clickralsei;
let bankaccounts;

export const users = [
  { name: "Susie", idnum: 17, pin: 1716},
  { name: "Kris", idnum: 16, pin: 1617},
  { name: "Ralsei", idnum: 15, pin: 1516},
];

export const accounts = [
  {accNum:1, userid:17, balance:1000},
  {accNum:2, userid:16, balance:2000},
  {accNum:3, userid:15, balance:5000},
];


window.onload = function () {
  getGreeting();
  const user = localStorage.getItem("user");
  const loginBtns=document.getElementById("logInBtns");
  const userBtns=document.getElementById("userBtns");
  const usernameElement=document.getElementById("username");
  const storedaccounts=localStorage.getItem("accounts");

  if(storedaccounts){
    bankaccounts=storedaccounts
  } else{
    localStorage.setItem("accounts",JSON.stringify(accounts))
    bankaccounts=accounts
  }

  if (user) {
    clickLogoutBtnEvent = logoutButton.addEventListener("click", () => {
      onLogout();
    });
    loginBtns.remove()
    username.textContent = `Hi, ${JSON.parse(user).name}👋`;
    profpic()
  } else {
    userBtns.remove();
    logoutButton.remove();
  }
};

function profpic(){
if (users) {
    clicksusie = susie.addEventListener("click", () => {
     kris.remove();
    ralsei.remove();
    });
  } else {
    null
  }
  
  if (users) {
    clickkris = kris.addEventListener("click", () => {
     susie.remove();
    ralsei.remove();
    });
  } else {
    null
  }

  if (users) {
    clickralsei = ralsei.addEventListener("click", () => {
     susie.remove();
    kris.remove();
    });
  } else {
    null
  }
};

function getGreeting() {
  const hour = new Date().getHours();
  console.log(hour);
  let greeting = "Hello!";

  switch (true) {
    case hour >= 5 && hour < 12:
      greeting = "Good Morning!";
      break;
    case hour >= 12 && hour < 18:
      greeting = "Good Afternoon!";
      break;
    case hour >= 18 && hour < 20:
      greeting = "Good Evening!";
      break;
    default:
      greeting = "Good Night!";
  }

  greetingEl.textContent = greeting;
}

function cleanup() {}

function onLogout() {
  const logout = confirm("Are you sure you want to log out?");
  if (logout) {
    localStorage.removeItem("user");
    if (clickLogoutBtnEvent) {
      removeEventListener(clickLogoutBtnEvent);
    }
    window.location.href = "login.html";
  }
}


