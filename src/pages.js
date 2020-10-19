//Banco de dados
const db = require('./database/db')
const saveOrphanage = require('./database/saveOrphanage')

//Rotas da Aplicação

module.exports = {
  index:(req, res)=>{
    return res.render('index')
  },
  orphanage:async(req, res)=>{
    const id = 1
    await db.all(`select * from orphanages where id = "${id}"`, (err, result)=>{
      if(err) res.send('erro no banco de dados')
      const orphanage = result[0]


      orphanage.images = orphanage.images.split(',')
      orphanage.firtsImage = orphanage.images[0]

     if(orphanage.open_on_weekends== '0'){
       orphanage.open_on_weekends = false
     } else {
       orphanage.open_on_weekends = true
     }
    return res.render('orphanage', {orphanage})
  })

  },
  orphanages: async(req, res)=>{
    await db.all(`SELECT * FROM orphanages`, (err, orphanages)=>{
      if(err) res.send('erro no banco de dados')
      return res.render('orphanages', {orphanages})
  })

  },
  createOprhanage:(req, res)=>{
    return res.render('create-orphanage')
  },

  saveOrphanage:async(req,res)=>{
    const fields = req.body

    if(Object.values(fields).includes('')){
      return res.send('Todos os campos devem ser preenchidos')
    }
    await saveOrphanage(db, {
      lat: fields.lat,
      lng: fields.lng,
      name: fields.name,
      about: fields.about,
      wathsapp: fields.wathsapp,
      images: fields.images,
      instructions: fields.instructions,
      opening_hours: fields.opening_hours,
      open_on_weekends: fields.open_on_weekends
    })
    return res.redirect('/orphanages')
  }
}