// Get the mode toggle buttons
const lightModeBtn = document.getElementById('light-mode');
const darkModeBtn = document.getElementById('dark-mode');

// Function to enable light mode
lightModeBtn.onclick = function() {
    document.body.classList.remove('dark-mode');
};

// Function to enable dark mode
darkModeBtn.onclick = function() {
    document.body.classList.add('dark-mode');
};
