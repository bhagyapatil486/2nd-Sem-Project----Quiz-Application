
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
