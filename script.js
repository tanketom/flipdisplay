fetch('charMap.json')
    .then(response => response.json())
    .then(charMap => {
        document.getElementById('textInput').addEventListener('input', function() {
            const text = this.value.toUpperCase();
            const display = document.getElementById('display');
            display.innerHTML = ''; // Clear previous content

            const rows = 7; // Number of rows per character
            const cols = 5; // Number of columns per character
            const gap = 2; // Gap between characters

            // Calculate the number of rows and columns needed
            const numRows = Math.ceil(window.innerHeight / 22); // 20px dot + 2px gap
            const numCols = Math.ceil(window.innerWidth / 22); // 20px dot + 2px gap

            // Create a grid of dots
            for (let i = 0; i < numRows; i++) {
                for (let j = 0; j < numCols; j++) {
                    const dotElement = document.createElement('div');
                    dotElement.className = 'dot';
                    display.appendChild(dotElement);
                }
            }

            // Update the grid with the text input
            let rowIndex = 0;
            let colIndex = 0;
            for (let char of text) {
                if (charMap[char]) {
                    for (let row of charMap[char]) {
                        for (let dot of row) {
                            const dotIndex = rowIndex * numCols + colIndex;
                            const dotElement = display.children[dotIndex];
                            if (dot) {
                                dotElement.classList.add('on');
                            } else {
                                dotElement.classList.remove('on');
                            }
                            colIndex++;
                        }
                        rowIndex++;
                        colIndex -= cols; // Move to the next row of the same character
                    }
                    colIndex += cols + gap; // Move to the next character position
                    rowIndex -= rows; // Reset to the first row for the next character
                }
            }
        });
    })
    .catch(error => console.error('Error loading charMap:', error));