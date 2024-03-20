function celsius(){
     let input=document.querySelector('.inp').value;
     if(input!==''){
          let celsius=(input-32)*0.555;
     document.querySelector('h4').innerHTML='In°C';
     document.querySelector('.output').value=celsius+'°C';
     }
     else{
     document.querySelector('h4').innerHTML='Output';
     document.querySelector('.output').value='';
     document.querySelector('.inp').value='Enter value⚠️';
     }
}

function fahrenheit(){
     let input=document.querySelector('.inp').value;
     if(input!==""){
          let fahrenheit=(input*1.8)+32;
     document.querySelector('h4').innerHTML='In°F';
     document.querySelector('.output').value=fahrenheit+'°F';
     }
     else{
     document.querySelector('h4').innerHTML='Output';
     document.querySelector('.output').value='';
     document.querySelector('.inp').value='Enter value⚠️';
     }
}