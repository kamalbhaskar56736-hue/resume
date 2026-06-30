const questions = [
  {
    question: "भारत की सबसे लंबी नदी कौन सी है?",
    options: ["यमुना", "गंगा", "गोदावरी", "ब्रह्मपुत्र"],
    answer: "गंगा",
  },
  {
    question: "भारत का राष्ट्रीय पशु क्या है?",
    options: ["सिंह (शेर)", "बाघ", "चीता", "हाथी"],
    answer: "बाघ",
  },
  {
    question: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options: ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
    answer: "बृहस्पति",
  },
  {
    question: "पिंक सिटी (गुलाबी नगरी) के नाम से किस शहर को जाना जाता है?",
    options: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    answer: "जयपुर",
  },
  {
    question: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
    options: ["उत्तर प्रदेश", "मध्य प्रदेश", "महाराष्ट्र", "राजस्थान"],
    answer: "राजस्थान",
  },
  {
    question: "भारत ने अपना पहला क्रिकेट विश्व कप कब जीता था?",
    options: ["1975", "1983", "2007", "2011"],
    answer: "1983",
  },
  {
    question: "शिक्षक दिवस (Teachers' Day) किस तारीख को मनाया जाता है?",
    options: ["5 सितंबर", "2 अक्टूबर", "14 नवंबर", "26 जनवरी"],
    answer: "5 सितंबर",
  },
  {
    question: "मानव शरीर की सबसे बड़ी हड्डी कौन सी होती है?",
    options: [
      "स्टेप्स (Stapes)",
      "फीमर (Femur)",
      "रीढ़ की हड्डी",
      "हाथ की हड्डी",
    ],
    answer: "फीमर (Femur)",
  },
  {
    question: "कंप्यूटर का मस्तिष्क (Brain of Computer) किसे कहा जाता है?",
    options: ["मॉनिटर", "कीबोर्ड", "सीपीयू (CPU)", "माउस"],
    answer: "सीपीयू (CPU)",
  },
  {
    question: "भारत के किस राज्य में ताजमहल स्थित है?",
    options: ["दिल्ली", "उत्तर प्रदेश", "बिहार", "पंजाब"],
    answer: "उत्तर प्रदेश",
  },
];

function startquiz() {
  alert("Are you sure to Start Quiz");
  document.querySelector(".navbar").style.display = "none";
  document.querySelector(".container").style.display = "none";

  document.getElementById("quizPage").style.display = "block";
  loadquestion();
}
let currentquestion = 0;
let score = 0;
let time = 60;
let timer;

function startTimer() {
  time = 60;
  if(time<=10){
    document.getElementById("timer").style.color="red"
  }else{
    document.getElementById("timer").style.color="yellow"
  }

  document.getElementById("timer").innerText = `Time Left : ${time}s`;

  timer = setInterval(function () {
    time--;

    document.getElementById("timer").innerText = `Time Left : ${time}s`;

    if (time === 0) {
      clearInterval(timer);

      nextQuestion();
    }
  }, 1000);
}

function loadquestion() {
  clearInterval(timer);
  startTimer();
  const optionBtns = document.querySelectorAll(".option");

  document.getElementById("question").innerHTML =
    questions[currentquestion].question;

  document.getElementById("totalquestion").innerHTML =
    `Question: ${currentquestion + 1}/${questions.length}`;

  for (let i = 0; i < optionBtns.length; i++) {
    // Reset Button
    optionBtns[i].disabled = false;
    optionBtns[i].classList.remove("correct");
    optionBtns[i].classList.remove("wrong");

    optionBtns[i].innerText = questions[currentquestion].options[i];

    optionBtns[i].onclick = function () {
      optionBtns.forEach((btn) => (btn.disabled = true));

      if (optionBtns[i].innerText === questions[currentquestion].answer) {
        score++;
        optionBtns[i].classList.add("correct");
      } else {
        score -= 0.5;
        optionBtns[i].classList.add("wrong");

        optionBtns.forEach((btn) => {
          if (btn.innerText === questions[currentquestion].answer) {
            btn.classList.add("correct");
          }
        });
      }
    };
  }
}

function nextQuestion() {
  currentquestion++;

  if (currentquestion < questions.length) {
    loadquestion();
  } else {
    loadresult();
  }
}

function loadresult() {
  document.getElementById("quizPage").style.display = "none";
  document.getElementById("resultpage").style.display = "flex";
  document.getElementById("totalscore").innerHTML =
    `Your Total Score : ${score} / ${questions.length}`;
}
document.getElementById("leave").onclick = function () {
  document.getElementById("resultpage").style.display = "none";
  document.querySelector(".container").style.display = "flex";
};
