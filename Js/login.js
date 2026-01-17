const form = document.getElementById("niga");
const N_input = document.getElementById("name");
const G_input = document.getElementById("grade");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  var name = N_input.value || NaN;
  var grade = G_input.value || NaN;
  if (Number.isNaN(name) || Number.isNaN(grade)){
    alert("Kindly Fill All The Fields!");
  }
  else {
    alert("Successfully Signed In!");
    localStorage.setItem("name",name);
    localStorage.setItem("grade",grade);
    window.location.replace("Quiz1.html");
  }
});

