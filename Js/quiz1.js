var One = 0;
var Two = 0;
var Three = 0;
var Four = 0;
const q_holder = document.getElementById("qh");
const l = q_holder.children.length;
var array = [];
var com = 0;
const elem = document.documentElement;

if (elem.requestFullscreen) {
    elem.requestFullscreen();
} else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
} else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();

document.getElementById("sub").addEventListener("click", () => {

  for ( i=1 ; i < l+1 ; i++ ){
    const s = "q" + i.toString();
    console.log(s);
    const q = Number(document.querySelector('input[name="' + s + '"]:checked')?.value || NaN);
    console.log(q);
    array.push(q);
  }
  if (array.some(Number.isNaN)){
    alert("The Sorter Hat Says To Attend All Questions!");
    array.length = 0;
  }
  else {
    console.log(array);
    localStorage.setItem("Array",JSON.stringify(array));
    window.location.replace("Quiz2.html");
  }

});



