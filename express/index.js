const express = require('express')
console.log(typeof express)

const app = express()


//starting the server
app.listen(3000, () => {
    console.log('Server started')
})

//request response cycle
app.get('/', (req, res) => {
    res.send('Port no. 3000 is in active mode in the current local machine')
})