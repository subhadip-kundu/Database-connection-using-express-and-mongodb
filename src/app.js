import express from "express"

const app = express()


app.get('/', (req, res) => {
    res.send('Hello Subha');
})


app.get('/instagram', (req, res) => {
    res.send('<h1>You are in insta page!</h1>');
})

export default app;