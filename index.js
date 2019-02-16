const express = require('express')
const app = express()
const api = require('./wbapi')

app.get('/co2', (req, res) => {
    res.send(api.co2json())
})

app.get('co2/country/:name', (req, res) => {
    const name = req.params.name
    res.send(api.co2country(name))
})

app.get('/pop', (req, res) => {
    res.send(api.populationjson())
})

app.get('/pop/country/:name', (req, res) => {
    const name = req.params.name
    res.send(api.popcountry(name))
})
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})