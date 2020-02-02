//The website should show a dynamic date using JavaScript. The date should be the 26th of the previous
//month and shown in the following format: Thursday, Dec 26, 2019

let currentDate = new Date();
let currentMonthNumber = currentDate.getMonth()+1;
let currentYear = currentDate.getFullYear();

const months = ['zero','Jan','Feb','Mar','Apr','May','Jun','Jul',
'Aug','Sep','Oct','Nov','Dec'];

if(currentMonthNumber==1){
  currentMonthNumber=12
  currentYear=currentYear-1
}
else{
  currentMonthNumber=currentMonthNumber-1
}

const DayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

let weekDate = new Date(currentYear+"-"+currentMonthNumber+"-"+"26");
let dayName = DayNames[weekDate.getDay()];


document.getElementById("date").innerHTML = dayName+", " + months[currentMonthNumber]+ " " +"26, "+currentYear+".";

//...............dynamic date code block ends here..............................

document.getElementById("contact-form").onclick = function() {
document.getElementById("my-form").submit();
document.getElementById("success-form").innerHTML ="Your message has been successfully sent.";
}

