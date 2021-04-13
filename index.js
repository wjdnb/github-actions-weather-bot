const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");

async function init() {
	let wear,
		wearMsg,
		tem,
		temMsg,
		date = new Date();

	// 获取穿衣建议
	// 后面的数字跟城市相关，可以在中国天气网访问对应城市看到
	wear = await axios.get("http://www.weather.com.cn/weather1d/101270101.shtml");
	$ = cheerio.load(wear.data);
	wearMsg = `穿衣建议：${$("#chuanyi p").text()}`;

	// 获取温度
	// 这个接口用于获取当前温度信息，后面的 query 参数是应该是当前时间的时间戳
	tem = await axios.get(
		`http://d1.weather.com.cn/sk_2d/101270101.html?_=${date.getTime()}`
	);
	eval(tem.data);
	temMsg = `当前温度：${dataSK.temp} ℃`;

	// 获取日期
	dayMsg = `今天是${date.getFullYear()}年${
		date.getMonth() + 1
	}月${date.getDate()}日`;

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
`;

	fs.writeFileSync("index.html", context, "utf8");
}

init();
