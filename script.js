// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Learn More button
const learnBtn = document.getElementById("learnBtn");

learnBtn.addEventListener("click", () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
});

// Contact form
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;

  formMessage.textContent =
    `Thanks, ${name}! Your message has been received.`;

  contactForm.reset();
});
