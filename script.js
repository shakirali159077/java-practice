// const x=25;
// const y=20;
// const z=x+y;
// console.log(z);


// const x=25;
// const y=20;
// const z=x-y;
// console.log(z);


// const x=25;
// const y=20;
// const z=x*y;
// console.log(z);


// let x=25;
// let y=20;
//  x++;
// console.log(x);



// let x=25;
// let y=20;
//  x+=y;
// console.log(x);


// let x=25;
// let y=20;
//  x+=y;
// console.log(x);



// function name() {
//     console.log("ali bro");
// }
// name();
// name();
// name();
// name();



// function sum(a,b) {
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
// }
// sum(5,9);




// let a=10;
// let num=Number(a);
// console.log(num+1000);




// x=1;
// const a=+prompt()
// if (a>0) {
  
// for (let i = 1; i <= a ; i++){
// x=x*i;
// } 
// } 
// console.log(x);






let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})
