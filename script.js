'use strict';

var buttons=document.querySelectorAll('button');
var len= Array.from(buttons).length
var arr=Array.from(buttons)
console.log(len, arr)

var c=0
for(let i of arr){
  //let c= i.replace ( /[^\d.]/g, '' );
  console.log(i)
  let a=i.innerHTML
  a=a.replace ( /[^\d.]/g, '' )
  a=parseInt(a)
  console.log(a)


  i.addEventListener('click', function(){ 
    i.innerHTML='button <br>'+(++a)
    document.getElementById('counter').innerHTML=++c
      })

}

