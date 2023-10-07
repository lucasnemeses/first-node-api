import { sql } from "./db.js"

// sql`drop table if exists videos`.then(() => {
//   console.log('Tabela apagada!')
// })

sql`
  create table videos(
    id          SERIAL PRIMARY KEY,
    title       VARCHAR(255) NOT NULL,
    description TEXT,
    duration    INTEGER
  );
`.then(() => {
  console.log('Tabela criada!')
})
