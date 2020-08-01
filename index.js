
const request = require("request") 
const cheerio = require("cheerio");
const express= require("express")
var app= express()

let data=[];

request({
    method:"GET",
    url:"https://time.com/"
},function(err, response, body) {
    //console.log(body)
    const $ = cheerio.load(body);
   
    const title=$("h2.title a")
    for(let i=3;i<=7;i++)
    {
        var k=null;
        //console.log(title[3].attribs.href)
    //console.log(title[1].children[0].data)
    k={title:title[i].children[0].data,
    link:`https://time.com/${title[3].attribs.href}`}
    data.push(k)
    }

    console.log(data)
})

app.get('/', (req, res) => {
     res.send(data);
  });

  app.listen(1200)



