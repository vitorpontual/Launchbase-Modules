const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.set('view engine', 'njk')

server.use(express.static('public'))

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
const data = {
    avatar_url: "https://avatars2.githubusercontent.com/u/42771088?s=460&u=afb4d0452847fb340a507874ac521c707c69a7c1&v=4",
    name: "Vitor Pontual",
    role: "Web Developer",
    description: "Estudante de programação full-stack pela Rockseat.",
    links: [
        {name: "Github", url:"https://github.com/vitorpontual"},
        {name: "Twitter", url:"https://twitter.com/vitorpguedes"},
        {name: "linkedIn", url:"https://www.linkedin.com/in/vitor-pontual/ "}
    ]
}

    return res.render('about', {about: data})
} )

server.get('/portfolio', (req, res) => {
    return res.render('portfolio', {items: videos})
})

server.get("/video", (req, res) => {
    const id = req.query.id

    const video = videos.find(function(video){
        return video.id == id
    })
    
    if (!video) {
        return res.send("Video not found!")
    }

    return res.render("video", { item: video })
})

server.listen(5000, function(){
    console.log("SERVER IS RUNNING")
})