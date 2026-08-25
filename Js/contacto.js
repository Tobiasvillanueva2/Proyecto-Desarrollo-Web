// 1. REEMPLAZA CON TU PUBLIC KE
emailjs.init("_7g1UfUabbNC7uf1i");
console.log("EmailJS initialized with public key.");
const form = document.getElementById("form-consultas");
const btn = document.getElementById("btn-submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.disabled = true;
  btn.textContent = "Enviando...";

  // 2. REEMPLAZA CON TU SERVICE_ID Y TEMPLATE_ID
  emailjs
    .sendForm("service_8klt4lp", "template_y9ydf3s", this)
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


/* no podemos poner un segundo formulario. causa desconocida

emailjs.init("_7g1UfUabbNC7uf1i");
console.log("EmailJS initialized with public key.");
const form2 = document.getElementById("form-trabajo");
const btn2 = document.getElementById("btn-trabajo");

form2.addEventListener("submit", function (e) {
  e.preventDefault();

  btn2.disabled = true;
  btn2.textContent = "Enviando...";

  // 2. REEMPLAZA CON TU SERVICE_ID Y TEMPLATE_ID
  emailjs
    .sendForm("service_8klt4lp", "template_ex0keao", this)
    .then(() => {
      alert("¡Correo enviado con éxito!");
      form2.reset();
    })
    .catch((err) => {
      alert("Error al enviar el correo. Por favor intenta de nuevo.");
      console.error("EmailJS Error:", err);
    })
    .finally(() => {
      btn2.disabled = false;
      btn2.textContent = "Enviar";
    });
});
*/