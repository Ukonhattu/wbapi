const csv = require('csvtojson')
const AdmZip = require('adm-zip')
const co2FileStart = 'data/API_EN.ATM.CO2E'
const popFilePStart = 'data/API_SP.POP'
const co2Dataurl = 'http://api.worldbank.org/v2/en/indicator/EN.ATM.CO2E.KT?downloadformat=csv'
const popDataurl = 'http://api.worldbank.org/v2/en/indicator/SP.POP.TOTL?downloadformat=csv'
const download = require('download-file')
const glob = require('glob')
const rimraf = require('rimraf')
const cron = require('node-cron')

let co2FilePath = 'data/API_EN.ATM.CO2E.KT_DS2_en_csv_v2_10473877.csv'
let populationFilePath = 'data/API_SP.POP.TOTL_DS2_en_csv_v2_10473719.csv'
let co2 = null
let population = null



//****Download and unzip data from wordbank **************************************************/
const downloadData = (url, fileName) => {

    const downloadOptions = {
        directory: "./temp",
        filename: fileName
    }
    return new Promise((resolve, reject) => {
        download(url, downloadOptions, (err) => {
            if (err) reject(err)
            else resolve(downloadOptions.directory + '/' + downloadOptions.filename)
        })
    })
}

const cronJob = downloadData(co2Dataurl, 'co2Data.zip')
    .then((result) => {
        glob(co2FileStart+'*', {}, (err, files) => {
            co2FilePath = files[0]
        })})
    .then((result) => downloadData(popDataurl, 'popData.zip'))
    .then((result) => rimraf('./data/*', () => { //delete contents of data and extract new files
        const co2zip = new AdmZip('./temp/co2Data.zip')
        co2zip.extractAllTo('./data/', true)
        const popzip = new AdmZip('./temp/popData.zip')
        popzip.extractAllTo('./data/', true)
    }))
    .then((result) => {
        glob('./data/' +co2FileStart+'*', {}, (err, files) => { //find the name of the extracted file
        co2FilePath = files[0]
    })})
    .then((result) => init())


//***********************************************************************************/
const init = () => {
    csv().fromFile(co2FilePath).then((jsonObj) => {
        co2 = jsonObj;
    })
    csv().fromFile(populationFilePath).then((jsonObj) => {
        population = jsonObj;
    })
}




exports.co2json = () => co2

exports.co2Country = (name) => {
    return co2.filter(p => p['Data Source'].toUpperCase() === name.toUpperCase())
}

exports.co2CountryYear = (name, year) => {
    return co2.filter(p => p['Data Source'].toUpperCase() === name.toUpperCase())[0][getYearField(year, co2)]
}

exports.populationjson = () => population

exports.popCountry = (name) => {
    return population.filter(p => p['Data Source'].toUpperCase() === name.toUpperCase())
}

exports.popCountryYear = (name, year) => {
    return population.filter(p => p['Data Source'].toUpperCase() === name.toUpperCase())[0][getYearField(year, population)]
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

exports.co2percapitaRange = (name, start, end) => {
    let co2 = this.co2Range(name, start, end).values
    let pop = this.popRange(name, start, end).values
    let res = {}
    res.country = name
    let cpc = []
    for (let i = 0; i < end-start; i++) {
        let year = {}
        year.year = start + i
        year.value = co2[i].value / pop[i].value
        cpc.push(year)
    }
    res.values = cpc
    return res

}

// get field name for spesific year (because the parsed json has obscure field names)
getYearField = (year, obj) => {
    for (let key in obj[1]) {
        let attrName = key;
        let attrValue = obj[1][key]
        if (attrValue === year.toString()) return attrName
    }
    return "undefined year"
}

//****Functions to run at the start ***/

init()
//schedule new dowload every sunday at 00:00
cron.schedule('0 0 * * 0', () =>{
    cronJob()
    console.log('Running data download')
})
//*************************************/
