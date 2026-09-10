const textArea = document.querySelector('textarea');
const counter = document.querySelector('#char-count');

textArea.addEventListener('input', () => {
    const textLength = textArea.value.trim().length;
    counter.textContent = `Character Count: ${textLength}/50`;

    if (textLength >= 50) {
        textArea.value = textArea.value.slice(0, 50);
        textArea.style.borderColor = "#ef4444";
		textArea.style.boxShadow = "0 0 0 4px rgba(239, 68, 68, 0.25)";
        counter.style.color = `red`;
    } else {
        textArea.style.borderColor = "#334155";
        textArea.style.boxShadow = "none";
        counter.style.color = '#94a3b8';
    }
})


