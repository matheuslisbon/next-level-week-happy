const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  zoomControl: false,
};
//create an add marker
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng
//create map
const map = L.map("mapid", options).setView([lat, lng], 15);

//create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

//creat icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  IconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

//create an add marker

L.marker([lat, lng], { icon }).addTo(map);

//image gallery

function selectImage(event) {
  const button = event.currentTarget;

  //retirar all classes active
  const buttons = document.querySelectorAll(".images button");
  buttons.forEach(removeActiveClass);

  function removeActiveClass(button) {
    button.classList.remove("active");
  }

  //selecionar a imagem clicada
  const image = button.children[0];
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar o container de imagem
  imageContainer.src = image.src;

  //adicionar a classe active ao botao clicado
  button.classList.add("active");
}