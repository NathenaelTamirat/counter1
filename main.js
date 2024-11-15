const addButton = document.getElementById("add")
const viewer = document.getElementById("displayer")
var days = 0;
var week = 0;
var month = 0;
var year = 0;
var checher= 0 ;
const weekCounter=document.getElementById("weekCounter")
const monthCounter=document.getElementById("monthCounter")
const yearCounter=document.getElementById("yearCounter")



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
// console.log(days)
