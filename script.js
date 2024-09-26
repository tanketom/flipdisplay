document.getElementById('textInput').addEventListener('input', function() {
    const text = this.value;
    const display = document.getElementById('display');
    display.innerHTML = ''; // Clear previous content

    for (let char of text) {
        const disc = document.createElement('div');
        disc.className = 'disc';
        disc.textContent = char;
        display.appendChild(disc);
    }
});