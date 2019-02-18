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

exports.co2Country = (name) => {
    return co2.filter(p => p['Data Source'] === name)
}

exports.co2CountryYear = (name, year) => {
    return co2.filter(p => p['Data Source'] === name)[0][getYearField(year, co2)]
}

exports.populationjson = () => population

exports.popCountry = (name) => {
    return population.filter(p => p['Data Source'] === name)
}

exports.popCountryYear = (name, year) => {
    return population.filter(p => p['Data Source'] === name)[0][getYearField(year, population)]
}

exports.co2Range = (name, start, end) => {
    let res = {}
    res.country = name
    let years = []
    for (i = start; i < end +1; i++) {
        let year = {}
        year.year = i
        year.value = this.co2CountryYear(name, i)
        years.push(year)
    }
    res.values = years
    return res
}

exports.popRange = (name, start, end) => {
    let res = {}
    res.country = name
    let years = []
    for (i = start; i < end +1; i++) {
        let year = {}
        year.year = i
        year.value = this.popCountryYear(name, i)
        years.push(year)
    }
    res.values = years
    return res
}

getYearField = (year, obj) => {
    for (let key in obj[1]) {
        let attrName = key;
        let attrValue = obj[1][key]
        if (attrValue === year.toString()) return attrName
    }
    return "undefined year"
}
