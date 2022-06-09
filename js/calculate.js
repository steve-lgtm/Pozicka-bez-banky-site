

export default function calculator(){
var slider = document.getElementById("suma");
var slider2 = document.getElementById("doba");
var output = document.getElementById("vystupsuma");
var output2 = document.getElementById("vystupdoba");
var output3 = document.getElementById("splatka");
var urk_sdz = 0.1834;
var sucet=Math.round(PMT(Math.pow((1+urk_sdz),1/12)-1,(parseFloat(slider2.value)*12),-1*parseFloat(slider.value))*100) /100;
output3.innerHTML=sucet;
output2.innerHTML = slider2.value;

slider2.oninput = function slide() {
    output2.innerHTML = this.value;
    if ( parseFloat(slider2.value)==1) urk_sdz = 0.3910;
    if ( parseFloat(slider2.value)>1 && parseFloat(slider2.value)<6 ) urk_sdz = 0.2098; //0.22;
    if ( parseFloat(slider2.value)>5 && parseFloat(slider2.value)<9 ) urk_sdz = 0.1834; //0.18;
        
    sucet=Math.round(PMT(Math.pow((1+urk_sdz),1/12)-1,(parseFloat(this.value)*12),-1*parseFloat(slider.value))*100) /100;
    output3.innerHTML=sucet;
}
output.innerHTML = slider.value;
slider.oninput = function slide2() {
    output.innerHTML = this.value;
    if ( parseFloat(slider2.value)==1) urk_sdz = 0.3910;
    if ( parseFloat(slider2.value)>1 && parseFloat(slider2.value)<6 ) urk_sdz = 0.2098; //0.22;
    if ( parseFloat(slider2.value)>5 && parseFloat(slider2.value)<9 ) urk_sdz = 0.1834; //0.18;
    sucet=Math.round(PMT(Math.pow((1+urk_sdz),1/12)-1,(parseFloat(slider2.value)*12),-1*parseFloat(this.value))*100) /100;
    output3.innerHTML=sucet;
}
}
/*

var output5 = document.getElementById("vystupsumaukazka");
var output6 = document.getElementById("vystupdobamesiac");


var output4 = document.getElementById("vystupurok");
var output7 = document.getElementById("vystupcelkova");
var output8 = document.getElementById("vystupsplatkaukazka");


output8.innerHTML=sucet;
output7.innerHTML=slider2.value*12*sucet;

output6.innerHTML = slider2.value*12;
output4.innerHTML =  Math.round(urk_sdz*100)/100;

   
    output6.innerHTML = this.value *12;
    
    sucet=Math.round(PMT(Math.pow((1+urk_sdz),1/12)-1,(parseFloat(this.value)*12),-1*parseFloat(slider.value))*100) /100;
    output8.innerHTML=sucet;
    output7.innerHTML = Math.round(this.value*12*sucet);
   
    output4.innerHTML =  Math.round(urk_sdz*100);;
}
output5.innerHTML = slider.value;


    
  
  output5.innerHTML = this.value;
 
  output7.innerHTML=Math.round(parseFloat(slider2.value)*12*sucet);
  output3.innerHTML=sucet;
  output8.innerHTML=sucet;
  output4.innerHTML = Math.round(urk_sdz*100);}
}*/
  
function PMT(ir, np, pv, fv, type) {
    
   //  * ir   - interest rate per month
   //  * np   - number of periods (months)
    // * pv   - present value
    // * fv   - future value
   //  * type - when the payments are due:
  //   *        0: end of the period, e.g. end of month (default)
   //  *        1: beginning of period
     
    var pmt, pvif;

    fv || (fv = 0);
    type || (type = 0);

    if (ir === 0)
        return -(pv + fv)/np;

    pvif = Math.pow(1 + ir, np);
    pmt = - ir * pv * (pvif + fv) / (pvif - 1);

    if (type === 1)
        pmt /= (1 + ir);

    return pmt;}
