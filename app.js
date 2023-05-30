let lowerButton = document.getElementById('abc_button');
let upperButton = document.getElementById('ABC_button');

lowerButton.addEventListener('click',function(){
  let input = document.getElementById('input').value;
  input = input.toLowerCase(); 
  document.getElementById('input').value=input;
  
})

upperButton.addEventListener('click',function(){
  let input = document.getElementById('input').value;
  input = input.toUpperCase();
  document.getElementById('input').value=input;
  
})