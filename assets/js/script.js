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


let timeValue =  10;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //show quiz box
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 10; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuestions(que_count); //calling showQuestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the text of timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
}


// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
  window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .nextBtn");
const bottom_ques_counter = document.querySelector("footer .totalQuestions");

// if Next Que button clicked
next_btn.onclick = ()=>{
  if(que_count < questions.length - 1){ //if question count is less than total question length
      que_count++; //increment the que_count value
      que_numb++; //increment the que_numb value
      showQuestions(que_count); //calling showQuestions function
      queCounter(que_numb); //passing que_numb value to queCounter
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      startTimer(timeValue); //calling startTimer function
      startTimerLine(widthValue); //calling startTimerLine function
      timeText.textContent = "Time Left"; //change the timeText to Time Left
      next_btn.classList.remove("show"); //hide the next button
  }else{
      clearInterval(counter); //clear counter
      clearInterval(counterLine); //clear counterLine
      showResult(); //calling showResult function
  }
}