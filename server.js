const express = require('express')
const path=require('path')
const axios=require('axios');
const app = express()
const port = 3001

app.get('/', (req, res) => {
 // res.sendFind('index.html',{root:path.joint_dirname})
 
 res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api',async(req,res)=>{
  console.log(req.parsedUrl.query);
    let url="https://newsapi.org/v2/everything?"+req.parsedUrl.query;
    let r=await axios(url);
    let a=r.data;
    res.json(r);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})