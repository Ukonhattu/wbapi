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

getYearField = (year, obj) => {
    for (let key in obj[1]) {
        let attrName = key;
        let attrValue = obj[1][key]
        if (attrValue === year.toString()) return attrName
    }
    return "undefined year"
}

// beautify = (arr) => {
//     const start = 1960
//     let str = JSON.stringify(arr)
//     for (i = 5; i < 65; i++) {
//         let rep = "field".concat(i)
//         console.log(rep)
//         let regex = new RegExp(rep, "g")
//         let year = start + (i-5) 
//         str = str.replace(regex, year.toString())
//     }
//     arr = JSON.parse(str)
//     return arr
// }