let currentQuestionIndex = 0;
let questions = [];
let userResponses = [];
const userId = 1; // Example user ID, replace with actual user ID logic
const testId = 1; // Example test ID, replace with actual test ID logic

function fetchQuestions() {
    const urlParams = new URLSearchParams(window.location.search);
    const testType = urlParams.get('type');
    console.log(`Fetching questions for test type: ${testType}`);
    fetch(`http://localhost:8081/ProductManagementApplicationIJ_II/TestQuestionServlet?type=${testType}`)
        .then(response => {
            console.log('Received response:', response);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Received data:', data);
            questions = data;
            showQuestion();
        })
        .catch(error => console.error('Error fetching questions:', error));
}

function showQuestion() {
    if (questions.length === 0) {
        console.error('No questions available to show.');
        return;
    }
    if (currentQuestionIndex < questions.length) {
        const questionElement = document.getElementById('question');
        const answerButtons = document.querySelectorAll('.answer-btn');

        const currentQuestion = questions[currentQuestionIndex];
        questionElement.innerText = currentQuestion.question;
        answerButtons.forEach((button, index) => {
            button.innerText = currentQuestion.answers[index];
            button.onclick = () => selectAnswer(currentQuestion.id, index);

        });
    } else {
        showResults();
    }
}

function selectAnswer(questionId, answerIndex) {
    // Get the current question
    const currentQuestion = questions[currentQuestionIndex];
    // Store the selected answer in a variable
    const selectedAnswer = currentQuestion.answers[answerIndex];
    console.log(`Selected answer for question ID ${questionId}: ${selectedAnswer}`);

    userResponses.push({ questionId: questionId, answerIndex: answerIndex, userId: userId, testId: testId, result: "example_result" });

    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '<h2>Thank you for completing the test!</h2><p>Your responses have been recorded.</p>';
    storeResults();
}

function storeResults() {
    console.log('Storing results:', JSON.stringify(userResponses));
    fetch('http://localhost:8081/ProductManagementApplicationIJ_II/StoreResultsServlet', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userResponses)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Results stored successfully:', data);
        })
        .catch(error => console.error('Error storing results:', error));
}

// Initialize the quiz
fetchQuestions();