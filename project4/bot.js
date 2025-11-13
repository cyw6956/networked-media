// imports the configurations set up in the .env
require('dotenv').config()

const m = require('masto')

const masto = m.createRestAPIClient({
    url: "https://networked-media.itp.io/",
    accessToken: process.env.TOKEN
})

async function retrieveData() {
    const url='http://67.205.156.22:7002/all-posts';
    const response = await fetch(url)
    const json = await response.json()
    const posts = json.posts
    let randNum = Math.floor(Math.random()*(posts.length-1));

    // make lucky number
    const numlength = posts[randNum].text.length; 
    let num = '';

    for (let i=0; i<numlength; i++){
        let add = (Math.floor(Math.random() * 9) + 1).toString();
        num = num+add;
    }

     let randText = posts[randNum].text+" "+num;

    makeStatus(randText);
}


async function makeStatus(textStatus){
    const status = await masto.v1.statuses.create({
        status: textStatus,
        visibility: "public",
    })

    console.log(status.url)
}

setInterval( ()=>{retrieveData(); }, 3600000)


