const express = require('express')
const app = express()
const api = require('./wbapi')
const cors = require('cors')
app.use(cors())

app.get('/co2', (req, res) => {
    res.send(api.co2json())
})

app.get('/co2/country/:name', (req, res) => {
    const name = req.params.name
    res.send(api.co2Country(name))
})

app.get('/co2/country/:name/:year', (req, res) => {
    const {name, year} = req.params
    res.send(api.co2CountryYear(name, year))
})

app.get('/co2/country/:name/:start/:end', (req, res) => {
    const name = req.params.name
    const start = Number(req.params.start)
    const end = Number(req.params.end)
    res.send(api.co2Range(name, start, end))
})

app.get('/pop', (req, res) => {
    res.send(api.populationjson())
})

app.get('/pop/country/:name', (req, res) => {
    const name = req.params.name
    res.send(api.popCountry(name))
})

app.get('/pop/country/:name/:year', (req, res) => {
    const {name, year} = req.params
    res.send(api.popCountryYear(name, year))
})

app.get('/pop/country/:name/:start/:end', (req, res) => {
    const name = req.params.name
    const start = Number(req.params.start)
    const end = Number(req.params.end)
    res.send(api.popRange(name, start, end))
})

app.get('/co2/country/:name/:start/:end/:percapita', (req, res) => {
    const name = req.params.name
    const start = Number(req.params.start)
    const end = Number(req.params.end)
    const pc = req.params.percapita
    if (pc == 'true') res.send(api.co2percapitaRange(name, start, end))
    else res.send(api.co2Range(name, start, end))
})
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})