const chalk = require("chalk")
const fs = require("fs")

const payment = {
    qris: {
      link_nya: "https://telegra.ph/file/d2fedce636ae74d16bf89.jpg",
      atas_nama: "SCAN QRIS INI SESUAI NOMINAL TOPUP DIATAS !!!"
    },
    ewallet: {
      nomer: "123456789",
      atas_nama: "------++"
    },
    ovo: {
      nomer: "0895370750011", //Ovo Nonaktif 
      atas_nama: "Mar/rav" 
    }
}

const apikeyAtlantic = "ganti api key mu"
//https://atlantich2h.com (DISINI KALIAN BISA BUAT PROVIDER NYA)

//BUAT AKUN DISINI DULU
//https://m.atlantic-pedia.co.id/

  global.ownerNumber = "6282323780821@s.whatsapp.net"
  global.kontakOwner = "6285782664997"
  global.csNumber = "6285782664997@s.whatsapp.net"
  global.untung = "4"
  //Ini profit yg kamu dapat, 1 = 1% maka harga akan meningkat 1%
  //Isi sesuai kebutuhan 
  global.namaStore = "Kyzee store"
  global.botName = "Mommy Kyze"
  global.ownerName = "Kyzee Store"
  global.csName = "Customer Service"
  
  
  global.linkyt = "https://youtube.com/"
  global.linkig = "https://www.instagram.com/"
  global.dana = "Scan qris di atas"
  global.sawer = "Scan qris di atas"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

module.exports = { payment, apikeyAtlantic }