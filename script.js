/* Modo claro / oscuro */
document.addEventListener("DOMContentLoaded", function () {
    const btnTema = document.getElementById("btn-tema");

    // Verificamos que el botón exista antes de intentar usarlo
    if (!btnTema) return;

    function aplicarTema(oscuro) {
        document.body.classList.toggle("oscuro", oscuro);
        btnTema.textContent = oscuro ? "☀️" : "🌙";
    }

    // Al cargar la página, recuperamos la elección guardada
    aplicarTema(localStorage.getItem("tema") === "oscuro");

    btnTema.addEventListener("click", function () {
        const ahoraOscuro = !document.body.classList.contains("oscuro");
        aplicarTema(ahoraOscuro);
        // Guardamos la elección para la próxima visita
        localStorage.setItem("tema", ahoraOscuro ? "oscuro" : "claro");
    });
});
