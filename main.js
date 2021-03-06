const electron = require("electron")
const {app, BrowserWindow} = electron

app.on("ready", () => {
  let win = new BrowserWindow({width:800, height:600})
  win.loadURL(`file://${__dirname}/web_pages/main/index.html`)
  win.webContents.openDevTools()
})

exports.openWindow = () => {
  let win = new BrowserWindow({width:800, height:600})
  win.loadURL('http://google.com')
}

var Artnet = require('./artnet')
console.log(Artnet.getNodeList())
setInterval(Artnet.sendPoll, 7000)
/* Artnet Information End */

setInterval(play, 500)

function play() {
  console.log(Artnet.getNodeList());
}
