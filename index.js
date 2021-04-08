const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')

async function init()  {
  let wear, wearMsg, tem, temData, temMsg, date = new Date();

  // 获取穿衣建议
  wear = await axios.get('http://www.weather.com.cn/weather1d/101270101.shtml')
  $ = cheerio.load(wear.data)
  wearMsg = `穿衣建议：${$("#chuanyi p").text()}`

  // 获取日期
  dayMsg = `今天是${date.getFullYear()}年${date.getMonth() + 1 }月${date.getDate()}日`

  // 获取温度
  tem = await axios.get(`http://d1.weather.com.cn/sk_2d/101270101.html?_=${date.getTime()}`)
  eval(tem.data)
  temMsg = `当前温度：${dataSK.temp} ℃`

  // 返回的 html
  let context = `
  <html>
  　<head>
  　　<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  　</head>
    <body>
      <p>${dayMsg}</p>
      <p>${temMsg}</p>
      <p>${wearMsg}</p>
    </body>
  </html>
`

  fs.writeFileSync('index.html', context, 'utf8')
}

init()

