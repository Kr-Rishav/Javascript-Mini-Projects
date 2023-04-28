const questions = [
  {
    que: "Which of the following is a markup language?",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "What year was Javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
  },
];

// Get Html Selectors
const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll(".option");
// console.log(optionInputs);



let index = 0;
let right = 0,
    wrong = 0;
let total = questions.length;


// Functions 
const loadQuestion = () => {
  if(index=== total){
    return endQuiz();
  };
  reset();

  const data = questions[index];
  quesBox.innerText = `${index + 1})  ${data.que}`;
  // console.log(data);

  optionInputs[0].nextElementSibling.innerText = data.a;
  optionInputs[1].nextElementSibling.innerText = data.b;
  optionInputs[2].nextElementSibling.innerText = data.c;
  optionInputs[3].nextElementSibling.innerText = data.d;
};

const getAnswer = () => {
  let answer;
  optionInputs.forEach((input) => {
    if(input.checked){
      // console.log("Yes");
      answer = input.value;
    }
  });
  return answer;
};

const reset = ()=>{
   optionInputs.forEach((element)=>{
    element.checked = false;  

   })
};


const endQuiz = ()=>{
  document.getElementById("box").innerHTML = `
  <div style="text-align:center">
  <h3> Thank you for Playing the Quiz</h3>
  <h2> ${right} out of ${total} are Correct</h2>
  </div>
  `
};



const submitQuiz = () => { 
  const data = questions[index];
  const ans = getAnswer();
  // console.log(ans)  //for Cheaking Purpose
  // console.log(data.correct)    //for Cheaking Purpose
  if(ans=== data.correct){
    right++;
  }else{
    wrong++;
  }

  index++;
  loadQuestion();
  return;

};




// initial Call
loadQuestion();
