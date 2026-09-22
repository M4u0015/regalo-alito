// ===============================
// PERSONALIZA ESTA PARTE
// ===============================

const fechaInicio = new Date("2026-07-11T10:30:00");

// Escribe aquí el mensaje que quieres que aparezca letra por letra.
const mensajeTexto =
`Mi alito,

hoy quiero opsequiarte estas pequeñas flores amarillas,
pero sobre todo quiero recordarte lo especial
que eres para mi.

Gracias por cada momento, cada sonrisa
y cada recuerdo que hemos ido construyendo juntos.

Te amito muchísimo mi nena. 💛🌻`;

// ===============================
// ABRIR REGALO Y MÚSICA
// ===============================

const boton = document.getElementById("abrir");
const inicio = document.getElementById("inicio");
const regalo = document.getElementById("regalo");
const musica = document.getElementById("musica");

boton.addEventListener("click", () => {
  inicio.style.display = "none";
  regalo.classList.remove("oculto");

  // En celulares el navegador normalmente exige una interacción
  // antes de permitir reproducir música.
  musica.play().catch(() => {});

  escribirMensaje();
});

// ===============================
// TEXTO QUE APARECE POCO A POCO
// ===============================

function escribirMensaje() {
  const elemento = document.getElementById("mensaje");
  let i = 0;

  function escribir() {
    if (i < mensajeTexto.length) {
      elemento.textContent += mensajeTexto.charAt(i);
      i++;
      setTimeout(escribir, 38);
    }
  }

  escribir();
}

// ===============================
// CONTADOR
// ===============================

function actualizarContador() {
  const ahora = new Date();
  const inicio = fechaInicio;

  let diferencia = ahora - inicio;

  if (diferencia < 0) {
    document.getElementById("tiempo").textContent =
      "Nuestro momento está por comenzar 💛";
    return;
  }

  const segundosTotales = Math.floor(diferencia / 1000);

  const dias = Math.floor(segundosTotales / 86400);
  const horas = Math.floor((segundosTotales % 86400) / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = segundosTotales % 60;

  document.getElementById("tiempo").textContent =
    `${dias} días ${horas} horas ${minutos} minutos ${segundos} segundos`;
}

setInterval(actualizarContador, 1000);
actualizarContador();

// ===============================
// CORAZÓN DE GIRASOLES
// ===============================
// ===============================
// ===============================
// CORAZÓN DE GIRASOLES
// ===============================
// ===============================
// CORAZÓN DE GIRASOLES
// ===============================

// ===============================
// CORAZÓN DE GIRASOLES
// ===============================

const contenedor = document.getElementById("corazonFlores");

const puntos = [];


// ======================================
// FORMA DEL CORAZÓN
// ======================================

const filas = [

  // Parte superior izquierda
  { y: 18, inicio: 65,  fin: 115 },

  // Parte superior derecha
  { y: 18, inicio2: 245, fin2: 295 },


  { y: 39, inicio: 45,  fin: 135 },
  { y: 39, inicio2: 225, fin2: 315 },


  { y: 60, inicio: 35,  fin: 150 },
  { y: 60, inicio2: 210, fin2: 325 },


  // Aquí empieza a cerrarse el corazón
  { y: 81, inicio: 30, fin: 330 },

  { y: 102, inicio: 27, fin: 333 },

  { y: 123, inicio: 30, fin: 330 },

  { y: 144, inicio: 38, fin: 322 },

  { y: 165, inicio: 52, fin: 308 },

  { y: 186, inicio: 68, fin: 292 },

  { y: 207, inicio: 87, fin: 273 },

  { y: 228, inicio: 108, fin: 252 },

  { y: 249, inicio: 132, fin: 228 },

  // Punta
  { y: 270, inicio: 163, fin: 197 }

];


// ======================================
// CREAR LAS FLORES
// ======================================

filas.forEach((fila) => {

  // Grupo izquierdo / fila completa
  if (fila.inicio !== undefined) {

    for (let x = fila.inicio; x <= fila.fin; x += 21) {

      puntos.push({
        x: x + (Math.random() * 5 - 2.5),
        y: fila.y + (Math.random() * 5 - 2.5)
      });

    }
  }


  // Grupo derecho de la parte superior
  if (fila.inicio2 !== undefined) {

    for (let x = fila.inicio2; x <= fila.fin2; x += 21) {

      puntos.push({
        x: x + (Math.random() * 5 - 2.5),
        y: fila.y + (Math.random() * 5 - 2.5)
      });

    }
  }

});


// ======================================
// CREAR GIRASOLES
// ======================================

puntos.forEach((p, index) => {

  const flor = document.createElement("div");

  flor.className = "girasol";

  flor.style.left = `${p.x}px`;
  flor.style.top = `${p.y}px`;

  flor.style.animationDelay =
    `${-(index % 10) * 0.15}s`;

  contenedor.appendChild(flor);

});

// ===============================
// FLORECITAS QUE CAEN CON EL VIENTO
// ===============================

function crearPetalo() {
  const petalo = document.createElement("div");
  petalo.className = "petalo";

  const tipos = ["🌼", "🌻", "🌸", "✿"];
  petalo.textContent = tipos[Math.floor(Math.random() * tipos.length)];

  const tamano = 12 + Math.random() * 18;
  const duracion = 5 + Math.random() * 7;
  const viento = (Math.random() * 240 - 120) + "px";

  petalo.style.left = Math.random() * 100 + "vw";
  petalo.style.fontSize = tamano + "px";
  petalo.style.animationDuration = duracion + "s";
  petalo.style.setProperty("--viento", viento);

  document.getElementById("petalos").appendChild(petalo);

  setTimeout(() => petalo.remove(), duracion * 1000);
}

setInterval(crearPetalo, 350);

// Crear unas cuantas inmediatamente
for (let i = 0; i < 12; i++) {
  setTimeout(crearPetalo, i * 180);
}
