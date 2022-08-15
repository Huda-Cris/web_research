

let home=document.getElementById("navbar__logo");

home.addEventListener('click', function(){
  window.scrollTo(0,0);

})


const x = document.getElementById("myDIV");
const traf=document.querySelector('.definition');
const hide_btn=document.getElementById('hide');
const show_btn=document.getElementById('show');
const research_btn=document.querySelector('.ph_r_btn');


function myFunction() {
  
  if (x.style.display === "none") {
    x.style.display = "flex";
    traf.style.display='none';
    x.style.marginTop='5%';
    x.style.width='300px';
    x.style.borderRadius='400px';
    x.style.marginLeft='12%';
    hide_btn.style.display='flex';
    hide_btn.style.marginTop='25%';
    
    show_btn.style.display='none';
    research_btn.style.marginTop='23%';
    x.style.fontSize='0.7rem';

  } else {
    x.style.display = "none";
    hide_btn.style.display='none';
    traf.style.display='block';
    show_btn.style.display='flex';
    research_btn.style.marginTop='47%';
  }

}
myFunction();


const bars_menu = document.querySelector('.menu_container');
function myFunction_bars() {
  bars_menu.classList.toggle("change");
}