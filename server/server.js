import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(cors())
app.use(express.json())


const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('sever is Live!')
})


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})