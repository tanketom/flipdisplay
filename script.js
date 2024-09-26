fetch('charMap.json')
    .then(response => response.json())
    .then(charMap => {
        document.getElementById('textInput').addEventListener('input', function() {
            const text = this.value.toUpperCase();
            const display = document.getElementById('display');
            display.innerHTML = ''; // Clear previous content

            for (let char of text) {
                if (charMap[char]) {
                    for (let row of charMap[char]) {
                        for (let dot of row) {
                            const dotElement = document.createElement('div');
                            dotElement.className = 'dot';
                            if (dot) {
                                dotElement.classList.add('on');
                            }
                            display.appendChild(dotElement);
                        }
                        // Add empty columns to separate characters
                        for (let i = 0; i < 2; i++) {
                            const spacer = document.createElement('div');
                            spacer.className = 'dot';
                            display.appendChild(spacer);
                        }
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error loading charMap:', error));