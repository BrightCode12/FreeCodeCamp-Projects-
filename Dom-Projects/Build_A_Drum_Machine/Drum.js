const displayElement = document.querySelector("#display");
const allBtn = document.querySelectorAll("button");

const playAndDisplayAudio = (button) => {
    const BtnId = button.id
    displayElement.textContent = BtnId;

    const audioElement = button.querySelector('audio');
    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }
};

allBtn.forEach(button => { 
    button.addEventListener("click", () => {
        playAndDisplayAudio(button);
    });
});

document.addEventListener("keydown", (e) => {
    const keyPressed = e.key.toUpperCase();
    const targetBtn = Array.from(document.querySelectorAll("button")).find(
        button => button.querySelector("audio")?.id === keyPressed
    );
    if (targetBtn) {
        playAndDisplayAudio(targetBtn)
    }
});