const formLogin = document.getElementById("formLogin");

formLogin.addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let users = JSON.parse(localStorage.getItem("users")) || {};

  if(users[email] && users[email].password === password) {
    alert("¡Bienvenido, " + users[email].nombres + "!");
    // Redirigir a la página dashboard o principal
    window.location.href = "index.html";  // Cambia por la ruta real de tu página
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
});