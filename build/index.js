const words = ["Cybersecurity", "API Development", "Crypto Trading"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetween = 5000;

function type() {
  const textElement = document.getElementById("typing-text");
  const currentWord = words[wordIndex];

  if (!isDeleting) {
    // Typing
    textElement.textContent = currentWord.substring(0, charIndex);
    charIndex++;
    if (charIndex > currentWord.length) {
      isDeleting = true;
      setTimeout(type, pauseBetween);
    } else {
      setTimeout(type, typingSpeed);
    }
  } else {
    // Deleting
    textElement.textContent = currentWord.substring(0, charIndex);
    charIndex--;
    if (charIndex < 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, deletingSpeed);
    }
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, typingSpeed);
});
