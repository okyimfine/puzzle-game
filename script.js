const emailDisplay = document.getElementById("emailDisplay");
const emailText = document.getElementById("emailText");
const puzzleButton = document.getElementById("puzzleButton");
const claimMessage = document.getElementById("claimMessage");

function generateRandomEmail() {
  const names = ["user", "cloud", "free", "code", "neo", "temp", "hacker", "gamer"];
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "proton.me", "mail.com", "tempmail.net"];
  const name = names[Math.floor(Math.random() * names.length)];
  const number = Math.floor(Math.random() * 99999);
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${name}${number}@${domain}`;
}

function showFakeHope() {
  const randomEmail = generateRandomEmail();
  emailText.textContent = `${randomEmail} got 4 hours for free ☁️`;

  emailDisplay.classList.remove("show");
  void emailDisplay.offsetWidth;
  emailDisplay.classList.add("show");

  setTimeout(() => {
    emailDisplay.classList.remove("show");
  }, 5000);
}

function startFakeHopeLoop() {
  showFakeHope();
  const nextTime = Math.floor(Math.random() * 2000) + 3000; // 3s - 5s
  setTimeout(startFakeHopeLoop, nextTime);
}
startFakeHopeLoop();

puzzleButton.addEventListener("click", () => {
  window.location.href = "https://yourusername.github.io/puzzle-game/";
});

window.addEventListener("load", () => {
  const solved = localStorage.getItem("cloudPuzzleSolved");

  if (solved === "true") {
    claimMessage.innerHTML = `
      ✅ Puzzle Solved!<br>
      You have claimed: <strong>100 Points</strong><br>
      Your Cloud Email: <strong>pleasegithub7@gmail.com</strong><br>
      Message Sent: “Thank you! Reward processed.”
    `;
  }
});
