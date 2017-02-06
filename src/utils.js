const numberOfLoops = 3;

let doTimeout = (j)=>setTimeout(()=>{console.log("Number is "+j);},j*j*j*1000);


for(let i = 1; i <= numberOfLoops; i++){
  doTimeout(i);
}
