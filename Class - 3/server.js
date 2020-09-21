const http = require('http')

const server = http.createServer((req, res)=>{
    console.log('Request made: ', req.url)
    if(req.url == '/'){
        console.log(res)
    }
})

server.listen(3000, 'localhost', ()=>{
    console.log('Server online')
}) // to listen to event or request