import path from "path";
import express from "express";


const PORT = 3000;
const __dirname = path.resolve(path.dirname(''));
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.listen(PORT, (req, res) => {
    console.log(`Server running at http://127.0.0.1:${PORT}`);
});

