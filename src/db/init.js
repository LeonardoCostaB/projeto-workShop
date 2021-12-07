const Database = require('./config')

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`
    CREATE TABLE idea(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      category TEXT,
      image TEXT,
      description TEXT,
      link TEXT
    )`)

    await db.run(`
    INSERT INTO idea(
      title,
      category,
      image,
      description,
      link
    )VALUES(
      "Praticando futebol",
      "Futebol",
      "https://images.vexels.com/media/users/3/234527/isolated/lists/727699bf8d10e0918a710677e1f41a0e-menina-jogando-futebol.png",
      "De maneira muito legal, podemos sempre estar nos divertindo e ao mesmo tempo praticando que na minha opinião é um dos melhores esportes do mundo, mas sempre respeitando quem pensa diferente... O importante mesmo é nunca deixar de nos exercita.",
      "https://beecorp.com.br/atividade-fisica/?gclid=CjwKCAiAv_KMBhAzEiwAs-rX1NvlZgtGbG83EuFVCZc3lK9QAHNm4S9MuUJHlEFnxoyr4Z6kXQ8DaBoCMskQAvD_BwE"
    )`)

    await db.run(`
    INSERT INTO idea(
      title,
      category,
      image,
      description,
      link
    )VALUES(
      "Ler livros",
      "Leitura",
      "https://br.toluna.com//dpolls_images/2020/12/01/2b60f0c5-3f13-4932-9e02-51d064d3086f.jpg",
      "Temos uma maneira muito legal de ocuparmos nosso tempo, esse método é com a leitura... A leitura é algo supreendente e com ela podemos ter aventuras inimagináveis...",
      "https://blog.unopar.com.br/beneficios-da-leitura/?utm_source=google&utm_medium=cpc&utm_campaign=Unopar-EAD::L3::Display::Performance-Max&gclid=CjwKCAiAv_KMBhAzEiwAs-rX1L67bwCuLvh7T1RtVK_TUahwIBDm3OsQa9grZeBx6zsog7AgEbjeuRoCH1wQAvD_BwE"
    )`)

    await db.run(`
    INSERT INTO idea(
      title,
      category,
      image,
      description,
      link
    )VALUES(
      "Jogar vídeo game",
      "Gamer",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPz0IF_VfuzknLXbz7Z0Mc8i7JVZgrxcbiY2lX3cXTyv3T-YLsinvNj0GW6jrJ4XRKKo&usqp=CAU",
      "Jogar vídeo game também pode ser algo que nos ocupe um bom tempo e que também pode de maneira muito legal nos distrair. Então chame seus amigos e se divirta.",
      "https://www.techtudo.com.br/listas/2021/04/oito-coisas-sobre-jogar-videogames-que-voce-provavelmente-nao-sabia.ghtml"
    )`)

    await db.close()
  }
}

initDb.init()