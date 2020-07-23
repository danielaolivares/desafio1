document.getElementById("openModal").style.display= "none";
 function condition() {
  let rescuedName = document.getElementById("name").value;
  let rescuedLastName = document.getElementById("lastName").value;
  let rescuedEmail = document.getElementById("email").value;
  let rescuedPhone = document.getElementById("phone").value;
  let rescuedDescription = document.getElementById("description").value;
  if (rescuedName==="") {
    alert("No hay nombre");
    return false
  }if ( rescuedLastName==="") {
    alert("Escribe tu apellido"); 
    return false   
  }if ( rescuedEmail==="") {
    alert("Escribe tu mail");
    return false   
  } if ( rescuedPhone==="") {
    alert("Escribe tu telefono");
    return false  
  }if ( rescuedDescription==="") {
    alert("Falta descripcion");
    return false  
  } else {
    document.getElementById("openModal").style.display= "block";
      document.getElementById("showName").innerHTML=`<p> <div class="items">Nombre : ${rescuedName} </div><div class="items">
      Apellido : ${rescuedLastName}</div><div class="items"> Email : ${rescuedEmail}</div> <div class="items">Teléfono : ${rescuedPhone}</div>  <div class="items"> Descripción : ${rescuedDescription}</div></p>`
  }
 }
