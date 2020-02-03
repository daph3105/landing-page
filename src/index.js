import "./style.css"
//The website should show a dynamic date using JavaScript. The date should be the 26th of the previous
//month and shown in the following format: Thursday, Dec 26, 2019
//................dynamic date code starts...............................
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

//..............form submission..................................................
document.getElementById("contact-form").onclick = function() {
document.getElementById("my-form").submit();
document.getElementById("success-form").innerHTML ="Your message has been successfully sent.";
}
//................................................................................
//......headline change on Logo click.............................................
let headlines = ["Delicious cakes!","Amazing cakes!","Yummy cakes!", "Tasty cakes!"]

document.getElementById("logo").onclick = function() {
  let randomHeadline = headlines[Math.floor(Math.random() * headlines.length)]
  document.getElementById("headline").innerHTML = randomHeadline;
}
//..............................................................................
//Text with 50 words changes by choosing a specific URL parameter, with fallback.
//Parameter = text
window.onload = function() {
  try {
      let url_string = (window.location.href).toLowerCase();
      let url = new URL(url_string);
      let text = url.searchParams.get("text");
      if(!text){
//default text if no parameter:
        text="We are a small bakery, specializing in custom cakes for any special occasion. We believe firmly in baking fresh and from scratch each day, using only the best and local ingredients whenever possible. Check out our full list of services, and feel free to contact us if you have any questions."
      }
      document.getElementById("50words").innerHTML = text;
  } catch (err) {
      console.log("Issues with Parsing URL Parameter's - " + err);
  }
}