// === NAVBAR TOGGLE ===
const navLinks = document.querySelector(".nav-links");
const navToggle = document.createElement("button");
navToggle.innerHTML = "☰";
navToggle.classList.add("nav-toggle");
document.querySelector(".navbar").prepend(navToggle);

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// === CONTACT FORM VALIDATION ===
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill in all fields!");
      e.preventDefault();
    } else if (!email.includes("@")) {
      alert("⚠️ Please enter a valid email address!");
      e.preventDefault();
    } else {
      alert("✅ Message sent successfully!");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  const viewButtons = document.querySelectorAll(".view-details");

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const details = btn.nextElementSibling;

      // Toggle hidden class
      details.classList.toggle("hidden");

      // Change button text
      btn.textContent = details.classList.contains("hidden")
        ? "View Details"
        : "Hide Details";
    });
  });
});
