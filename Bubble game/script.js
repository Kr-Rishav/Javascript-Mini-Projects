// Values Stored
let timer = 10;
let score = 0;
let randNum = 0;
const bottom = document.querySelector(".pbtm");


// Functions
function makeBubble() {
  let clutter = "";
  for (let i = 0; i <= 79; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${randomNumber}</div>`;
    const pbtm = document.querySelector(".pbtm");
    pbtm.innerHTML = clutter;
  }
}

function runTimer() {
  const timerInter = setInterval(() => {
    if (timer > 0) {
      timer--;
      const timerDisplay = document.querySelector("#timer");
      timerDisplay.innerHTML = timer;
    } else {
      clearInterval(timerInter);
      bottom.innerHTML = `<p style="font-size:35px">THE END</p>`;

    }
  }, 1000);
}

function hit() {
  const value = document.querySelector("#hit");
  randNum = Math.floor(Math.random() * 10);
  value.innerHTML = randNum;
}

function scoreIncrease() {
  score += 10;
  let scoreValue = document.querySelector("#score");
  scoreValue.innerHTML = score;
}

function scoreDecrease(){
  score -= 10;
  let scoreValue = document.querySelector("#score");
  scoreValue.innerHTML = score;
}

bottom.addEventListener("click", function (details) {
  let clickedNumber = Number(details.target.innerHTML);
  // console.log(clickedNumber)
  if(clickedNumber == randNum){
    hit();
    makeBubble();
    scoreIncrease();
    runTimer();
    console.log("Equal")
  }else{
    scoreDecrease();
    runTimer();

    console.log("Not equal")
  }
});



makeBubble();
