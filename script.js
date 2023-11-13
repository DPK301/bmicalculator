function claculate(){
    const age=document.getElementById('age')
    const age1=document.getElementById('agel')
    const h=document.getElementById('height');
    const h1=document.getElementById('heightl');
    const w=document.getElementById('weight')
    const w1=document.getElementById('weightl')
   
      var wr=document.getElementById('weight').value
      var hr=document.getElementById('height').value/100;
    const a=document.getElementById('content')
    const b=document.getElementById('content1')
    const r=eval(wr/(hr**2));
    let n=r.toFixed(2)
    if (n< 18.5) {
        a.style.fontSize="30px"
          a.textContent="BMI value : "+n;
          b.style.fontSize="15px"
          b.style.backgroundColor="yellow"
           b.textContent="underweight"; 
    }
        else if (n >= 18.5 && n < 24.9){
            a.style.fontSize="30px"
            a.textContent="BMI value : "+n;
            b.style.fontSize="15px"
            b.style.backgroundColor="lightgreen"
            b.textContent="Healthy"; 
  
}else if (n >= 24.9 && n < 30){ 
    a.style.fontSize="30px"
    a.textContent="BMI value : "+n;
    b.style.fontSize="15px"
    b.style.backgroundColor="red"
    b.textContent="overweight"; 
  
}else if (n >= 30){ 
    a.style.fontSize="30px"
    a.textContent="BMI value : "+n;
    b.style.fontSize="15px"
    b.style.backgroundColor="darkred"
    b.textContent=" Obesity";
   
}

}
// function imperial(){
//     const a=document.getElementById('height').placeholder="in";
//     const b=document.getElementById('weight').placeholder="lbs";
    
// }
// function metric(){
//     const a=document.getElementById('height').placeholder="cm";
//     const b=document.getElementById('weight').placeholder="kg";
    
// }