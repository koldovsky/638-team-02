
function initMap() {
    // The location of Uluru
    const uluru = { lat: 49.834081, lng: 24.010348 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("google-map"), {
      zoom: 13,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }