/** @format */

const apiKey = "AIzaSyB31rKnpoviwC3ICW42279ewsgOcMr2Tvk";

// Функция для загрузки и отображения карты
function initMap() {
  const mapContainer = document.getElementById("map");

  // Создание объекта карты
  const map = new google.maps.Map(mapContainer, {
    center: { lat: 40.409264, lng: 49.867092 }, // Координаты центра карты (например, Лондон)
    zoom: 10, // Масштаб карты
  });
}

// Загрузка Google Maps API и выполнение функции initMap
function loadGoogleMapsScript() {
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);
}

// Загрузка карты при загрузке страницы
window.onload = loadGoogleMapsScript;
