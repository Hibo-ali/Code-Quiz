(function(){
    // Functions
    function createQuiz(){
      // stores the HTML output
      const output = [];
  
      // for each question
      quizQuestions.forEach(
        (myCurrentQuestion, questionNumber) => {
  
          // variable that stores the possible answers
          const quizAnswers = [];
  
          // each available answer...
          for(letter in myCurrentQuestion.quizAnswers){
  
            // HTML radio button
            quizAnswers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${myCurrentQuestion.quizAnswers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${myCurrentQuestion.question} </div>
              <div class="answers"> ${quizAnswers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // track user's answers
      let correctNum = 0;
  
      // for each question...
      quizQuestions.forEach( (myCurrentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answers are correct
        if(userAnswer === myCurrentQuestion.correctAnswer){
          // add to the number of correct answers
          correctNum++;
          // Add 10 points
          score += 10;
  
          // answer will be green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is incorrect
        else{
          // Take away 10 sec from overall time left
          quizTimer -= 10;
          // answer will be red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show total correct answers out of total
      resultsContainer.innerHTML = `${correctNum} out of ${quizQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const startButton = document.querySelector('.start-quiz-btn button');
    const quizRules = document.querySelector('.quiz-rules');

    const allScores = document.querySelector("#scoreBoard");
    const timer = document.getElementById('time-left');
    const quizStart = document.getElementById('start');


var quizTimer = 120;
var timeLimit;
var score = 0;

// Build timer
var startTimer = function() {
  var timeLimit = setInterval(function() {
      if (quizTimer <= 0) {
          clearInterval(timeLimit);
          quizTimer = 0;
      } else {
          timer.textContent = "Time: " + quizTimer;
      }
      quizTimer -= 1;
  }, 1000);
}
   
      const quizQuestions = [
        // question #1
        {
            question: "What does HTML stand for?" ,
            quizAnswers: {
              a:"Home Tool Markup Language" , 
              b: "Hyper Text Markup Language" ,
              c: "Hyperlinks and Text Markup Language "
            },
            correctAnswer: "b"
          },
          // question #2
          {
            question: "Which character is used to indicate an end tag?" ,
            quizAnswers: {
              a: ">" ,
              b: "/" ,
              c: "<" ,
              d: "*"
            },
            correctAnswer: "b"
          },
          // question #3
          {
            question: "How do you call a function named 'myFunction'?" ,
            quizAnswers: {
              a: "myFunction()" ,
              b: "call function myFunction()" ,
              c: "set myFunction" 
             
            },
            correctAnswer: "a"
          },
          // question #4
          {
            question: "How can you add a comment in a JavaScript?" ,
            quizAnswers: {
              a:"//This is a comment" , 
              b: "--This is a comment--" ,
              c: "*This is a comment*"
            },
            correctAnswer: "a"
          },
          // question #5
          {
            question: "How do you round a number using JavaScript?" ,
            quizAnswers: {
              a: "Math.round" ,
              b: "roundUp" ,
              c: "math.Around" ,
              d: "round"
            },
            correctAnswer: "a"
          },
          // question #6
          {
            question: "The external JavaScript file must contain the script tag" ,
            quizAnswers: {
             1: "True",
             2: "False"
            },
            correctAnswer: '2'
          },
    ];
  
    // Return function
    createQuiz();
    var startQuiz = function(event) {
      startTimer();
      quizStart.remove();
}
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    // const startQuiz = document.getElementById("start");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    // startQuiz.addEventListener("click", showNextSlide);
  })();

