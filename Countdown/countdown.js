const endDate = "22 April 2023 5:00 PM";
document.getElementById("end-date").innerText = endDate;


const days = document.getElementById("day");
const hrs = document.getElementById("hrs");
const mine = document.getElementById("min");
const seco = document.getElementById("sec");

// const inputs = document.querySelectorAll("input");


function clock(){
              const end = new Date(endDate);
              const now = new Date();
              const diff = (end - now) / 1000; //miliseconds

              if(diff<0) return;

              //Convert into Days
              const day = Math.floor(diff / 3600 / 24);

               //Convert into Hours
              const hr = Math.floor(diff / 3600) % 24;;

               //Convert into Minutes
              const min =  Math.floor(diff / 60) % 60;

               //Convert into Seconds
              const sec = Math.floor(diff) % 60;


              const show = days.value = day;
              const hours = hrs.value = hr;
              const minutes = mine.value = min;
              const seconds = seco.value = sec;



              // console.log(`End Date:- ${end}`);
              // console.log(`Now Date:- ${now}`);
              // console.log(`Different Date:- ${diff}`);
              // console.log(`${Math.floor(day)} Days`)
              // console.log(`${Math.floor(hrs)} Hrs`)
              // console.log(`${Math.floor(min)} Mins`)
              // console.log(`${Math.floor(sec)} Sec`)
};

clock();
setInterval(()=>{
              clock();
},1000)




// CALCULATIONS
/**
 * 1 Day = 24 hrs
 * 1 Hrs = 60 mins
 * 60 Mins = 3600 seconds
 */
