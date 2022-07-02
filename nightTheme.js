const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");
// const label = document.getElementById("label");
const nightMode = document.querySelector(".night-mode");

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (theme === "dark") {
  document.body.classList.add("dark");
}

// event listener stops when the change theme button is clicked
nightMode.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (theme === "dark") {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
});

// save checkbox state
function save() {
  var checkbox = document.getElementById("checkbox1");
  localStorage.setItem("checkbox1", checkbox.checked);
}

// refresh.addEventListener("click", () => {
//   window.location.reload();
// });
// document.getElementById("label").onclick = function () {
//   if (document.getElementById("switch").checked) {
//     alert("Чекбокс нажат -вариант №2");
//   } else {
//     alert("Чекбокс не нажат-вариант №2");
//   }
// };
