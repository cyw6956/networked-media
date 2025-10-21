// get libraries for server
const express = require("express");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs')


//store the memories
let memories=[
    {
        text: "when i was in highschool i would always be knitting this red scarf. i dont know why i insisted on making it double-layered, it took forever to finish. i remember i would stay up late at night, my vision crowded with red and black, to work on this scarf",
        color: "ff595e",
        respond: ""
    },
    {
        text: "I think back to middle school when I bought a highlighter colored Shein shirt. This shirt was so bright that my friends would easily notice me from across the yard.",
        color: "ffca3a",
        respond: "#21ede6"
    },
    {
        text: "my friend and i used to mail each other birthday presents, until one year she stopped replying, the thing she gifted me was a blue sweater.",
        color: "1982c4",
        respond: "black"
    }
];

app.get('/', (request, response)=>{
    // response.send("test server is working!!!")
    response.render('memory.ejs', {});

})

app.get('/upload', (request, response)=>{
    let memory = {
        text: request.query.memory,
        color: request.query.color,
        respond: "",
    }

    memories.unshift(memory);
    response.redirect('/connect');
})

app.get('/connect', (request, response)=>{
    let data = {
        allMemories: memories[1].text
    }
    response.render('respond.ejs', data);
})

app.get('/respond', (request, response)=>{
    memories[1].respond = request.query.respond;
    response.redirect('/map');
})

app.get('/map', (request, response)=>{
    let data = {
        allMemories: memories
    }
    response.render('map.ejs', data);
})

app.get('/manifesto', (request, response)=>{
    response.render('manifesto.ejs', {})
})

app.listen(8000, ()=>{
    console.log("server has started :D");
});