/* Modo claro / oscuro  */
const btnTema = document.getElementById("btn-tema");

function aplicarTema(oscuro) {
  document.body.classList.toggle("oscuro", oscuro);
  btnTema.textContent = oscuro ? "☀️" : "🌙";
}

//  al cargar la página, recuperamos la elección guardada
aplicarTema(localStorage.getItem("tema") === "oscuro");

btnTema.addEventListener("click", function () {
  const ahoraOscuro = !document.body.classList.contains("oscuro");
  aplicarTema(ahoraOscuro);
  // guardamos la elección para la próxima visita
  localStorage.setItem("tema", ahoraOscuro ? "oscuro" : "claro");
});
