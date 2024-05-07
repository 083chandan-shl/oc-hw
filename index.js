const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    console.log('hello')
    res.send('Hello World!')
})

const server = app.listen(port, '0.0.0.0', function () {

    const host = server.address().address
    const port = server.address().port

    console.log('app listening at http://%s:%s', host, port)

})
