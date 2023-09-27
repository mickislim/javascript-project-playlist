




const scriptURL =
  "https://script.google.com/macros/s/AKfycbxANT5Zz64zGpVwI2pKjIUd2XC5gEqU8pT3kNb9fO5gfb76awXY59WjZ9AfbUKbmT-s-Q/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById('msg')

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(response=> {
msg.innerHTML = "Thank you for Subscribing!";
setTimeout(() => {
    msg.innerHTML = ""
    
}, 5000);
form.reset()
    })
    .catch(error => console.error("Error!", error.message));
});
