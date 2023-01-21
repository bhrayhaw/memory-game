// Get all the buttons with the class "selectable-btn"
const selectableButtons = document.querySelectorAll(
    ".selectable-btn:not(.not-selectable)"
);
selectableButtons.forEach((btn) => {
    btn.addEventListener("click", function () {
        const group = this.dataset.group;
        document
            .querySelectorAll(`[data-group=${group}]:not(.not-selectable)`)
            .forEach((b) => b.classList.remove("selected"));
        this.classList.add("selected");
    });
});

const startButton = document.querySelector(".btn-start");
startButton.addEventListener(
    "click",
    function () {
        // Get the selected theme, number of players, and grid size
        const selectedTheme = document.querySelector(
            ".btn-numbers.selected"
        ).textContent;
        const selectedPlayers = document.querySelector(
            ".btn-number.selected"
        ).textContent;
        const selectedGrid =
            document.querySelector(".btn-grid.selected").textContent;

        // Check if the selected theme is "Numbers" and the selected grid size is "4x4"
        if (
            selectedTheme === "Numbers" &&
            selectedGrid === "4x4" &&
            selectedPlayers === "1"
        ) {
            // Create a 4x4 grid with the selected number of players
            window.location.href = "fourbyfour.html";
        }
        // Check if the selected theme is "Numbers" and the selected grid size is "6x6"
        if (
            selectedTheme === "Numbers" &&
            selectedGrid === "6x6" &&
            selectedPlayers === "1"
        ) {
             // Create a 4x4 grid with the selected number of players
            window.location.href = "sixbysix.html";
        }
    });