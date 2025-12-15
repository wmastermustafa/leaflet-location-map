const map = L.map("map").setView([36.5, -82.5], 5);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
}).addTo(map);

const markers = [];
const listContainer = document.getElementById("locationList");

locations.forEach((loc) => {
  const marker = L.marker([loc.lat, loc.lng])
    .addTo(map)
    .bindPopup(`<strong>${loc.name}</strong>`);

  markers.push(marker);

  const item = document.createElement("div");
  item.className = "location-item";
  item.textContent = loc.name;

  item.addEventListener("click", () => {
    map.setView([loc.lat, loc.lng], 12, { animate: true });
    marker.openPopup();
  });

  listContainer.appendChild(item);
});
