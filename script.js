// Get the mode toggle buttons
const lightModeBtn = document.getElementById('light-mode');
const darkModeBtn = document.getElementById('dark-mode');

// Function to enable light mode
lightModeBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
});

// Function to enable dark mode
darkModeBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
});
