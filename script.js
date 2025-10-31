document.getElementById("wishBtn").addEventListener("click", function () {
  const confettiContainer = document.getElementById("confetti-container");
  const btn = document.getElementById("wishBtn");

  // Button animation
  btn.style.transform = "scale(0.95)";
  setTimeout(() => {
    btn.style.transform = "";
  }, 150);

  // Create confetti
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // Random position
    confetti.style.left = Math.random() * 100 + "vw";

    // Random size
    const size = Math.random() * 8 + 5;
    confetti.style.width = size + "px";
    confetti.style.height = size + "px";

    // Random animation duration
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

    // Random shape
    if (Math.random() > 0.7) {
      confetti.style.borderRadius = "0";
      confetti.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    }

    confettiContainer.appendChild(confetti);

    // Remove confetti after animation
    setTimeout(() => {
      if (confetti.parentNode) {
        confetti.parentNode.removeChild(confetti);
      }
    }, 5000);
  }

  // Birthday message
  setTimeout(() => {
    alert(
      "🎂 Happy Birthday, Siddhi! 📖 May your new chapter be filled with joy, success, and beautiful stories waiting to be written! 💕"
    );
  }, 500);
});
