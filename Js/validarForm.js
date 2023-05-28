function validar() {
  let logica = true
  let fullname = document.getElementById("fname").value
  let contacto = document.getElementById("contacto").value
  let evento = document.getElementById("evento").value

  if (fullname.length === 0) {
    alert("El nombre completo es obligatorio")
    logica = false
  }
  if (contacto.length === 0) {
    alert("El teléfono es obligatorio")
    logica = false
  }
  if (evento.length === 0) {
    alert("El evento es obligatorio")
    logica = false
  }

  if (logica) {
    grabar()


  }

}

function grabar() {
  alert("Grabando ....")
  document.getElementById("fullname").value = ""
  document.getElementById("contacto").value = ""
  document.getElementById("evento").value = ""

}