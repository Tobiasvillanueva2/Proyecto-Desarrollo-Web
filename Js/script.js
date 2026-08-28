// "Base de Datos"
const biblioteca = [
  {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    sinopsis:
      "La historia épica de la familia Buendía a lo largo de siete generaciones en el pueblo mágico de Macondo.",
  },
  {
    titulo: "El principito",
    autor: "Antoine de Saint-Exupéry",
    sinopsis:
      "Un aviador varado en el desierto conoce a un joven príncipe que viaja de planeta en planeta descubriendo la naturaleza humana.",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    sinopsis:
      "Una aterradora visión distópica donde un régimen totalitario y el Gran Hermano vigilan cada movimiento y pensamiento.",
  },
  {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    sinopsis:
      "Las aventuras de un hidalgo español que enloquece tras leer demasiados libros de caballería y decide convertirse en caballero andante.",
  },
  {
    titulo: "Fahrenheit 451",
    autor: "Ray Bradbury",
    sinopsis:
      "En una sociedad futura los libros están prohibidos y los bomberos tienen la misión de quemar cualquier ejemplar que encuentren.",
  },
  {
    titulo: "Orgullo y prejuicio",
    autor: "Jane Austen",
    sinopsis:
      "La turbulenta relación entre Elizabeth Bennet y el altivo señor Darcy en la Inglaterra rural del siglo XIX.",
  },
  {
    titulo: "Crónica de una muerte anunciada",
    autor: "Gabriel García Márquez",
    sinopsis:
      "La reconstrucción periodística y literaria de un asesinato anunciado que todo un pueblo conocía pero nadie evitó.",
  },
  {
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    sinopsis:
      "Un joven hobbit asume la peligrosa misión de destruir un anillo de poder antes de que caiga en manos del Señor Oscuro.",
  },
  {
    titulo: "Un mundo feliz",
    autor: "Aldous Huxley",
    sinopsis:
      "Una sociedad futurista tecnológicamente avanzada donde las personas son condicionadas desde su nacimiento para ser felices y obedientes.",
  },
  {
    titulo: "El alquimista",
    autor: "Paulo Coelho",
    sinopsis:
      "Un joven pastor andaluz emprende un viaje hacia las pirámides de Egipto en busca de un tesoro oculto y su Leyenda Personal.",
  },
  {
    titulo: "Ficciones",
    autor: "Jorge Luis Borges",
    sinopsis:
      "Una fascinante colección de relatos cortos sobre laberintos, bibliotecas infinitas, espejos y paradojas filosóficas.",
  },
  {
    titulo: "Rayuela",
    autor: "Julio Cortázar",
    sinopsis:
      "Una obra maestra de la literatura que invita al lector a recorrer sus capítulos de manera secuencial o en un orden no lineal.",
  },
  {
    titulo: "Crimen y castigo",
    autor: "Fyodor Dostoevsky",
    sinopsis:
      "Un estudiante empobrecido en San Petersburgo comete un asesinato justificándolo por fines superiores, desencadenando una tortura psicológica.",
  },
  {
    titulo: "Pedro Páramo",
    autor: "Juan Rulfo",
    sinopsis:
      "Juan Preciado viaja al pueblo fantasma de Comala en busca de su padre, encontrando las voces y murmullos de los muertos.",
  },
  {
    titulo: "La metamorfosis",
    autor: "Franz Kafka",
    sinopsis:
      "Un comerciante llamado Gregor Samsa despierta una mañana transformado en un monstruoso insecto.",
  },
  {
    titulo: "Drácula",
    autor: "Bram Stoker",
    sinopsis:
      "El joven abogado Jonathan Harker viaja a Transilvania para ayudar a un misterioso conde a comprar propiedades en Londres.",
  },
  {
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    sinopsis:
      "Un científico obsesionado desafía a la naturaleza creando vida a partir de restos humanos, abandonando a su creación.",
  },
  {
    titulo: "El retrato de Dorian Gray",
    autor: "Oscar Wilde",
    sinopsis:
      "Un joven aristócrata vende su alma para mantener su juventud eterna mientras un retrato al óleo refleja sus pecados.",
  },
  {
    titulo: "La sombra del viento",
    autor: "Carlos Ruiz Zafón",
    sinopsis:
      "En la Barcelona de posguerra, un niño encuentra un libro olvidado en un misterioso cementerio de libros y descubre un oscuro secreto.",
  },
  {
    titulo: "Ensayo sobre la ceguera",
    autor: "José Saramago",
    sinopsis:
      "Una repentina e inexplicable epidemia de ceguera blanca se propaga rápidamente reduciendo la sociedad al caos.",
  },
  {
    titulo: "El hobbit",
    autor: "J.R.R. Tolkien",
    sinopsis:
      "El pacífico Bilbo Bolsón es arrastrado a una gran aventura para recuperar el tesoro de los enanos custodiado por el dragón Smaug.",
  },
  {
    titulo: "Rebelión en la granja",
    autor: "George Orwell",
    sinopsis:
      "Una sátira política donde los animales de una granja expulsan a los humanos para crear una sociedad de igualdad que termina corrompiéndose.",
  },
  {
    titulo: "El nombre de la rosa",
    autor: "Umberto Eco",
    sinopsis:
      "Un fraile franciscano investiga una serie de misteriosas muertes en una abadía benedictina en el siglo XIV.",
  },
  {
    titulo: "Los miserables",
    autor: "Victor Hugo",
    sinopsis:
      "La lucha de Jean Valjean por la redención tras pasar diecinueve años en prisión por robar un trozo de pan.",
  },
  {
    titulo: "Hábitos atómicos",
    autor: "James Clear",
    sinopsis:
      "Una guía práctica sobre cómo pequeños cambios cotidianos de un 1% pueden transformarse en resultados extraordinarios a largo plazo.",
  },
  {
    titulo: "El túnel",
    autor: "Ernesto Sabato",
    sinopsis:
      "El pintor Juan Pablo Castel relata desde prisión las motivaciones obsesivas que lo llevaron a asesinar a María Iribarne.",
  },
  {
    titulo: "Dune",
    autor: "Frank Herbert",
    sinopsis:
      "El joven Paul Atreides debe viajar al inhóspito planeta desértico Arrakis, la única fuente del recurso más valioso del universo.",
  },
  {
    titulo: "El hombre en busca de sentido",
    autor: "Viktor Frankl",
    sinopsis:
      "Un psiquiatra relata sus experiencias vividas en los campos de concentración nazis y explica su método para encontrar propósito en el dolor.",
  },
  {
    titulo: "Moby Dick",
    autor: "Herman Melville",
    sinopsis:
      "La obsesiva travesía del capitán Ahab a bordo del barco Pequod para vengarse de la gran ballena blanca.",
  },
  {
    titulo: "El perfume",
    autor: "Patrick Süskind",
    sinopsis:
      "Un hombre en la Francia del siglo XVIII posee un sentido del olfato prodigioso pero carece de olor propio, desatando una búsqueda macabra.",
  },
  {
    titulo: "La Odisea",
    autor: "Homero",
    sinopsis:
      "Las legendarias aventuras y dificultades del héroe griego Odiseo en su largo viaje de regreso a su hogar en Ítaca.",
  },
  {
    titulo: "Los juegos del hambre",
    autor: "Suzanne Collins",
    sinopsis:
      "En un futuro distópico, jóvenes de doce distritos son obligados a luchar a muerte en un evento televisado a nivel nacional.",
  },
  {
    titulo: "La metamorfosis de la mente",
    autor: "Carl Jung",
    sinopsis:
      "Un estudio profundo sobre los símbolos, los arquetipos y las dinámicas del inconsciente colectivo en la psique humana.",
  },
  {
    titulo: "El código Da Vinci",
    autor: "Dan Brown",
    sinopsis:
      "Un simbolista e investigadora descubren un misterio religioso celosamente guardado tras un asesinato en el Museo del Louvre.",
  },
  {
    titulo: "Harry Potter y la piedra filosofal",
    autor: "J.K. Rowling",
    sinopsis:
      "Un niño huérfano descubre en su undécimo cumpleaños que es un mago y es invitado a estudiar en la escuela Hogwarts.",
  },
  {
    titulo: "El viejo y el mar",
    autor: "Ernest Hemingway",
    sinopsis:
      "La heroica batalla entre un anciano pescador cubano en racha de mala suerte y un gigante pez espada en las aguas del Golfo.",
  },
  {
    titulo: "Cumbres borrascosas",
    autor: "Emily Brontë",
    sinopsis:
      "Una apasionada y destructiva historia de amor, venganza y obsesión en los desolados páramos de Inglaterra.",
  },
  {
    titulo: "Sapiens: De animales a dioses",
    autor: "Yuval Noah Harari",
    sinopsis:
      "Un recorrido fascinante por la historia de la humanidad, desde la aparición del Homo sapiens hasta las revoluciones tecnológicas modernas.",
  },
  {
    titulo: "El principito de las tinieblas",
    autor: "H.P. Lovecraft",
    sinopsis:
      "Una colección de cuentos de horror cósmico donde los seres humanos descubren entidades antiguas e incomprensibles.",
  },
  {
    titulo: "Fundación",
    autor: "Isaac Asimov",
    sinopsis:
      "Un matemático predice científicamente la caída inminente del Imperio Galáctico y diseña un plan para preservar el conocimiento humano.",
  },
];

