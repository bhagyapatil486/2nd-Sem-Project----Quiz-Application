/* part 1 */
/* pushed by: Abhishek */


// part 1
// pushed by: Abhishek
// Description: Handlers for dark/light state rendering engine, localStorage storage validation triggers, and the core questions repository
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", toggleTheme);

function toggleTheme() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerText = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.innerText = "🌙";
        localStorage.setItem("theme", "light");
    }
}

function loadTheme() {
    let savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark-mode");
        themeBtn.innerText = "☀️";
    }
}

const questions = [
    {
        question: "Which language runs in the browser?",
        options: ["Java", "Python", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Object Method",
            "Digital Object Manager",
            "Desktop Output Module"
        ],
        answer: "Document Object Model"
    },
    {
        question: "Which method adds an event listener?",
        options: [
            "addHandler()",
            "addEventListener()",
            "attachEvent()",
            "listen()"
        ],
        answer: "addEventListener()"
    },
    {
        question: "Which storage remains after closing the browser?",
        options: [
            "SessionStorage",
            "LocalStorage",
            "CacheStorage",
            "TempStorage"
        ],
        answer: "LocalStorage"
    },
    {
        question: "Which array method creates a new array?",
        options: ["push", "map", "splice", "pop"],
        answer: "map"
    }
];









/* part 2 */
/* pushed by: Disha */

let currentQuestion = 0;
let score = 0;
let userName = "";

const startForm = document.getElementById("start-form");
const username = document.getElementById("username");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionText = document.getElementById("question");
const optionsDiv = document.getElementById("options");
const feedback = document.getElementById("feedback");

const scoreText = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");

const result = document.getElementById("result");
const questionCount = document.getElementById("question-count");

const bestScore = document.getElementById("best-score");



// part 3
// pushed by: Sahil
// Description: System execution starters and authentication form intercept handlers to transition into active views
showBestScore();
loadTheme();

startForm.addEventListener("submit", function (e) {
    e.preventDefault();

    userName = username.value.trim();

    if (userName === "") {
        alert("Please enter your name");
        return;
    }

    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");

    showQuestion();
});

/* part 4 */
/* pushed by: Uttkarsh */
// Description: Renders the active question object, coordinates iteration tracking indicators, and injects item variants into custom markup objects

function showQuestion() {
    optionsDiv.innerHTML = "";
    feedback.innerText = "";
    nextBtn.classList.add("hidden");

    let q = questions[currentQuestion];

    questionCount.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.innerText = q.question;

    q.options.forEach(function (option) {
        let button = document.createElement("button");

        button.innerText = option;
        button.classList.add("option-btn");

        button.addEventListener("click", function () {
            checkAnswer(button, option);
        });

        optionsDiv.appendChild(button);
    });
}



// part 5
// pushed by: Alok
// Description: Evaluates candidate answers, manages lock states on elements, handles score adjustments, and tracks progression click events
function checkAnswer(button, selectedOption) {
    let q = questions[currentQuestion];

    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function (btn) {
        btn.disabled = true;
    });

    if (selectedOption === q.answer) {
        score++;

        scoreText.innerText = `Score: ${score}`;

        button.classList.add("correct");

        feedback.innerText = "Correct!";
    } else {
        button.classList.add("wrong");

        feedback.innerText = `Correct Answer: ${q.answer}`;
    }

    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", function () {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

// part 6
// pushed by: Bhagyashree
// Description: Transforms metrics into percentage charts, updates final summary boards, templates candidate tracking info, and manages long-term high score indicators
function showResult() {
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");

    let percentage = Math.round((score / questions.length) * 100);

    document.documentElement.style.setProperty(
        "--percentage",
        percentage * 3.6 + "deg"
    );

    document.getElementById("percentage-display").innerText = percentage + "%";
    document.getElementById("correct-count").innerText = score;
    document.getElementById("wrong-count").innerText = questions.length - score;
    document.getElementById("final-score").innerText = `${score}/${questions.length}`;

    result.innerHTML = `
        <strong>Candidate Name:</strong> ${userName}<br>
        <strong>Total Questions:</strong> ${questions.length}<br>
        <strong>Completion Rate:</strong> 100%<br>
        <strong>Status:</strong> ${percentage >= 50 ? "PASS ✅" : "FAIL ❌"}
    `;
    saveBestScore(percentage);
}

function saveBestScore(currentScore) {
    let best = localStorage.getItem("bestScore");

    if (best === null || currentScore > Number(best)) {
        localStorage.setItem("bestScore", currentScore);
        best = currentScore;
    }

    bestScore.innerText = `Best Score: ${best}%`;
}

function showBestScore() {
    let best = localStorage.getItem("bestScore");

    if (best !== null) {
        bestScore.innerText = `Best Score: ${best}%`;
    }
}
