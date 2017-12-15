const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({
        message: "Just an example for AWS Pipeline!"
    });
});

app.listen(8080, () => console.log('Example app listening on port 8080!'));