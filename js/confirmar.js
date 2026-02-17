document.addEventListener("DOMContentLoaded", function () {
  var boton = document.querySelector("#confirmar");
  if (!boton) return;

  var nombre = document.querySelector("#name");
  var email = document.querySelector("#email");

  // Require config — never commit real credentials; use config.js (see config.example.js)
  if (typeof window.APP_CONFIG === "undefined" || !window.APP_CONFIG.firebase) {
    console.warn(
      "[Bodita] RSVP disabled: Create config.js from config.example.js and add your Firebase config."
    );
    boton.style.opacity = "0.5";
    boton.style.pointerEvents = "none";
    return;
  }

  var firebaseConfig = window.APP_CONFIG.firebase;
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

  boton.addEventListener("submit", function (e) {
    e.preventDefault();
    db.collection("confirmados")
      .add({
        nombre: nombre.value,
        email: email.value,
      })
      .then(function () {
        alert("Gracias por confirmar tu asistencia " + nombre.value);
        window.scrollTo(0, 0);
        window.location.reload();
      })
      .catch(function () {
        alert(
          "Error: por favor confirma directo a nuestros WhatsApp para anotarte en la lista"
        );
      });
  });
});
