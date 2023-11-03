const express = require('express');

const app = express();

const port = 3000;
app.use(express.static('static'));

app.get('/', (req, res) => {
    res.sendFile('static/index.html');
});
// app.get('/about', (req, res) => {
//     res.sendFile('static/about.html');
// }); не работает
app.listen(port,() => {
    console.log(`Server is exuted on port ${port}`);
});