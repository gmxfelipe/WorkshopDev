// Usei o express para configurar meu servidor
const express = require('express');
const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de programação",
        category: "Estudo",
        description: " A beleza ideal está na simplicidade calma e serena.",
        url: "https://felipeagomes.github.io/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description: " A beleza ideal está na simplicidade calma e serena.",
        url: "https://felipeagomes.github.io/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/1830/1830774.svg",
        title: "Meditação",
        category: "Mentalidade",
        description: " A beleza ideal está na simplicidade calma e serena.",
        url: "https://felipeagomes.github.io/"
    },
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729076.svg",
        title: "Filme",
        category: "Diversão em família",
        description: " A beleza ideal está na simplicidade calma e serena.",
        url: "https://felipeagomes.github.io/"
    },
]

// Configurar arquivos estáticos (css, scripts, imagens) 
server.use(express.static("public"));

// Configuração do Nunjucks
const nunjucks = require('nunjucks');
nunjucks.configure("views", {
    express: server,
    noCache: true, // Boolean
});


// Criei uma rota barra /
// E capturo o pedido do cliente para responder
server.get("/", function(req, res) {

    const reversedIdeas = [...ideas].reverse() 
    
    let lastIdeas = []
    for (let idea of reversedIdeas) {
        if(lastIdeas.length <2){
            lastIdeas.push(idea)
        }
    }

  


    return res.render("index.html", { ideas: lastIdeas });
});

server.get("/ideias", function(req, res) {

    const reversedIdeas = [...ideas].reverse()


    return res.render("ideias.html", { ideas: reversedIdeas });
});

// Liguei meu servidor na porta 3333
server.listen(3333);