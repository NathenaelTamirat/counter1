const addButton = document.getElementById("add")
const converterButton = document.getElementById("convertButton")
const viewer = document.getElementById("displayer")
const rowCounterDiv = document.getElementById("rowCounterDiv")
const noneDiv = document.getElementById("noneDiv")
const dateInput = document.getElementById("dateInput")
const weekCounter=document.getElementById("weekCounter")
const monthCounter=document.getElementById("monthCounter")
const yearCounter=document.getElementById("yearCounter")
const inputDiv = document.getElementById("inputDivs")
var days = 0;
var week = 0;
var month = 0;
var year = 0;
var checher= 0 ;

weekCounter.classList.remove("remover")
monthCounter.classList.remove("remover")
yearCounter.classList.remove("remover")
viewer.classList.remove("remover")
rowCounterDiv.classList.remove("remover")
noneDiv.classList.remove("remover")


function counter(){
    viewer.innerHTML = checher + " Days";
    weekCounter.innerHTML = week + ":Weeks"
     monthCounter.innerHTML = month + ":Months";
     yearCounter.innerHTML = year + ":Years";

 
    checher =checher +1;
   days= days + 1;


   if(days >7 ){
     days= days-7
     week++;
    }
    
   if(week>3 && days>2){
    week=week-4;
     month++;
    }
    
   if(month>12){
    month = month-13;
     year++;
    }
    

}


function convertButton(){
  yearCounter.classList.toggle("remover")
 monthCounter.classList.toggle("remover")
 weekCounter.classList.toggle("remover")
 inputDiv.classList.toggle("remover")
 viewer.classList.toggle("remover")
 rowCounterDiv.classList.toggle("remover")
 noneDiv.classList.toggle("remover")
 
}
