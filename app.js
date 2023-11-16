const express = require("express");
const app = express();

app.use(express.static('./public'));

const port = process.env.PORT || 5000;

app.get("/", (req, res)=>{
    res.send("index");
});

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});