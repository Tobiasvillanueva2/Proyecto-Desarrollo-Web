// 1. REEMPLAZA CON TU PUBLIC KEY

emailjs.init("_yFz1xFE0WGUKFjY8");
console.log("EmailJS initialized with public key.");
const form = document.getElementById("form-consultas");
const btn = document.getElementById("btn-submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.disabled = true;
  btn.textContent = "Enviando...";

  // 2. REEMPLAZA CON TU SERVICE_ID Y TEMPLATE_ID
  emailjs
    .sendForm("service_xgsdd8l", "template_bntnune", this)
    .then(() => {
      alert("¡Correo enviado con éxito!");
      form.reset();
    })
    .catch((err) => {
      alert("Error al enviar el correo. Por favor intenta de nuevo.");
      console.error("EmailJS Error:", err);
    })
    .finally(() => {
      btn.disabled = false;
      btn.textContent = "Enviar";
    });
});