const inputBusqueda = document.getElementById("inputBusqueda");
const listaLibros = document.getElementById("listaLibros");

function mostrarLibros(libros) {
  listaLibros.innerHTML = "";

  if (libros.length === 0) {
    listaLibros.innerHTML = "<li>No se encontraron libros</li>";
    return;
  }

  libros.forEach((libro) => {
    const li = document.createElement("li");

    li.innerHTML = `
      <div class="encabezado-libro">
         <strong>"${libro.titulo}"</strong> - ${libro.autor}
      </div>
      <div class="sinopsis-libro">
        <p>${libro.sinopsis || "Sinopsis no disponible."}</p>
      </div>
      <div class="botones">
      <div class="boton">
        <button class="reserva"><a href="reserva-libro.html">Reservar</a></button>
        <button>Cancelar</button>
      </div>
    `;

    li.addEventListener("click", () => {
      li.classList.toggle("expandida");
    });

    listaLibros.appendChild(li);
  });
}

inputBusqueda.addEventListener("input", () => {
  const texto = inputBusqueda.value.toLowerCase();
  const resultado = biblioteca.filter(
    (libro) => libro.titulo.toLowerCase().includes(texto) 
    ||libro.autor.toLowerCase().includes(texto),);
  mostrarLibros(resultado);
});

mostrarLibros(biblioteca);