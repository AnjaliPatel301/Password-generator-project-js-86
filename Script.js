const lengthnumber=document.querySelector('#length-number');
const upper=document.querySelector('#Uppercase');
const lower=document.querySelector('#lowercase');
const symbol=document.querySelector('#symbols');
const number=document.querySelector('#number');
const copy=document.querySelector('#copy');
const passInput=document.querySelector('#pass-input');
const button=document.querySelector('#generator');

console.log(lengthnumber.value);
console.log(upper.checked);
console.log(lower.checked);
console.log(symbol.checked);
console.log(number.checked);
console.log(copy);
console.log(passInput);
console.log(button);


const upperstr='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerstr='abcdefghijklmnopqrstuvwxyz';
const numberstr='0123456789';
const symbolstr='~`@#$%^&*()/?';


button.addEventListener('click',function(){

let str='';
    if(upper.checked){
        str +=upperstr;

    }
    if(lower.checked){
        str +=lowerstr;

    }
  
    if(symbol.checked){
        str +=symbolstr;
    }
  
    if(number.checked){
        str +=numberstr;
    }
  
    console.log(str,'str');
  
    let password='';
  
    for(let i=0;i<lengthnumber.value;i++){
        console.log(str.length)
      
        let index=Math.floor(Math.random()*str.length);
      
        console.log('Math.random',Math.random);
      
        console.log('Math.floor(Math.random()*str.length)',Math.floor(Math.random()*str.length));
      
        console.log(str[index]);
      
        password +=str[index];
    }
  
    passInput.value=password;

})
