// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

  // Email form validation
  const form = document.querySelector("form");
  const emailInput = document.querySelector('input[type="email"]');
  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");

  form.appendChild(errorMessage);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      errorMessage.textContent = "Please enter a valid email address.";
    } else {
      errorMessage.textContent = "";
      console.log("Email submitted:", email);
      // You can replace the following line with your backend API call
      alert("Thanks for signing up!");
      emailInput.value = "";
    }
  });

  // Email format checker
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  // Scroll to features on button click (optional enhancement)
  const scrollToFeatures = document.querySelector(".signin-btn");
  const featuresSection = document.querySelector(".features");

  if (scrollToFeatures && featuresSection) {
    scrollToFeatures.addEventListener("click", () => {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // Optional: Enhance gradient animation via JS (in case CSS fails)
  const hero = document.querySelector(".hero");
  if (hero) {
    let angle = -45;
    setInterval(() => {
      angle += 0.5;
      hero.style.background = `linear-gradient(${angle}deg, #0f0c29, #302b63, #24243e)`;
    }, 3000);
  }

});

// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`