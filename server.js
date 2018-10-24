const express = require('express')
const bodyParser = require('body-parser')

const server = express()

let data = 'initial data'

server.use(bodyParser.urlencoded({
    extended: false
}))

server.use('/', express.static(__dirname + '/client'))

server.post('/', (request, response)=>{
    data = request.body.namedata
    console.log('name data', data);
    response.end('ok')
})

server.get('/getData', (request, response)=>{
    console.log('get data is executed');
    
    response.end(data)
})

server.listen(8080, () => {
    console.log('Server is started');
})