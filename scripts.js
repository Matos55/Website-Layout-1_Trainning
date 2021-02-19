


/* 
The Document method querySelector() returns the first Element within the document that matches the specified selector,
 or group of selectors. If no matches are found, null is returned.
 */

// Function expression to select elements
const selectElement = (s) => document.querySelector(s);

// Open the menu on click 
selectElement('.open').addEventListener('click', () => {      // Selecionar a class '.open' e adicionar uma class filha com 'ative'
    selectElement('.nav-list').classList.add('active');
});

// Close the menu on click 
selectElement('.close').addEventListener('click', () => {
    selectElement('.nav-list').classList.remove('active');     // Selecionar a class '.open' e remover a class filha 'ative'
});