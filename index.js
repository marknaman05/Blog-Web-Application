//Write here code to import all libraries 
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set('view engine' , 'ejs');


// Create route functions for Blog Home page (/)
app.get("/" ,  (req,res) => {
    res.render("index");
});

// Create route functions for Blog Post (/submit)
var blogText ;
var blogTitle ;

const map = new Map();

// Function to add a pair to the Map
function addPair(key, value1, value2) {
  map.set(key, { bTitle: value1,bText: value2 });
}

app.post("/submit" ,  (req,res) => {
    console.log(req.body);
    blogTitle = req.body.blogTitle;
    blogText = req.body.blogText;
    var index = map.size;
    console.log(index);
    addPair(index+1 , blogTitle , blogText);
    console.log(map);
    res.render("index" , {
        data : map
    });
});

//Listen port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });