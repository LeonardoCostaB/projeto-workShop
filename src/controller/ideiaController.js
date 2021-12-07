const Database = require('../db/config')
const idea = require('../model/ideia')

module.exports = {
  async createIndex(req, res){
    const ideas = await idea.all() 

    const reversedIdeas = [...ideas].reverse()
    let lastIdeas = []

    for(let idea of reversedIdeas){
      if(lastIdeas.length < 3){
        lastIdeas.push(idea)
      }
    }
    
    res.render('index', {ideas: lastIdeas})
  },

  async createIdea(req, res){
    const ideas = await idea.all()
    const reversedIdeas = [...ideas].reverse()

    res.render('ideias', {ideas: reversedIdeas})
  },

  async newIdea(req, res){
    const db = await Database()

    const title = req.body.titleIdea
    const category = req.body.category
    const image = req.body.image
    const description = req.body.description
    const link = req.body.link

    await db.run(`
    INSERT INTO idea(
      title,
      category,
      image,
      description,
      link
    )VALUES(
      "${title}",
      "${category}",
      "${image}",
      "${description}",
      "${link}"
    )`)

    res.redirect('/')
  }
}