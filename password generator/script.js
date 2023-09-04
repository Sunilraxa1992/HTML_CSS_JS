const slider = document.querySelector("#slider");
const passwordLength = document.querySelector("#passBox");

const passBox = document.querySelector(".passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const btn = document.querySelector(".btn");
let copyIcon = document.querySelector(".inputbox span");

// slider
passwordLength.textContent = slider.value;
slider.addEventListener("input", function () {
  passwordLength.textContent = slider.value;
});

btn.addEventListener("click", function () {
  passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "~!@#$%^&*()_";

// Generate Password

function generatePassword() {
  let password = " ";

  let allChars = " ";

  allChars += lowercase.checked ? lowerChars : " ";
  allChars += uppercase.checked ? upperChars : " ";
  allChars += numbers.checked ? allNumbers : " ";
  allChars += symbols.checked ? allSymbols : " ";

  let i = 1;
  while (i <= slider.value) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }

  return password;
}


copyIcon.addEventListener("click",function(){
   if(passBox.value != " " || passBox.value.length >= 1){
      navigator.clipboard.writeText(passBox.value)
      copyIcon.innerText = "check";
      copyIcon.title = "Password Copied";

      setTimeout(function(){
      copyIcon.innerText = "content_copy";
      copyIcon.title = "";

      },2000)
   }
   
})