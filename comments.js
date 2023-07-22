//Create web server
// 1. Import express
const express = require('express');
// 2. Create an object of express
const app = express();
// 3. Create web server
app.listen(3000, function () {
    console.log('Server is running at port 3000');
});
// 4. Create router
app.get('/comments', function (req, res) {
    res.send('GET request to homepage');
});
app.post('/comments', function (req, res) {
    res.send('POST request to homepage');
});
app.put('/comments', function (req, res) {
    res.send('PUT request to homepage');
});
app.delete('/comments', function (req, res) {
    res.send('DELETE request to homepage');
});
