const heroSection = document.getElementById("hero");
const loginPage = document.getElementById("login");
const withdrawCard = document.getElementById("withdraw");
const withdrawPage=document.getElementById("withdrawPage")
const loginSubmitBtn=document.getElementById("loginSubmit")
loginSubmitBtn.addEventListener("click",(event)=>{
  heroSection.hidden=false
withdrawPage.hidden=true
loginPage.hidden=true
})

function hideElement(element){
  heroSection.style.display="none"
  element.style.display="none"
}
function unhideElement(element){
  element.style.display="block"
}

const loggedInUser = null;
window.onload(()=>{
  unhideElement(heroSection)
  hideElement(withdrawPage)
  hideElement(loginPage)

})()

const now = new Date().getHours();
let nowDescription;
if (now >= 0 && now < 12) {
  nowDescription = "Good Morning 👋";
} else if (now >= 12 && now <= 18) {
  nowDescription = "Good Afternoon 👋";
} else {
  nowDescription = "Good Evening 👋";
}

const timeElement = document.getElementById("time");
timeElement.textContent = nowDescription;

const users = [
  { name: "Kris", accountnum: 16, pin: "pie", idnum: 1617 },
  { name: "Susie", accountnum: 17, pin: "skate", idnum: 1716 },
  { name: "Noelle", accountnum: 15, pin: "snow", idnum: 1517 },
  { name: "Ralsei", accountnum: 14, pin: "prince", idnum: 1416 },
];

const accounts = [
  { accountnum: 16, balance: 500 },
  { accountnum: 17, balance: 100 },
  { accountnum: 15, balance: 1000 },
  { accountnum: 14, balance: 400 },
];

function login(idnum, pin) {
  const user = users.find((u) => u.idnum == idnum && u.pin == pin);
  if (user) {
    return user;
  }
  return null;
}
console.log(login(1518, "cheese"));
console.log(login(1716, "skate"));


withdrawCard.addEventListener("click", (e) => {
  heroSection.hidden=true
withdrawPage.hidden=false
loginPage.hidden=true
});
