// future interactions ke liye
console.log("Portfolio Loaded Successfully");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.send("service_zvxyfol", "template_fzsiyj5", {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  })
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch(() => {
    alert("Error sending message");
  });
});
