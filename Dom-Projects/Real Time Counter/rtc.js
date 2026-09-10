const textArea = document.querySelector('textarea');
const counter = document.querySelector('#char-count');

textArea.addEventListener('input', () => {
    const textLength = textArea.value.trim().length;
    counter.textContent = `Character Count: ${textLength}/50`;
});


