const path = require('path')
const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')

// axios.get('https://hgwxxdd.github.io/dressing-assistant').then(res => {
//   console.log(res)
// })


const superagent = require('superagent');

superagent.get('http://www.weather.com.cn/weather1d/101270101.shtml').end((err, res, body) => {
  // console.log(err)
  if(res) {
    fs.writeFileSync('./index.html', JSON.stringify(res))
  }
})