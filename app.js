
// ================ GŁOWNA FUNCKJA ================

let lowerButton = document.getElementById('abc_button');
let upperButton = document.getElementById('ABC_button');

lowerButton.addEventListener('click',function(){
  let input = document.getElementById('input').value;
  input = input.toLowerCase(); 
  document.getElementById('input').value=input;
  
});

upperButton.addEventListener('click',function(){
  let input = document.getElementById('input').value;
  input = input.toUpperCase();
  document.getElementById('input').value=input;
  
});

// ================ LIGHT / DARK MODE ================

let darkButton = document.querySelector("#night");

darkButton.addEventListener('click',darkModeOn);

function darkModeOn () {
  document.querySelector('body').classList.add('dark');
  document.querySelector('.round_button').classList.add('dark');
  document.querySelector('.inner-circle').classList.add('dark');
  document.querySelector('input').classList.add('dark');
  document.querySelector('#ABC_button').classList.add('dark');
  document.querySelector('#abc_button').classList.add('dark');
  document.querySelector('#span_lower').classList.add('dark');
  document.querySelector(' #span_upper').classList.add('dark');
  localStorage.setItem("theme","dark"); // zapisywanie w pamięci przeglądarki
 
};

let themeDark = localStorage.getItem('theme');
if (themeDark === 'dark'){
  document.querySelector('body').classList.add('dark');
  document.querySelector('.round_button').classList.add('dark');
  document.querySelector('.inner-circle').classList.add('dark');
  document.querySelector('input').classList.add('dark');
  document.querySelector('#ABC_button').classList.add('dark');
  document.querySelector('#abc_button').classList.add('dark');
  document.querySelector('#span_lower').classList.add('dark');
  document.querySelector(' #span_upper').classList.add('dark');
  
}

let brightButton = document.querySelector("#day");

brightButton.addEventListener('click',brightModeOn);

function brightModeOn (){
  document.querySelector('body').classList.remove('dark');
  document.querySelector('.round_button').classList.remove('dark');
  document.querySelector('.inner-circle').classList.remove('dark');
  document.querySelector('input').classList.remove('dark');
  document.querySelector('#ABC_button').classList.remove('dark');
  document.querySelector('#abc_button').classList.remove('dark');
  document.querySelector('#span_lower').classList.remove('dark');
  document.querySelector(' #span_upper').classList.remove('dark');
  localStorage.setItem("theme","bright");
};

let themeBright = localStorage.getItem('theme');
if(themeBright === "bright"){
  document.querySelector('body').classList.remove('dark');
  document.querySelector('.round_button').classList.remove('dark');
  document.querySelector('.inner-circle').classList.remove('dark');
  document.querySelector('input').classList.remove('dark');
  document.querySelector('#ABC_button').classList.remove('dark');
  document.querySelector('#abc_button').classList.remove('dark');
  document.querySelector('#span_lower').classList.remove('dark');
  document.querySelector(' #span_upper').classList.remove('dark');

}