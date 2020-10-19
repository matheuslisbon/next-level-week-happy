const sqlite3 = require('sqlite3').verbose()
const saveOrphanage = require('./saveOrphanage')
//iniciar/criar o objeto de banco de dados (irar fazer operaçoes no banco)

const db = new sqlite3.Database('./src/database/database.db')
// exporta o servidor para o server.js


db.serialize(() => {
  
  //db.run(`
  //CREATE TABLE IF NOT EXISTS orphanages (
  //    id INTEGER PRIMARY KEY AUTOINCREMENT,
  //   lat TEXT,
  //   lng TEXT,
  // name TEXT,
  //    about TEXT,
  //    wathsapp TEXT,
  //    images TEXT,
  //    instructions TEXT,
  //    opening_hours TEXT,
  //    open_on_weekends TEXT
  //
  //  );
  //`)

  /*
  saveOrphanage(db, {
    lat: "-23.5197659",
    lng: "-46.8522576",
    name: "Lar dAs meninAs",
    about:"Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    wathsapp:"988134824",
    images:[
        "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

        "https://images.unsplash.com/photo-1570570626315-95c19358f053?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
    ].toString(),
    instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horario de Visitas das 18h até 8h",
    open_on_weekends: "0"
})
*/
  //const selectOrphanages = db.all(`SELECT * FROM orphanages`, (err, res) => console.log(res))
  //const orphanage = db.all(`select * from orphanages where id = "3"`, (err, res)=> {console.log(res)})

  //db.run("DELETE FROM orphanages WHERE id='2'")

  const result = db.run('SELECT * FROM orphanages')
  console.log(result)
})
module.exports = db