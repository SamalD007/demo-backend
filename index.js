const express =  require('express')
const morgan =  require('morgan')
const app = express()
const port =  5000
app.use(morgan('dev'))

app.get('/user', (req, res) => {
    let result = {id:2,name:'user2'}
    console.log(`route- USER_DETAILS, DB - ${process.env.DB_NAME}`)
    res.status(200).json(result)
})

app.listen(port, () => {
console.log(`app is listening on port at http://localhost:${port}`)
})