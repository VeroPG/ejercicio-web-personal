document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.name.value;
  const surname = event.target.surname.value;
  const email = event.target.email.value;
  const matter = event.target.matter.value;
  const message = event.target.message.value;

  let msj = "";

  // Lógica de validación

  if (name.length < 3 || name.length > 20) {
    console.log("Longitud de nombre no válida, debe tener min 3 letras y máximo 20");
    msj += "Longitud de nombre no válida\n";
  }

  if (surname.length < 5 || surname.length > 30) {
    console.log("Longitud de apellido no válida, debe tener min 5 letras y máximo 30");
    msj += "Longitud de nombre no válida\n";
  }


  if (
    (!email.endsWith(".com") && !email.endsWith(".es")) ||
    !email.includes("@")
  ) {
    console.log("Formato no válido " + email);
    msj += "Formato no válido: " + email + "\n";
  }

  if (matter.length < 5 || matter.length > 40) {
    console.log("Longitud de asunto no válida, debe tener min 5 letras y máximo 40");
    msj += "Longitud de asunto no válida\n";
  }

  if (message.length < 20 || message.length > 250) {
    console.log("Longitud de mensaje no válida, debe tener min 20 letras y máximo 250");
    msj += "Longitud de mensaje no válida\n";
  }

  console.log(msj);

  // Comprobar si hay errores
  if (msj.length != 0) {
    alert(msj); 

    alert("Formulario enviado con éxito");
    event.target.submit();
  }
});
