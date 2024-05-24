// Show a popup message when the page loads
window.onload = function() {
    alert('Welcome to my Fun Warrior Portfolio! Explore my skills and projects.');
};

// Add floating items for visual effects
for (let i = 0; i < 15; i++) {
    const floatingItem = document.createElement('div');
    floatingItem.classList.add('floating-item');
    floatingItem.style.left = ${Math.random() * 100}vw;
    floatingItem.style.animationDelay = ${Math.random() * 5}s;
    floatingItem.style.animationDuration = ${Math.random() * 2 + 3}s;
    document.body.appendChild(floatingItem);
}
