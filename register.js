const formRegister = document.getElementById ("formRegister");

formRegister.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombres = document.getElementById("nombres").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const fechaNacimiento = document.getElementById("fecha").value;
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

  // Validar que no haya campos vacíos
    if (!nombres || !apellidos || !fechaNacimiento || !email || !password) {
        alert("Por favor completa todos los campos.");
        return
    }

    // Validar edad mínima 18 años
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    const dia = hoy.getDate() - nacimiento.getDate();

  if (mes < 0 || (mes === 0 && dia < 0)) {
    edad--;
  }

  if (edad < 18) {
    alert("Debes ser mayor de 18 años para registrarte.");
    return;
  }

  // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
    alert('Por favor ingresa un email válido.');
    return;
  }

  // Validar longitud de contraseña
  if (password.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  // Obtener usuarios guardados o iniciar objeto vacío
  let users = JSON.parse(localStorage.getItem("users")) || {};

  // Verificar si el email ya está registrado
  if (users[email]) {
    alert("Este email ya está registrado.");
    return;
  }

  // Guardar nuevo usuario
  users[email] = {
    nombres,
    apellidos,
    fechaNacimiento,
    password
  };

  // Guardar en localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert(`Registro exitoso. Bienvenido(a), ${nombres} ${apellidos}!`);
  formRegister.reset();
  window.location.href = "login.html";
});