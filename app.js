const express = require('express');

const app = express();

app.get("/", function(req, res) {
    res.sendFile(`${__dirname}/pages/index.html`);
});

app.use(express.static(`public`));

app.listen(3000, function() {
    console.log(`Server running on port 3000`);
});