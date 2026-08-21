// 1. REEMPLAZA CON TU PUBLIC KEY
emailjs.init("_yFz1xFE0WGUKFjY8");

const form = document.getElementById("form");
const btn = document.getElementById("btn-submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  btn.disabled = true;
  btn.textContent = "Enviando...";

  // 2. REEMPLAZA CON TU SERVICE_ID Y TEMPLATE_ID
  emailjs
    .sendForm("service_xgsdd8l", "template_6yjxt57", this)
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

const frases = [
  {
    texto: '"Un lector vive mil vidas antes de morir. El que nunca lee solo vive una."',
    autor: "— George R.R. Martin"
  },
  {
    texto: '"La lectura es para la mente lo que el ejercicio es para el cuerpo."',
    autor: "— Joseph Addison"
  },
  {
    texto: '"Estar solo con un buen libro es uno de los mayores placeres de la vida."',
    autor: "— Orlando A. Battista"
  },
  {
    texto: '"Un libro es un sueño que tienes en la mano."',
    autor: "— Neil Gaiman"
  },
  {
    texto: '"Los libros son una magia única y portátil."',
    autor: "— Stephen King"
  }
];

function cargarFraseAleatoria() {
  const fraseTexto = document.querySelector(".frase");
  const fraseAutor = document.querySelector(".frase span");

  // Si no existen los elementos en la pagina actual corta la funcionn
  if (!fraseTexto || !fraseAutor) return;

  // Selecciona un indice al azar dentro del array
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  const fraseElegida = frases[indiceAleatorio];

  // Reemplaza el texto en el HTML (preservando la etiqueta span del autor)
  fraseTexto.childNodes[0].textContent = `${fraseElegida.texto} `;
  fraseAutor.textContent = fraseElegida.autor;
}

// se ejecuta cuando toda la pagina se haya cargado
document.addEventListener("DOMContentLoaded", cargarFraseAleatoria);