// Show a popup message when the page loads
window.onload = function() {
    alert('Welcome to the Fun Warrior Portfolio! Explore my skills and projects.');
    document.getElementById('popup').style.display = 'block';
};

// Close the popup when the close button is clicked
document.querySelector('.close-btn').onclick = function() {
    document.getElementById('popup').style.display = 'none';
};

// Use an online resource for background music
const backgroundMusic = document.getElementById('background-music');
backgroundMusic.src = 'https://www.bensound.com/bensound-music/bensound-sunny.mp3';

// Add floating items for visual effects
const items = document.querySelector('.floating-items');
for (let i = 0; i < 10; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    item.style.left = Math.random() * 100 + 'vw';
    item.style.animationDelay = Math.random() * 5 + 's';
    item.style.animationDuration = Math.random() * 2 + 3 + 's';
    items.appendChild(item);
}
