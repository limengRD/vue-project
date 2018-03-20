const express = require('express')
const app = express()
//托管静态文件
app.use('/node_modules',express.static('../node_modules'))

const bodyparser = require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

const router = require('./router')

app.use(router)

app.listen(4000,() => {
    console.log('http://127.0.0.1:4000')
})