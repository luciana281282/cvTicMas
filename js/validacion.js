const btnEnviar = document.getElementById('btn-enviar');


const validacion = (e) => {
  e.preventDefault();
  const nombreDeUsuario = document.getElementById('nom');
  const empresaDeUsuario = document.getElementById('empresa');
  const direcciónEmail = document.getElementById('email');
  
  if (nom.value === "") {
    alert("Por favor, escribe un Nombre.");
    usuario.focus();
    return false;
  }
  if (empresa.value === "") {
    alert("Por favor, escribe la Empresa.");
    usuario.focus();
    return false;
  }

  if (email.value === "") {
    alert("Por favor, escribe tu correo electrónico");
    email.focus();
    return false;
  }
  
  return true;
}
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

btnEnviar.addEventListener('click', validacion, emailValido);