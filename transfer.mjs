import { users } from "./bank.mjs";

let user;
let account;
let accounts;
const balanceEl = document.getElementById("balance");
const cancelButton = document.getElementById("cancel");
const onCancelBtnEvent = cancelButton.addEventListener("click", () => {
  window.location.replace("bank.html");
});
const amountEl = document.getElementById("amount");
const pinEl = document.getElementById("pin");
const recipientEl=document.getElementById("recipient")
const formEl = document.getElementById("transfer");
const onSubmitEvent = formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const amount = amountEl.value;
  const pin = pinEl.value;
  if (amount.trim() === "") {
    alert("Amount cannot be empty");
    return;
  }
  if (pin.trim() === "") {
    alert("Pin cannot be empty");
    return;
  }
  transfer(amount, pin);
});

function transfer(amount, pin) {
  console.log("entered pin:", pin, "user pin:", user.pin);

  if (user.pin != pin) {
    alert("Invalid pin provided!");
  } else {
    if (+amount > account.balance) {
      alert("You do not have enough balance to transfer this amount");
    } else {
      console.log("ACCs", accounts);
      const oldAccounts = accounts.filter((a) => +a.userid !== +user.idnum);
      console.log("oldaccs", oldAccounts);
      oldAccounts.push({
        accNum: account.accNum,
        userid: user.idnum,
        balance: account.balance - +amount,
      });
      localStorage.setItem("accounts", JSON.stringify(oldAccounts));
      balanceEl.textContent = `KES ${(
        account.balance - +amount
      ).toLocaleString()}`;
      alert("Transfer successful");
      amountEl.value = "";
      pinEl.value = "";

       localStorage.setItem("accounts", JSON.stringify(oldAccounts));
      const response =  fetch("recipient", {
    if (users = recipientEl){
let recipientAccount = accounts.find(acc => acc.userid == recipientEl);

if (recipientAccount) {
    recipientAccount.balance = +recipientAccount.balance + +amount;

    oldAccounts.push(recipientAccount);
    localStorage.setItem("accounts", JSON.stringify(oldAccounts));

    alert("Transfer successful to recipient!");
} else {
    alert("Recipient not found!");
}
    }
    
  });

  const result =  response.json();
  console.log("Transfer result:", result);
    }
  }
}

window.onload = function () {
  isLoggedIn();
};

window.onbeforeunload = function () {
  removeEventListener(onCancelBtnEvent);
  removeEventListener(onSubmitEvent);
};

function isLoggedIn() {
  const usr = localStorage.getItem("user");
  if (!usr) {
    window.location.replace("login.html");
  } else {
    const userObj = JSON.parse(usr);
    const accs = localStorage.getItem("accounts");
    if (accs) {
      accounts = JSON.parse(accs);
      const userAcc = JSON.parse(accs).find((u) => u.userid === userObj.idnum);
      if (userAcc) {
        account = userAcc;
        balanceEl.textContent = `KES ${account.balance.toLocaleString()}`;
      } else {
        logout();
      }
    } else {
      logout();
    }
    // console.log(usr);
    user = JSON.parse(usr);
  }
}

function logout() {
  localStorage.removeItem("user");
  // localStorage.removeItem("accounts")
  window.location.replace("login.html");
}
