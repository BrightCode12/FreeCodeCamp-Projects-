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