let mapContainer = document.getElementById("map-container");
let buttonsContainer = document.getElementById("buttons-container");
let backButton = document.getElementById("back-button");

function showMap(location) {
  buttonsContainer.style.display = "none";
  backButton.style.display = "block";
  switch (location) {
    case "mecanicos":
      mapContainer.innerHTML = "<img src='mecanicos-map.jpg' alt='Mapa de Mecánicos'>";
      break;
    case "hospitales":
      mapContainer.innerHTML = "<img src='hospitales-map.jpg' alt='Mapa de Hospitales'>";
      break;
    case "comisarias":
      mapContainer.innerHTML = "<img src='comisarias-map.jpg' alt='Mapa de Comisarías'>";
      break;
    default:
      mapContainer.innerHTML = "<p>No se encontró el mapa para esta ubicación.</p>";
  }
}

function goBack() {
  buttonsContainer.style.display = "flex";
  backButton.style.display = "none";
  mapContainer.innerHTML = "";
}
