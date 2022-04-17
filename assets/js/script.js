//selecting all required elements
const start_btn = document.querySelector(".startBtn button");
const info_box = document.querySelector(".infoBox");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quizBox");
const result_box = document.querySelector(".resultBox");
const option_list = document.querySelector(".optionList");
const time_line = document.querySelector("header .timeLine");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timerSeconds");

// if startQuiz button clicked
start_btn.onclick = ()=>{
  info_box.classList.add("activeInfo"); //show info box
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo"); //hide info box
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuestions(0); //calling showQuestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(10); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
}