const db = require('./db')
db.serialize(()=>{
  db.run(`
  INSERT INTO places (
    lat,
    lng,
    name,
    wathsapp,
    images,
    instructions,
    opening_hours,
    open_on_weekends
) VALUES (
  "-23.5197659",
  "-46.8122576",
  "Lar das meninas",
  "8188134824",
  "https://images.unsplash.com/photo-1600711725407-2ea4733a38c3?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
  "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
  "Horario de Visitas das 18h até 8h",
  open_on_weekends: "1"
);
`)

})