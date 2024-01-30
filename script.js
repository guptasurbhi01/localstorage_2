const text = document.getElementById("area");

function save() {
  console.log(text);
  localStorage.setItem("savedData", text.value);
}
if(localStorage.getItem("savedData")){
    text.value = localStorage.getItem("savedData");
}

text.addEventListener("input",save);

document.addEventListener("DOMContentLoaded", function () {
  // Your JavaScript code here
  function toggleDarkMode() {
    // console.log("hi")
    const element = document.body;
    const toggleSwitch = document.getElementById("toggleSwitch");
    const modeImage = document.getElementById("image-container");

    document.body.classList.toggle("dark-mode");

    modeImage.innerHTML = toggleSwitch.checked
      ? `<i id="light"class="fa-solid fa-sun fa-xl"></i>`
      : `<i id="dark"class="fa-solid fa-moon fa-flip-horizontal fa-xl"></i>`;
  }

  document
    .getElementById("toggleSwitch")
    .addEventListener("click", toggleDarkMode);
});
