const csv = require('csvtojson')
const co2FilePath = 'data/API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10473877.csv'
const populationFilePath = 'data/API_SP.POP.TOTL_DS2_en_csv_v2_10473719.csv'

let co2 = null
csv().fromFile(co2FilePath).then((jsonObj) => {
    co2 = jsonObj;
})

let population = null
csv().fromFile(populationFilePath).then((jsonObj) => {
    population = jsonObj;
})


exports.co2json = () => co2

exports.co2country = (name) => {
    return co2.filter(p => p['Data Source'] === name)
}

exports.populationjson = () => population

exports.popcountry = (name) => {
    return population.filter(p => p['Data Source'] === name)
}