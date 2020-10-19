//create map
const map = L.map('mapid').setView([ -8.05389, -34.88111], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
  iconUrl: '/images/map-marker.svg',
  iconSize:[58, 68],
  iconAnchor:[29, 68],
})
let marker
map.on('click', (event)=>{
  const lat = event.latlng.lat
  const lng = event.latlng.lng

  document.querySelector('[name=lat]').value = lat
  document.querySelector('[name=lng]').value = lng


  marker && map.removeLayer(marker)
  marker = L.marker([lat, lng], {icon}).addTo(map)
})

// upload images 
function addPhotoField(){
  const container = document.querySelector('#images')
  const fieldsContainer = document.querySelectorAll('.new-upload')
  const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
  const input = newFieldContainer.children[0]
  if(input.value ==''){
    return
  }
  input.value = ''
  container.appendChild(newFieldContainer)
}

function deleteField(event){
  const span = event.currentTarget

  const fieldsContainer = document.querySelectorAll('.new-upload')

  if(fieldsContainer.length<=1) {
    span.parentNode.children[0].vale = ''
    return
  }
  console.log('ospado')
  span.parentNode.remove()
}

// finas de semana happy 
function toggleSelect(event){

  //retira a classactiver

    document.querySelectorAll('.button-select button')
    .forEach( button => button.classList.remove('active'))

  //pegar o botão clicado
    const button = event.currentTarget
    button.classList.add('active')


  //verificar se sim ou não
    
  //atualizar o valor
    const input = document.querySelector('[name=open_on_weekends]')
  input.value = button.dataset.value
}
