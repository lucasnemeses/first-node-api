import { sql } from "./db.js"

export class DatabasePostgres {
  #videos = new Map()

  async list(search = '') {
    return search
      ? await sql`select * from videos where title ilike ${'%' + search + '%'}`
      : await sql`select * from videos`
  }

  async create(video) {
    await sql`
      insert into videos (title, description, duration)
      values (${video.title}, ${video.description}, ${video.duration})
    `
  }

  async update(id, video) {
    await sql`
      update videos set
        title = ${video.title},
        description = ${video.description},
        duration = ${video.duration}
      where id = ${id}
    `
  }

  async delete(id) {
    await sql`delete from videos where id = ${id}`
  }
}
