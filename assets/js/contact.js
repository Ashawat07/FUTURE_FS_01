(function () {
  emailjs.init("-44p_Z9eSPtuT3wkJ"); // EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_zvxyfol",   // service ID
    "template_hpxr32g",  // template ID
    this
  )
  .then(() => {
    alert("Message sent successfully!");
    this.reset();
  })
  .catch((error) => {
    alert("Failed to send message. Try again.");
    console.error(error);
  });
});
