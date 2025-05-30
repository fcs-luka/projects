function cambiarPagina(n) {
    document.querySelectorAll(".slide").forEach(slide => slide.classList.remove("active"));
    document.getElementById("pagina" + n).classList.add("active");
  }
  
  function responderNo() {
    document.getElementById("respuesta").innerText = 
      "Yo sé que sí lo estás jkskskj 🫢💋\nPero igual te amo mucho, tigrecita 🐯💕";
  }
  
  function responderSi() {
    document.getElementById("respuesta").innerText = 
      "No te enojes, tigrecita 🙈💕\n Mil abrazos psicologicos para tiiiii 😚💞";
  }
  