
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
