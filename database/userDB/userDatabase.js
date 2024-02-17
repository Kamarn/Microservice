const express = require('express');

const app = express();

app.use('/cart', require('../../routes/cart'));

app.listen(5001, () => {
    console.log("User server started at port 5001");
});