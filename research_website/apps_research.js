

// Event for click
let remember = document.querySelector('.remember');
// Event to scroll
let dec_tree = document.querySelector('.dec_tree');
remember.addEventListener('click', function () {
  dec_tree.scrollIntoView(true);
});


// SCROLL TO Objective
// Event for click

let obj=document.getElementById("ob_ject");

obj.addEventListener('click', function(){
  window.scrollTo(0,0);

});


// SCROLL TO WHAT IS MACHINE LEARNING
// Event for click
let mach_lea = document.getElementById('mach_lea');
// Event to scroll
let go_to_mach = document.getElementById("goto_mach");
mach_lea.addEventListener('click', function () {
  go_to_mach.scrollIntoView(false);

});


// SCROLL TO MATERIALS AND METHOD
// Event for click
let mat_met = document.getElementById('mat_met');
// Event to scroll
let go_to_mat = document.getElementById("go_to_mat");
mat_met.addEventListener('click', function () {
  go_to_mat.scrollIntoView(false);

});


// SCROLL TO Results
// Event for click
let result = document.getElementById('result');
// Event to scroll
let go_to_res = document.getElementById("x_axis");
result.addEventListener('click', function () {
  go_to_res.scrollIntoView(false);

});

// SCROLL TO Conclusuion/outlook
// Event for click
let conclusion = document.getElementById('con_out');
// Event to scroll
let go_to_con = document.getElementById("go_to_con");

conclusion.addEventListener('click', function () {
  go_to_con.scrollIntoView(false);

});


// SCROLL TO Conclusuion/outlook
// Event for click
let reference = document.getElementById('refer');
// Event to scroll
let go_to_ref = document.getElementById("go_to_ref");

reference.addEventListener('click', function () {
  go_to_ref.scrollIntoView(false);

});