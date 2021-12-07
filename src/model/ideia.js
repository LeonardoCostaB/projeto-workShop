const Database = require('../db/config')

module.exports = {
  async get(){
    const db = await Database()

    const data = await db.get(`SELECT * FROM idea`)

    await db.close()

    return data
  },

  async all(){
    const db = await Database()

    const data = await db.all(`SELECT * FROM idea`)

    await db.close()

    return data
  }
}