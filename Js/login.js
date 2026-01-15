const form = document.getElementById("niga");
const N_input = document.getElementById("name");
const G_input = document.getElementById("grade");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = N_input.value;
  const grade = G_input.value;

  localStorage.setItem("name",name);
  localStorage.setItem("grade",grade);
  alert("Sucessfully Signed In!");
  window.location.replace("Quiz1.html");
});
