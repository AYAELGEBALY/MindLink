const tests = {
  depression: {
    title: "Depression Test",
    questions: [
      {
        question: "I felt sad or down in the dumps.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I had little interest or pleasure in doing things.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt hopeless about the future.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I had trouble concentrating on things.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt tired or had little energy.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
      // ... more depression questions
    ]
  },
  anxiety: {
    title: "Anxiety Test",
    questions: [
      {
        question: "I felt nervous or anxious.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I found it hard to relax.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt like something awful might happen.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I had trouble sleeping due to worry.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt afraid as if something terrible might happen.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
    ]
  },

  mood_disorder: {
    title: "mood_disorder",
    questions: [
      {
        question: "I experienced frequent mood swings.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt irritable or easily annoyed.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I had trouble concentrating because of my mood.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt excessively high or elated.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I experienced periods of low energy and fatigue.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
    ]
  },

  addiction: {
    title: "addiction",
    questions: [
      {
        question: "I felt a strong urge to use a substance or engage in a behavior.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I tried to cut down or stop using a substance or behavior but couldn't.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I spent a lot of time obtaining, using, or recovering from the substance or behavior.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I neglected important activities in favor of the substance or behavior.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I continued using the substance or engaging in the behavior despite knowing it was harmful.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
    ]
  },

  eating_disorder: {
    title: "eating_disorder",
    questions: [
      {
        question: "I was preoccupied with thoughts of food, weight, or body image.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I restricted my food intake to control my weight.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I engaged in binge eating behaviors.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I used methods such as vomiting or excessive exercise to control my weight.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt out of control when eating.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
    ]
  },

  couple_therapy: {
    title: "couple_therapy",
    questions: [
      {
        question: "We had frequent arguments or conflicts.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt misunderstood or not heard by my partner.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "There was a lack of intimacy or affection in our relationship.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "We struggled with communication.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt unsatisfied or unhappy in the relationship.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
    ]
  },
  ocd: {
    title: "OCD Test",
    questions: [
      {
        question: "I was bothered by unwanted thoughts or images.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt compelled to perform certain actions repeatedly.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I spent much time checking things over and over.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt the need to arrange things in a specific way.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I had difficulty controlling these thoughts or behaviors.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
      // ... more OCD questions
    ]
  },
  ptsd: {
    title: "PTSD Test",
    questions: [
      {
        question: "I had repeated, disturbing memories of a stressful experience.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt very upset when reminded of a stressful experience.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I avoided activities or situations because they reminded me of a stressful experience.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I felt distant or cut off from other people.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      },
      {
        question: "I had trouble remembering important parts of a stressful experience.",
        answers: ["0 - Not at all", "1 - Sometimes", "2 - Often", "3 - Almost always"]
      }
      // ... more PTSD questions
    ]
  },
  adhd: {
    title: "ADHD Test",
    questions: [
      {
        question: "How often do you have trouble wrapping up the final details of a project?",
        answers: ["0 - Never", "1 - Rarely", "2 - Sometimes", "3 - Often"]
      },
      {
        question: "How often do you have difficulty organizing tasks and activities?",
        answers: ["0 - Never", "1 - Rarely", "2 - Sometimes", "3 - Often"]
      },
      {
        question: "How often do you have problems remembering appointments or obligations?",
        answers: ["0 - Never", "1 - Rarely", "2 - Sometimes", "3 - Often"]
      },
      {
        question: "How often do you fidget or squirm with your hands or feet?",
        answers: ["0 - Never", "1 - Rarely", "2 - Sometimes", "3 - Often"]
      },
      {
        question: "How often do you feel overly active and compelled to do things?",
        answers: ["0 - Never", "1 - Rarely", "2 - Sometimes", "3 - Often"]
      }
      // ... more ADHD questions
    ]
  }
};

const doctors = [
  {
    name: 'Dr. Aya',
    specialty: 'depression',
    profilePicture: '../img/images_dr/dr1.jpeg',
    link: '../html_files/dr_depression_test.html'
  },
  {
    name: 'Dr. John',
    specialty: 'anxiety',
    profilePicture: '../img/images_dr/dr.jpg',
    link: '../html_files/dr_depression_test.html'
  },
  {
    name: 'Dr. Mike',
    specialty: 'ocd',
    profilePicture: '../img/images_dr/dr1.jpeg',
    link: '../html_files/dr_depression_test.html'
  },
  {
    name: 'Dr. Jane',
    specialty: 'ptsd',
    profilePicture: '../img/images_dr/dr.jpg',
    link: '../html_files/dr_depression_test.html'
  },
  {
    name: 'Dr. Alice',
    specialty: 'adhd',
    profilePicture: '../img/images_dr/dr1.jpeg',
    link: '../html_files/dr_depression_test.html'
  },

  {
    name: 'Dr. mood',
    specialty: 'mood_disorder',
    profilePicture: '../img/images_dr/dr1.jpeg',
    link: '../html_files/dr_mood_disorder_test.html'
  },

  {
    name: 'Dr. addiction',
    specialty: 'addiction',
    profilePicture: '../img/images_dr/dr1.jpeg',
    link: '../html_files/dr_addiction_test.html'
  },

  {
    name: 'Dr. eating disorder',
    specialty: 'eating_disorder',
    profilePicture: '../img/images_dr/dr1.jpeg',
    link: '../html_files/dr_eating_disorder_test.html'
  },

  {
    name: 'Dr. couple',
    specialty: 'couple_therapy',
    profilePicture: '../img/images_dr/dr1.jpeg',
    link: '../html_files/dr_couple_therapy_test.html'
  },

  // Add more doctors as needed...
];

let currentTest;
let currentQuestionIndex = 0;
let totalScore = 0;

function startTest(testName) {
  currentTest = tests[testName];
  currentQuestionIndex = 0;
  totalScore = 0;
  document.getElementById('test-title').innerText = currentTest.title;
  document.getElementById('quiz-container').style.display = 'block';
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById('question');
  const answerButtons = document.querySelectorAll('.answer-btn');

  questionElement.innerText = currentTest.questions[currentQuestionIndex].question;
  answerButtons.forEach((button, index) => {
    button.innerText = currentTest.questions[currentQuestionIndex].answers[index];
    button.onclick = () => selectAnswer(index);
  });
}

function selectAnswer(index) {
  totalScore += index;  // Assuming the score corresponds to the index
  currentQuestionIndex++;
  if (currentQuestionIndex < currentTest.questions.length) {
    showQuestion();
  } else {
    showResults();
  }
}


function showResults() {
  const quizContainer = document.getElementById('quiz-container');
  const totalPossibleScore = currentTest.questions.length * 3; // Max score per question is 3
  const averageScore = (totalScore / totalPossibleScore) * 100;
  const doctorPageLink = `../html_files/dr_${currentTest.title.toLowerCase().replace(' test', '')}.html`;

  // Determine the color based on the average score
  let color;
  if (averageScore <= 33) {
    color = 'green';
  } else if (averageScore <= 66) {
    color = 'yellow';
  } else if (averageScore <= 80) {
    color = 'orange';
  } else {
    color = 'red';
  }

  // Filter doctors based on the current test's specialty
  const filteredDoctors = doctors.filter(doctor => doctor.specialty === currentTest.title.toLowerCase().replace(' test', ''));

  // Create doctor cards
  let doctorCardsHTML = '<div class="doctor-cards">';
  filteredDoctors.forEach(doctor => {
    doctorCardsHTML += `
      <div class="doctor-card">
        <img src="${doctor.profilePicture}" class = "profile-picture" alt="Profile Picture">
        <h3>${doctor.name}</h3>
        <p>${doctor.specialty.charAt(0).toUpperCase() + doctor.specialty.slice(1)}</p>
        <a href="${doctor.link}">Visit Page</a>
      </div>
    `;
  });
  doctorCardsHTML += '</div>';

  quizContainer.innerHTML = `
    <h2>Thank you for completing the test!</h2>
    <p>Your score: ${totalScore} / ${totalPossibleScore}</p>
    <p class="highlight-box" style="background-color:${color}; color:white;">Average score: ${averageScore.toFixed(2)}%</p>
    <p class="highlight-box">Choose one of our best doctors for ${currentTest.title.toLowerCase().replace(' test', '')} here:</p>
    ${doctorCardsHTML}
  `;
}
// Get the query parameter and start the test
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const testType = urlParams.get('type');
  if (testType && tests[testType]) {
    startTest(testType);
  }
});
