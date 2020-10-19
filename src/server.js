const express = require('express')
const server = express()
const path = require('path')
const pages = require('./pages')
//CONFIGURAÇÕES
server.use(express.static('public'))
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')
server.use(express.urlencoded({extended:true}))

//ROTAS
server
  .get('/', pages.index)
  .get('/orphanage', pages.orphanage )
  .get('/orphanages', pages.orphanages)
  .get('/create-orphanage', pages.createOprhanage)
  .post('/save-orphanage', pages.saveOrphanage)

server.listen('3000', ()=>{
  console.log('HAPPY HACKING SERVER RUNNING ON PORT 3000')
})