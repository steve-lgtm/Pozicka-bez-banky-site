


import calculator from "./calculate.js";
import loaded  from "./form-submission-handler.js"
import valid from "./validity.js";


export default[

    {

        hash:"domov",
        target:"router-view",
        getTemplate:(targetElm) =>
            document.getElementById(targetElm).innerHTML = document.getElementById("template-domov").innerHTML
    },
    {
       
        hash:"kontakt",
        target:"router-view",
        getTemplate:(targetElm) =>
            document.getElementById(targetElm).innerHTML = document.getElementById("template-kontakt").innerHTML
    },
    
    {
        hash:"formular",
        target:"router-view",
        getTemplate: (targetElm) =>{
          
            document.getElementById(targetElm).innerHTML = document.getElementById("template-formular").innerHTML;
            calculator();
            loaded();
            valid();
    
        }
    }    

];















    

      

