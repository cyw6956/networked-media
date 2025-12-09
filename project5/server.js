const express = require("express");
const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs')

//store reviews
let reviews=[];


app.get('/', (request, response)=>{
    // response.send("test server is working!!!")
    response.render("main.ejs", {});

})

app.get('/start', (request, response)=>{
  response.render("experience.ejs")
})

app.get('/relax', (request, response)=>{
  response.render("start-tea.ejs")
})

app.get('/sip', (request, response)=>{
  response.render("sip.ejs")
})

app.get('/review', (request, response)=>{
  
  response.render("finalpage.ejs");
})

app.listen(8888, () => {
  console.log("server running on http://127.0.0.1:8888");
});