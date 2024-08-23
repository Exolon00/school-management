import express from 'express'
import bodyParser from 'body-parser'
import addSchoolRouter from './src/routes/addSchool.js'
import listSchoolRouter from './src/routes/listSchool.js'
const app = express()

app.use(bodyParser.json())
app.use(addSchoolRouter)
app.use(listSchoolRouter)

const PORT = 3000

app.listen(PORT,()=>{
    console.log(`listening on ${PORT}`)
})