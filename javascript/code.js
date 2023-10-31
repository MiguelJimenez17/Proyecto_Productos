let contador = 0;
let contenido = document.getElementById("container-data");

while (contador < 4) {
  contenido.innerHTML += `
  <article class="card" id="card-data">
      <div class="card__img">
        <img src="assets/img/card__example__eddie.jpg" alt="">
      </div>
      <div class="card__content">

        <header class="card__title">
          <h1>
            Carro Deportivo
          </h1>
          <div class="card__precio">
            50.000.000$
          </div>
        </header>
        <div class="card__descripcion">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure impedit consectetur facilis debitis
          reprehenderit omnis. Cupiditate incidunt officiis dicta
        </div>
      </div>
    </article>
  `;
  contador++;
}

let btn_save = document
  .getElementById("btn")
  .addEventListener("submit", (e) => {
    if (!validateForm()) {
      e.preventDefault();
    }
  });

function validateForm() {
  let img = document.getElementById("image_pro").value;
  let nombre_pro = document.getElementById("nombre_pro").value;
  let precio_pro = document.getElementById("precio_pro").value;
  let descripcion_pro = document.getElementById("descripcion_pro").value;

  if (
    img === "" ||
    nombre_pro === "" ||
    precio_pro === "" ||
    descripcion_pro === ""
  ) {
    alert("Favor diligenciar todos los campos");
  } else {
    alert("Producto guardado");
  }
}
