const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
    res.send('<h1>Express Demo App </h1><h4>Message: Success </h4> <p>Vrersion 1.0 </p>')
})

app.get('/product', (req, res)=>{
     res.send([
        { 
           productId:'101',
           price: 100
        },
        { 
            productId:'111',
            price: 200
         },
     
    
    ])
})


app.listen(PORT, () => {
    console.log(`The App is up and running on the port ${PORT}`);
})