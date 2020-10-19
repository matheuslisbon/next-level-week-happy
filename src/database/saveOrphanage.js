//Function para criar o Orfanato no banco de dados
function saveOrphanage(db, orphanage)  {

  const query = `
  INSERT INTO orphanages (
    lat,
    lng,
    name,
    about,
    wathsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
) VALUES (
  "${orphanage.lat}",
  "${orphanage.lng}",
  "${orphanage.name}",
  "${orphanage.about}",
  "${orphanage.wathsapp}",
  "${orphanage.images}",
  "${orphanage.instructions}",
  "${orphanage.opening_hours}",
  "${orphanage.open_on_weekends}");
`
  return db.run(query)

}

module.exports = saveOrphanage