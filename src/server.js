
const express = require('express')
const server = express()

const {pageLanding, pageStudy, pageGiveClasses, saveClass} = require('./pages')


const nunjucks = require('nunjucks')
//Configurando nunjucks
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
})

//Configura o arquivo estático (css, scripts, imagens)
server
.use(express.urlencoded({ extended: true }))
.use(express.static("public"))

  //Rotas
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .post("/save-class", saveClass)

  .listen(3300)

