/*
Jika Fitur Error Fix Sendiri / Apikey Nya Error
*/


const sotoy = [
        'π : π : π',
        'π : π : π',
        'π : π : π',   //Slot
        'π : π : π', 
        'π : π : π',
        'π : π : π',
        'π : π : π',        
        'π : π : π',
        'π : π : π',
        'π : π : π',
        'π : π : π',
        'π : π : π',
        'π : π : π',
        'π : π : π',
        'π : π : π Winπ',
        'π : π : π',
        'π : π : π', 
        'π : π : π',
        'π : π : π Winπ',
        'π : π : π Winπ',
        'π€ : π€ : π€ Winπ',
        'πΎ : π± : πΎ',
        'β‘ : β‘ : β‘ Winπ',
        ]
        
const {
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require('@adiwajshing/baileys')
const speed = require('performance-now')
const request = require('request')
const fs = require('fs')
const crypto = require('crypto')  
const yts = require('yt-search')
const moment = require('moment-timezone')
const { exec, spawn, execSync } = require('child_process')
const { color, bgcolor } = require('./lib/color')
const { y2mateA, y2mateV } = require('./lib/y2mate')
const { fetchJson, fetchText } = require('./lib/fetcher')
const ffmpeg = require('fluent-ffmpeg')

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require("./lib/functions");

//Database
const setting = JSON.parse(fs.readFileSync('./setting.json'))

//Setting
prefix = setting.PrefixNya
var owner = setting.OwnerNumber
var ownerName = setting.OwnerName
var botName = setting.BotName
var fakeyoi = setting.FakeNya
var lolkey = setting.LolHuman
var zekais = setting.ZekaisApi
var xziyApi = setting.XziyApi
var creator = 'Nasir'

img1 = fs.readFileSync('./img/fake.jpg')
img2 = fs.readFileSync('./img/thumb.jpg')


//Jam
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const tima = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')         

//Modul
module.exports = LexxyOFC = async (LexxyOFC, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if (mek.key.fromMe) return
global.prefix
global.blocked		
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const type = Object.keys(mek.message)[0]
const { text, extendedText, contact, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
const date = new Date().toLocaleDateString()
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const timestampi = speed();
const latensyi = speed() - timestampi
const ownerNumber = [`6285789004732@s.whatsapp.net`,`${owner}@s.whatsapp.net`]
const isGroup = from.endsWith('@g.us')
let sender = isGroup ? mek.participant : mek.key.remoteJid
const totalchat = await LexxyOFC.chats.all()
const groupMetadata = isGroup ? await LexxyOFC.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const Verived = "0@s.whatsapp.net"
const num = "6285789004732@s.whatsapp.net"
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const conts = mek.key.fromMe ? LexxyOFC.user.jid : LexxyOFC.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? LexxyOFC.user.name : conts.notify || conts.vname || conts.name || '-'
const isButton = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const isOwner = ownerNumber.includes(sender)
		
//Mess
mess = {
			wait: "[β] ππΆπ―π¨π¨πΆ ππ¦π£π¦π―π΅π’π³...",
			success: "[β] ππ°π―π¦ ππͺπ© ππ’π¬",
			error: {
				stick: "[β] ππ’π¨π’π­ π¬π’π¬ π€π°π£π’ π­π’π¨πͺ",
				Iv: "Link Nya Eror Kack"
			},
			only: {
				admin: "Fitur ini Khusus Admin Grup",
				owner: "Fitur ini Khusus Owner",
				group: "Fitur Hanya Bisa di Grup"
			}
		}
		
const reply = (teks) => {
            LexxyOFC.sendMessage(from, teks, text, {quoted:mek})
        }
var costum = (pesan, tipe, target, target2) => {
LexxyOFC.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}       

//button
        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = LexxyOFC.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "π΄π¬π΅πΌ","footerText": `Sc By King Of Bear Botz`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return LexxyOFC.relayWAMessage(po, {waitForAck: true})
        }
        
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, type, options).catch(e => {
LexxyOFC.sendMessage(from, { url : link }, type, options).catch(e => {
reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')
console.log(e)
})
})
})
})
}	        
var runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};
//Jam Hari Tanggal Tahun
var datw = new Date();
var tahun = datw.getFullYear();
  var bulan = datw.getMonth();
    var tanggal = datw.getDate();
      var hari = datw.getDay();
        var jams = datw.getHours();
          var menit = datw.getMinutes();
            var detik = datw.getSeconds();
switch(hari) {
          case 0: hari = "Minggu"; break;
         case 1: hari = "Senin"; break;
       case 2: hari = "Selasa"; break;
     case 3: hari = "Rabu"; break;
   case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
case 6: hari = "Sabtu"; break;
        }
switch(bulan) {
case 0: bulan = "Januari"; break;
        case 1: bulan = "Februari"; break;
                 case 2: bulan = "Maret"; break;
                          case 3: bulan = "April"; break;
                                   case 4: bulan = "Mei"; break;
                                            case 5: bulan = "Juni"; break;
                                                     case 6: bulan = "Juli"; break;
                                                              case 7: bulan = "Agustus"; break;
                                                                       case 8: bulan = "September"; break;
                                                                                case 9: bulan = "Oktober"; break;
                                                                                         case 10: bulan = "November"; break;
                                                                                                  case 11: bulan = "Desember"; break;
        }
switch(jams){
case 0: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 1: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 2: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 3: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 4: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break; 
case 5: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 6: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 7: jams = 'πππ₯ππ¦ππ­ πππ π’ π'; break;
case 8: jams = 'πππ₯ππ¦ππ­ πππ π’ ποΈ'; break;
case 9: jams = 'πππ₯ππ¦ππ­ πππ π’ ποΈ'; break;
case 10: jams = 'πππ₯ππ¦ππ­ πππ π’ ποΈ'; break;
case 11: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break; 
case 12: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break;
case 13: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break;
case 14: jams = 'πππ₯ππ¦ππ­ ππ’ππ§π  ποΈ'; break;
case 15: jams = 'πππ₯ππ¦ππ­ ππ¨π«π π'; break;
case 16: jams = 'πππ₯ππ¦ππ­ ππ¨π«π π'; break;
case 17: jams = 'πππ₯ππ¦ππ­ ππ¨π«π π'; break;
case 18: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break; 
case 19: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 20: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 21: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
case 22: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break; 
case 23: jams = 'πππ₯ππ¦ππ­ πππ₯ππ¦ π'; break;
			}
var tampilTanggal = hari + " "+ tanggal + " " + bulan + " " + tahun;
var tampilWaktu = "Jam: " + jams + ":" + menit + ":" + detik;
var tampilHari = "" + jams;

//Auto Ketik
await LexxyOFC.updatePresence(from, Presence.composing)
//βββββββββββββββ[ FAKE ]βββββββββββββββββ//

var flexx = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "status@broadcast" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${fakeyoi}`,
                 "title": `${fakeyoi}`,
                 'jpegThumbnail': fs.readFileSync("./img/thumb.jpg"),
                        }
	                  } 
                     }   
var ftrol = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 169,
status: 1,
surface : 1,
message: `εAbyss Bot`, 
orderTitle: `εAbyss Bot`,
thumbnail: img2,
sellerJid: '0@s.whatsapp.net' 
}
}
}
    var fvn = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6283871990243-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 99999,
          ptt: "true",
        },
      },
    };
  
//βββββββββββββββ[ BUTTON ]βββββββββββββββββ//
        let sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            LexxyOFC.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        let sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await LexxyOFC.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            LexxyOFC.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: ftrol,
            })
        }
        async function sendButLocation(id, text1, desc1, gam1, but = [], options = {}) {
            let buttonMessages = { locationMessage: { jpegThumbnail: gam1 }, contentText: text1, footerText: desc1, buttons: but, headerType: 6 }
            return LexxyOFC.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
        }

//βββββββββββββββ[ CONNECTION 2 ]βββββββββββββββββ//
const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      LexxyOFC.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
//Conektion
colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

//Auto Read
LexxyOFC.chatRead(from, "read")

//Menu
switch (command) {
case 'menu':
tes =`πππ₯π₯π¨ *${pushname}* π
πππ§π ππ§ ππ?π©π πππ‘ππ π’π ππ

[ ππ‘ππ’ ππ’π§ ]
β ππ«πππ’π± ππ¨π­ : β  *${prefix}*  β
β πππ¦π ππ¨π­ : ${botName}
β πππ¦π : ${ownerName}
β ππ°π§ππ« : @${owner}
β ππ?π§π­π’π¦π : ${runtime(process.uptime())}
β ππ©πππ : ${latensyi.toFixed(4)} second
β ππ’π : πππ’π₯ππ²π¬ 
β ππ²π©π : ππ¨ππππ
ββββββββββββββββ`
tes2 =`β­ββ β ππππππ ππππ β β
βͺ ${prefix}π΄π΅πͺπ€π¬π¦π³ 
βͺ ${prefix}π±π­π’πΊ 
βͺ ${prefix}π΅πͺπ¬π΅π°π¬ 
βͺ ${prefix}π²πΆπ°π΅π¦π΄πͺπ₯ 
βͺ ${prefix}π²πΆπ°π΅π¦π΄πͺπ?π¨ 
βͺ ${prefix}π§π’π¬π΅π’ 
βͺ ${prefix}π£πͺπ«π’π¬ 
βͺ ${prefix}π£πΆπ€πͺπ― 
βͺ ${prefix}π?π¦π?π¦π΄ 
βͺ ${prefix}π€π¦π³π±π¦π― 
βͺ ${prefix}π±π°π­πΊ 
βͺ ${prefix}π£π°π­π₯ 
βͺ ${prefix}π΄π©π’π₯π°πΈ 
βͺ ${prefix}π§π­π’π?πͺπ―π¨ 
βͺ ${prefix}π³π’πͺπ―π£π°πΈ 
βͺ ${prefix}π΄π?π°π¬π¦ 
βͺ ${prefix}πΈπ°π°π₯ 
βͺ ${prefix}π€π°π§π§π¦
βββββββββββββββ

β­ββ β πππ€ππ« πππ§π? β β
βͺ ${prefix}π£π­π’π€π¬π±πͺπ―π¬ 
βͺ ${prefix}π―π¦π°π― 
βͺ ${prefix}π¨π³π¦π¦π―π―π¦π°π― 
βͺ ${prefix}π’π₯π·π’π―π€π¦π¨π­π°πΈ 
βͺ ${prefix}π§πΆπ΅πΆπ³π¦π―π¦π°π― 
βͺ ${prefix}π΄π’π―π₯πΈπ³πͺπ΅πͺπ―π¨ 
βͺ ${prefix}π΄π’π―π₯π΄πΆπ?π?π¦π³ 
βͺ ${prefix}π΄π’π―π₯π¦π―π¨π³π’π·π¦π₯ 
βͺ ${prefix}π?π¦π΅π’π­π₯π’π³π¬ 
βͺ ${prefix}π―π¦π°π―π­πͺπ¨π©π΅ 
βͺ ${prefix}π©π°π­π°π¨π³π’π±π©πͺπ€ 
βͺ ${prefix}π΅π¦πΉπ΅1917 
βͺ ${prefix}π?πͺπ―πͺπ°π― 
βͺ ${prefix}π₯πΆπ­πΆπΉπ¦π΄πͺπ­π·π¦π³ 
βͺ ${prefix}π―π¦πΈπΊπ¦π’π³π€π’π³π₯ 
βͺ ${prefix}π£π­π°π°π₯π§π³π°π΄π΅π¦π₯ 
βͺ ${prefix}π©π’π­π­π°πΈπ¦π¦π― 
βͺ ${prefix}π«π°π¬π¦π³π­π°π¨π° 
βͺ ${prefix}π§πͺπ³π¦πΈπ°π³π¬π΄π±π’π³π¬π­π¦ 
βͺ ${prefix}π―π’π΅πΆπ³π¦π­π¦π’π·π¦π΄ 
βͺ ${prefix}π£π°π¬π¦π© 
βͺ ${prefix}π΅π°πΉπͺπ€ 
βͺ ${prefix}π΄π΅π³π’πΈπ£π¦π³π³πΊ 
βͺ ${prefix}π£π°πΉ3π₯ 
βͺ ${prefix}π³π°π’π₯πΈπ’π³π―πͺπ―π¨ 
βͺ ${prefix}π£π³π¦π’π¬πΈπ’π­π­ 
βͺ ${prefix}πͺπ€π¦π€π°π­π₯ 
βͺ ${prefix}π­πΆπΉπΆπ³πΊ 
βͺ ${prefix}π€π­π°πΆπ₯ 
βͺ ${prefix}π΄πΆπ?π?π¦π³π΄π’π―π₯ 
βͺ ${prefix}π©π°π³π³π°π³π£π­π°π°π₯ 
βͺ ${prefix}π΅π©πΆπ―π₯π¦π³ 
βͺ ${prefix}π±π°π³π―π©πΆπ£ 
βͺ ${prefix}π¨π­πͺπ΅π€π© 
βͺ ${prefix}π’π·π¦π―π¨π¦π³ 
βͺ ${prefix}π΄π±π’π€π¦ 
βͺ ${prefix}π―πͺπ―π«π’π­π°π¨π° 
βͺ ${prefix}π?π’π³π·π¦π­π΄π΅πΆπ₯πͺπ° 
βͺ ${prefix}π­πͺπ°π―π­π°π¨π° 
βͺ ${prefix}πΈπ°π­π§π­π°π¨π° 
βͺ ${prefix}π΄π΅π¦π¦π­3π₯ 
βͺ ${prefix}πΈπ’π­π­π¨π³π’π·πͺπ΅πΊ 
βͺ ${prefix}π΄π©π’π₯π°πΈ 
βͺ ${prefix}π€πΆπ± 
βͺ ${prefix}π€πΆπ±1 
βͺ ${prefix}π³π°π?π’π―π€π¦ 
βͺ ${prefix}π΄π?π°π¬π¦ 
βͺ ${prefix}π£πΆπ³π―π±π’π±π¦π³ 
βͺ ${prefix}π­π°π·π¦π?π¦π΄π΄π’π¨π¦ 
βͺ ${prefix}πΆπ―π₯π¦π³π¨π³π’π΄π΄ 
βͺ ${prefix}π­π°π·π¦ 
βͺ ${prefix}π€π°π§π§π¦ 
βͺ ${prefix}πΈπ°π°π₯π©π¦π’π³π΅ 
βͺ ${prefix}πΈπ°π°π₯π¦π―π£π°π’π³π₯ 
βͺ ${prefix}π΄πΆπ?π?π¦π³3π₯ 
βͺ ${prefix}πΈπ°π­π§π?π¦π΅π’π­ 
βͺ ${prefix}π―π’π΅πΆπ³π¦3π₯ 
βͺ ${prefix}πΆπ―π₯π¦π³πΈπ’π΅π¦π³ 
βͺ ${prefix}π¨π°π­π₯π¦π―π³π°π΄π¦ 
βͺ ${prefix}π΄πΆπ?π?π¦π³π―π’π΅πΆπ³π¦ 
βͺ ${prefix}π­π¦π΅π΅π¦π³π­π¦π’π·π¦π΄ 
βͺ ${prefix}π¨π­π°πΈπͺπ―π¨π―π¦π°π― 
βͺ ${prefix}π§π’π­π­π­π¦π’π·π¦π΄ 
βͺ ${prefix}π§π­π’π?π?πͺπ―π¨ 
βͺ ${prefix}π©π’π³π³πΊπ±π°π΅π΅π¦π³ 
βͺ ${prefix}π€π’??π·π¦π₯πΈπ°π°π₯ 
βͺ ${prefix}π’π³π€π’π₯π¦8π£πͺπ΅ 
βͺ ${prefix}π£π’π΅π΅π­π¦π§πͺπ¦π­π₯4 
βͺ ${prefix}π±πΆπ£π¨ 
βͺ ${prefix}πΈπ¦π΅π¨π­π’π΄π΄ 
βͺ ${prefix}π?πΆπ­π΅πͺπ€π°π­π°π³3π₯ 
βͺ ${prefix}πΈπ’π΅π¦π³π€π°π­π°π³ 
βͺ ${prefix}π­πΆπΉπΆπ³πΊπ¨π°π­π₯ 
βͺ ${prefix}π¨π’π­π’πΉπΊπΈπ’π­π­π±π’π±π¦π³ 
βͺ ${prefix}π­πͺπ¨π©π΅π΅π¦πΉπ΅ 
βͺ ${prefix}π£π¦π’πΆπ΅πͺπ§πΆπ­π§π­π°πΈπ¦π³ 
βͺ ${prefix}π±πΆπ±π±πΊπ€πΆπ΅π¦ 
βͺ ${prefix}π³π°πΊπ’π­π΅π¦πΉπ΅ 
βͺ ${prefix}π©π¦π’π³π΅π΄π©π’π±π¦π₯ 
βͺ ${prefix}π£πͺπ³π΅π₯π’πΊπ€π’π¬π¦ 
βͺ ${prefix}π¨π’π­π’πΉπΊπ΄π΅πΊπ­π¦ 
βͺ ${prefix}π©π°π­π°π¨π³π’π?3π₯ 
βͺ ${prefix}π¨π­π°π΄π΄πΊπ€π©π³π°π?π¦ 
βͺ ${prefix}π¨π³π¦π¦π―π£πΆπ΄π© 
βͺ ${prefix}π?π¦π΅π’π­π­π°π¨π° 
βͺ ${prefix}π―π°π¦π­π΅π¦πΉπ΅ 
βͺ ${prefix}π¨π­πͺπ΅π΅π¦π³π¨π°π­π₯ 
βͺ ${prefix}π΅π¦πΉπ΅π€π’π¬π¦ 
βͺ ${prefix}π΄π΅π’π³π΄π―πͺπ¨π©π΅ 
βͺ ${prefix}πΈπ°π°π₯π¦π―3π₯ 
βͺ ${prefix}π±πΆπ±π±πΊπ€πΆπ΅π¦ 
βͺ ${prefix}π³π°πΊπ’π­π΅π¦πΉπ΅ 
βͺ ${prefix}π©π¦π’π³π΅π΄π©π’π±π¦π₯ 
βͺ ${prefix}π£πͺπ³π΅π©π₯π’πΊπ€π’π¬π¦ 
βͺ ${prefix}π΄π΅π’π³π΄π―πͺπ¨π©π΅ 
βͺ ${prefix}π΅π¦πΉπ΅π£πΊπ―π’π?π¦ 
βͺ ${prefix}πΈπ³πͺπ΅π¦π¨π’π­π’π€πΊ 
βͺ ${prefix}π¨π’π­π’πΉπΊπ£π’π΅ 
βͺ ${prefix}π΄π―π°πΈ3π₯ 
βͺ ${prefix}π£πͺπ³π΅π©π₯π’πΊπ₯π’πΊ 
βͺ ${prefix}π¨π­π°π₯π±π­π’πΊπ£πΆπ΅π΅π°π― 
βͺ ${prefix}π΄πͺπ­π·π¦π³π±π­π’πΊπ£πΆπ΅π΅π°π― 
βͺ ${prefix}π§π³π¦π¦π§πͺπ³π¦ 
βββββββββββββββ

ββ β ππ¨π?π§π πππ§π? β β
βͺ ${prefix}π΄π°πΆπ―π₯1 
βͺ ${prefix}π΄π°πΆπ―π₯2 
βͺ ${prefix}π΄π°πΆπ―π₯3 
βͺ ${prefix}π΄π°πΆπ―π₯4 
βͺ ${prefix}π΄π°πΆπ―π₯5 
βͺ ${prefix}π΄π°πΆπ―π₯6 
βͺ ${prefix}π΄π°πΆπ―π₯7 
βͺ ${prefix}π΄π°πΆπ―π₯8 
βͺ ${prefix}π΄π°πΆπ―π₯9 
βͺ ${prefix}π΄π°πΆπ―π₯10 
βͺ ${prefix}π΄π°πΆπ―π₯11 
βͺ ${prefix}π΄π°πΆπ―π₯12 
βͺ ${prefix}π΄π°πΆπ―π₯13 
βͺ ${prefix}π΄π°πΆπ―π₯14 
βͺ ${prefix}π΄π°πΆπ―π₯15
βͺ ${prefix}π΄π°πΆπ―π₯16
βͺ ${prefix}π΄π°πΆπ―π₯17
βͺ ${prefix}π΄π°πΆπ―π₯18
βͺ ${prefix}π΄π°πΆπ―π₯19
βͺ ${prefix}π΄π°πΆπ―π₯20
βͺ ${prefix}π΄π°πΆπ―π₯21 
βͺ ${prefix}π΄π°πΆπ―π₯22 
βͺ ${prefix}π΄π°πΆπ―π₯23 
βͺ ${prefix}π΄π°πΆπ―π₯24 
βͺ ${prefix}π΄π°πΆπ―π₯25 
βͺ ${prefix}π΄π°πΆπ―π₯26 
βͺ ${prefix}π΄π°πΆπ―π₯27 
βͺ ${prefix}π΄π°πΆπ―π₯28 
βͺ ${prefix}π΄π°πΆπ―π₯29 
βͺ ${prefix}π΄π°πΆπ―π₯30 
βββββββββββββββ

ββ β ππ?π§ πππ§π? β β
βͺ ${prefix}π²πΆπ°π΅π¦π΄
βͺ ${prefix}π₯π’π³π¬π«π°π¬π¦
βͺ ${prefix}π?π¦π?π¦
βͺ ${prefix}π³π’π΅π¦
βͺ ${prefix}π¬π’π±π’π―π¬π’π©
βͺ ${prefix}π’π±π’π¬π’π©
βͺ ${prefix}π£πͺπ΄π’π¬π’π©
βͺ ${prefix}π€π’π³πͺπ±π¦π΄π’π―
βͺ ${prefix}π΄π­π°π΅
βͺ ${prefix}π΄πΆπͺπ΅π΄
βͺ ${prefix}π΅π’π¨π?π¦
βͺ ${prefix}π΅π’π¨
βͺ ${prefix}π³π¦π’π₯π?π°π³π¦
βͺ ${prefix}π§πͺπ΅π―π’π©π±π€
βββββββββββββββ`
but = [
{buttonId:`${prefix}owner`, buttonText: {displayText: 'OWNER'}, type: 1},
{buttonId:`${prefix}info`, buttonText: {displayText: 'INFO'}, type: 1}
]
sendButLocation(from, tes, tes2, img2, but)
hh = fs.readFileSync('./vn/bndr.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: flexx, mimetype: 'audio/mp4', ptt:true})  
break
case 'darkjoke':
case 'meme':
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=44331e566f11203b89e75428`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `β‘οΈNext`},type:1}]
imageMsg = (await LexxyOFC.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'Β©Created By King Of Bear', imageMessage: imageMsg,
contentText:`DONE NIH JANGAN LUPA Subscribe King Of Bear`,buttons,headerType:4}
prep = await LexxyOFC.prepareMessageFromContent(from,{buttonsMessage},{quoted: flexx})
LexxyOFC.relayWAMessage(prep)
break
case 'rate':
rate = body.slice(1)
const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
const te = ra[Math.floor(Math.random() * ra.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: flexx })
break
case 'apakah':
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi','Tanyakan Ayam']
const kah = apa[Math.floor(Math.random() * apa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+apakah+'*\n\nJawaban : '+ kah, text, { quoted: flexx })
break
case 'kapankah':
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Tidak Akan Pernah']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+kapankah+'*\n\nJawaban : '+ koh, text, { quoted: flexx })
break
case 'bisakah':
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','Ngimpi kah?','yakin bisa?']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
LexxyOFC.sendMessage(from, 'Pertanyaan : *'+bisakah+'*\n\nJawaban : '+ keh, text, { quoted: flexx })
break
case 'caripesan':
if (args.length < 1) return reply(`Penggunaan ${prefix}caripesan Hi|15`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('maksimal 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await LexxyOFC.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Pesan tidak ditemukan!') 
if (cok.messages.length < parseInt(batas)) reply(`Hanya ditemukan ${cok.messages.length - 1} Pesan`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
LexxyOFC.sendMessage(from, `Nih pesannya!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(mess.error.api)
}
} else {
reply(`Penggunaan ${prefix}caripesan Hi|15`)
}
break
case 'slot':
case 'slots':
const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
LexxyOFC.sendMessage(from, `[  π° | SLOTS ]\n-----------------\nπ : π : π\n${somtoy}<=====\nπ : π : π\n[  π° | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : π : π : π<=====`, MessageType.text, { quoted: flexx })
break
case 'suit':
if (args.length < 1) return reply('Pilih gunting/batu/kertas')
if (args[0] === 'gunting' ) {
gunting = [
"Kamu *Gunting*\nAku *Kertas*\nKamu Menang π",
"Kamu *Gunting*\nAku *Batu*\nKamu Kalah π",
"Kamu *Gunting*\nAku *Gunting*\nKita Seri π"
]
gun = gunting[Math.floor(Math.random() * gunting.length)]
reply(gun)
} else if (args[0] === 'kertas') {
ker = [
"Kamu *Kertas*\nAku *Batu*\nKamu Menang π",
"Kamu *Kertas*\nAku *Gunting*\nKamu Kalah π",
"Kamu *Kertas*\nAku *Kertas*\nKita Seri π"
]
kertas = ker[Math.floor(Math.random() * ker.length)]
reply(kertas)
} else if (args[0] === 'batu') {
bat = [
"Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
"Kamu *Batu*\nAku *Kertas*\nKamu Kalah π",
"Kamu *Batu*\nAku *Batu*\nKita Seri π"
]
batu = bat[Math.floor(Math.random() * bat.length)]
reply(batu)
} else {
reply('Pilih gunting/batu/kertas')
}
break
case 'tag':
if (args.length < 1) return reply(`Nomernya Mana ?\nContoh ${prefix}tag 62xnxx`)
var nomqm = `${body.slice(5)}@s.whatsapp.net`
tagq = `@${nomqm.split('@')[0]}` 
LexxyOFC.sendMessage(from, tagq, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'tagme':
var nomqm = mek.participant
tagu = `@${nomqm.split('@s.whatsapp.net')[0]}`
LexxyOFC.sendMessage(from, tagu, text, { quoted: flexx, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
break
case 'readmore':
case 'more':
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
if (!q.includes('|')) return  reply(mess.error.api)
const text1 = q.substring(0, q.indexOf('|') - 0)
const text2 = q.substring(q.lastIndexOf('|') + 1)
reply( text1 + readmore + text2)
break
case 'fitnahpc':
 if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
var gh = body.slice(10)
var parti = gh.split("|")[0];
var targetq = gh.split("|")[1];
var bot = gh.split("|")[2];
LexxyOFC.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
break
case 'sound1':
      case 'sound2':
      case 'sound3':
      case 'sound4':
      case 'sound5':
      case 'sound6':
      case 'sound7':
      case 'sound8':
      case 'sound9':
      case 'sound10':
      case 'sound11':
      case 'sound12':
      case 'sound13':
      case 'sound14':
      case 'sound15':
      case 'sound16':
      case 'sound17':
      case 'sound18':
      case 'sound19':
      case 'sound20':
      case 'sound21':
      case 'sound22':
      case 'sound23':
      case 'sound24':
      case 'sound25':
      case 'sound26':
      case 'sound27':
      case 'sound28':
      case 'sound29':
      case 'sound30':
      case 'sound31':
      case 'sound32':
      case 'sound33':
      case 'sound34':
      case 'sound35':
      case 'sound36':
      case 'sound37':
      case 'sound38':
      case 'sound39':
      case 'sound40':
      case 'sound41':
      case 'sound42':
      case 'sound43':
      case 'sound44':
      case 'sound45':
      case 'sound46':
      case 'sound47':
      case 'sound48':
      case 'sound49':
      case 'sound50':
      case 'sound51':
      case 'sound52':
      case 'sound53':
      case 'sound54':
      case 'sound55':
      case 'sound56':
      case 'sound57':
      case 'sound58':
      case 'sound59':
      case 'sound60':
      case 'sound61':
      case 'sound62':
      case 'sound63':
      case 'sound64':
      case 'sound65':
      case 'sound66':
      case 'sound67':
      case 'sound68':
      case 'sound69':
      case 'sound70':
      case 'sound70':
      omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
      break
      case 'sound71':
      case 'sound71':
      case 'sound72':
      case 'sound73':
      case 'sound74':
      case 'sound75':
      omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
      LexxyOFC.sendMessage(from, omkeh, MessageType.audio, { quoted: fvn, mimetype: 'audio/mp4', ptt: true })
          break      
case 'blackpink':
case 'neon':
case 'greenneon':
case 'advanceglow':
case 'futureneon':
case 'sandwriting':
case 'sandsummer':
case 'sandengraved':
case 'metaldark':
case 'neonlight':
case 'holographic':
case 'text1917':
case 'minion':
case 'deluxesilver':
case 'newyearcard':
case 'bloodfrosted':
case 'halloween':
case 'jokerlogo':
case 'fireworksparkle':
case 'natureleaves':
case 'bokeh':
case 'toxic':
case 'strawberry':
case 'box3d':
case 'roadwarning':
case 'breakwall':
case 'icecold':
case 'luxury':
case 'cloud':
case 'summersand':
case 'horrorblood':
case 'thunder':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} King Of Bear`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe King Of Bear`, quoted : flexx})
})
break
case 'pornhub':
case 'glitch':
case 'avenger':
case 'space':
case 'ninjalogo':
case 'marvelstudio':
case 'lionlogo':
case 'wolflogo':
case 'steel3d':
case 'wallgravity':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} King Of Bear`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe King Of Bear`, quoted : flexx})
})
break
case 'shadow':
case 'cup':
case 'cup1':
case 'romance':
case 'smoke':
case 'burnpaper':
case 'lovemessage':
case 'undergrass':
case 'love':
case 'coffe':
case 'woodheart':
case 'woodenboard':
case 'summer3d':
case 'wolfmetal':
case 'nature3d':
case 'underwater':
case 'golderrose':
case 'summernature':
case 'letterleaves':
case 'glowingneon':
case 'fallleaves':
case 'flamming':
case 'harrypotter':
case 'carvedwood':
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} King Of Bear`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe King Of Bear`, quoted : flexx})
})
break
case 'arcade8bit':
case 'battlefield4':
case 'pubg':
if (args.length == 0) return reply(`Example: ${prefix + command} LexxyOFC Xd`)
txt1 = args[0]
txt2 = args[1]
getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=${lolkey}&text1=${txt1}&text2=${txt2}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe King Of Bear`, quoted : flexx})
})
break
case 'wetglass':
case 'multicolor3d':
case 'watercolor':
case 'luxurygold':
case 'galaxywallpaper':
case 'lighttext':
case 'beautifulflower':
case 'puppycute':
case 'royaltext':
case 'heartshaped':
case 'birthdaycake':
case 'galaxystyle':
case 'hologram3d':
case 'greenneon':
case 'glossychrome':
case 'greenbush':
case 'metallogo':
case 'noeltext':
case 'glittergold':
case 'textcake':
case 'starsnight':
case 'wooden3d':
case 'textbyname':
case 'writegalacy':
case 'galaxybat':
case 'snow3d':
case 'birthdayday':
case 'goldplaybutton':
case 'silverplaybutton':
case 'freefire':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh : ${prefix + command} King Of Bear`)
ini_txt = args.join(" ")
getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
LexxyOFC.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe King Of Bear`, quoted : flexx}) 
})
break
case 'ssweb':
if (args.length == 0) return reply(`Teks Nya Mana ?\nContoh: ${prefix + command} Lexxy Gantenk`)
ini_url = args.join(" ")
reply(mess.wait)
getBuffer(`https://ziy.herokuapp.com/api/ssweb?apikey=${xziyApi}&url=${ini_url}`).then((hasil) => {
LexxyOFC.sendMessage(from, hasil, image, { thumbnail: Buffer.alloc(0), caption: `DONE NIH JANGAN LUPA Subscribe King Of Bear`, quoted : flexx })
})
break
case 'nulis':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} King Of Bear`)
bo = args.join(" ")
reply(mess.wait)
nul = await getBuffer(`https://ziy.herokuapp.com/api/nulis?text=${bo}&apikey=${xziyApi}`)
LexxyOFC.sendMessage(from, nul, image, { quoted: mek, caption: 'Nih Kak Hasilnya' })
break
case 'shadow':
case 'flaming':
case 'rainbow':
case 'smoke':
case 'wood':
case 'coffe':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
rn = await getBuffer(`http://zekais-api.herokuapp.com/oxy/${command}?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, rn, image, { quoted: mek, caption: 'Nih Kak Hasil Makernya' })
break
case 'bold':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
bl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/bold?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, bl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: 'ππβ π΅ππ πππππ ππ¦π'})
break
case 'poly':
if (args.length == 0) return reply(`Text Nya Mana\nContoh: ${prefix + command} Lexxy`)
bo = args.join(" ")
reply(mess.wait)
pl = await getBuffer(`http://zekais-api.herokuapp.com/oxy/poly?text=${bo}&apikey=${zekais}`)
LexxyOFC.sendMessage(from, pl, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: 'ππβ π΅ππ πππππ ππ¦π'})
break
case 'cerpen':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/cerpen?apikey=${zekais}`)
ini_txt =`Judul :${get.title}\n`
ini_txt +=`Pengarang : ${get.pengarang}\n`
ini_txt +=`Category : ${get.category}\n\n`
ini_txt +=`Cerita : ${get.post}`
reply(ini_txt)
break
case 'memes':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/dankmemes?apikey=${zekais}`)
ini = await getBuffer(`${get.result}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek })
break
case 'bucin':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bucin?apikey=rz86Vlf6`)
ini_txt =`*${get.result}*`
reply(ini_txt)

break
case 'bijak':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/bijak?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'fakta':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/fakta?apikey=${zekais}`)
ini_txt =`*${get.result}*`
reply(ini_txt)
break
case 'quotesimg':
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/quotepic?apikey=${zekais}`)
ini = await getBuffer(`${get.quotes}`)
LexxyOFC.sendMessage(from, ini, image, { quoted: mek, caption: 'πΈπππππ π©π πππ£π ππ π½πππ§' })
break
case 'quotesid':
case 'quotes':
reply(mess.wait)
anu = await fetchJson(`https://api.zeks.me/api/quote?apikey=apivinz`)
teks = anu.result
get = teks
reply(`${teks.quotes}\n\nBy : ${teks.author}`)
break
case 'tiktok':
tt = args.join(" ")
reply(mess.wait)
get = await fetchJson(`http://zekais-api.herokuapp.com/tiktok2?url=${tt}&apikey=${zekais}`)
ini = await getBuffer(get.result.no_wm)
LexxyOFC.sendMessage(from, ini, MessageType.video,{mimetype:'video/mp4',quoted: mek, caption: 'ππβ π΅ππ πππππ ππ¦π'})
break
case 'sc':
case 'infosc':
case 'info':
scnya = `βββ€ γ ππππ π½ππ γ
β― πππ¦π : ${botName}
β― ππ°π§ππ« : ${ownerName}
β― ππ«πππ’π± : γ ππ?π₯π­π’ ππ«πππ’π± γ
β― ππ₯ππ­ππ¨π«π¦ : ππ§ππ«π¨π’π 11
β― ππ’π : πππ’π₯ππ²π¬
β― ππ²π©π : ππ¨ππππ
β― ππ?π§π­π’π¦π : ${runtime(process.uptime())}
ββββββββββββββ
ββ€ γ ππππ πΏππ γ
βοΈ ππππππ‘ ππππ ππ π΅π¦ ππ²π·π° ππ― ππ?πͺπ»
π ππππ πππ : 6.0
π πΏππ π‘ πππππ‘π : 01-Jan-2022

π¦ πΊππ’π:
https://chat.whatsapp.com/HAZ6yFgCafUAeDbNH33IrL

π πππ’ππ’ππ:
https://www.youtube.com/channel/UCu3cFVCT9rHD1spardoP93g

πΊππππππππ π­ππ π΅ππ πΌπππππ!`
buttons = [
{buttonId:`${prefix}menu`, buttonText: {displayText: '</BACK MENU'}, type: 1}
]
const info = {
    contentText: `${scnya}`,
    footerText: ``,
    buttons: buttons,
    headerType: 1
}
await LexxyOFC.sendMessage(from, info, MessageType.buttonsMessage, {quoted: mek})
hh = fs.readFileSync('./vn/gktw.mp3')
await LexxyOFC.sendMessage(from, hh, MessageType.audio, {qouted: flexx, mimetype: 'audio/mp4', ptt:true})  
break
case 'playmp3':
case 'play':
if (args.length < 1) return reply('Masukin Judul Lagunya')
teks = args.join(' ')
reply(mess.wait)
if (!teks.endsWith("-doc")){
res = await yts(`${teks}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(` Playing ${res.all[0].title}`)
let thumbInfo = ` *Youtube Search*
β’ *Judul :* ${res.all[0].title}
β’ *ID Video :* ${res.all[0].videoId}
β’ *Diupload Pada :* ${res.all[0].ago}
β’ *Views :* ${res.all[0].views}
β’ *Durasi :* ${res.all[0].timestamp}
β’ *Channel :* ${res.all[0].author.name}
β’ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, audio, {quoted: mek, mimetype: 'audio/mp4', filename: res[0].output})
}
if (teks.endsWith("-doc")){
var tec = teks.split("-doc")
res = await yts(`${tec}`).catch(e => {
reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')
})
reply(`.Playing ${res.all[0].title}`)
let thumbInfo = `*${botname}* 
β’ *Judul :* ${res.all[0].title}
β’ *ID Video :* ${res.all[0].videoId}
β’ *Diupload Pada :* ${res.all[0].ago}
β’ *Views :* ${res.all[0].views}
β’ *Durasi :* ${res.all[0].timestamp}
β’ *Channel :* ${res.all[0].author.name}
β’ *Link Channel :* ${res.all[0].author.url}

*_Tunggu Proses Upload....._*
`
sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: thumbInfo})
res = await y2mateA(res.all[0].url).catch(e => {
reply('_[ ! ] Error Saat Memasuki Web Y2mate_')
})
sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
}
break
case 'sticker':
case 'stiker':
case 's':
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `${fakeyoi}`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, Pada Saat Mengkonversi ${tipe} Ke Stiker. Pastikan Untuk Video Yang Dikirim Tidak Lebih Dari 9 Detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await LexxyOFC.downloadAndSaveMediaMessage(encmedia, './storage/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = 'bcAvZyjYAjKkp1cmK8ZgQvWH'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi Kesalahan, Silahkan Coba Beberapa Saat Lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
LexxyOFC.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: mek })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim Gambar Dengan Caption ${prefix}sticker Atau Tag Gambar Yang Sudah Dikirim`)
}
break
case 'owner':
sendKontak(from, `${owner}`, `${ownerName} β¨`)
break      

case 'bc':
case 'bcbut':
if (!isOwner) return reply(`Hanya Untuk Owner`)
if (args.length < 1) return reply('Teksnya?')
anu = await LexxyOFC.chats.all()
for (let _ of anu) {
buttonss = [{buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},{buttonId: `owner`, buttonText: {displayText: 'OWNER'}, type: 1}]
var btnbc = {
contentText: `${q}`,
footerText: '*SILAHKAN TEKAN BUTTON UNTUK INFORMASI LANJUT*',
buttons: buttonss,
headerType: 1
}
await LexxyOFC.sendMessage(_.jid, btnbc, MessageType.buttonsMessage, {quoted: flexx})
}
reply(`Sukses Mengirim Broadcast:\n${q}`)
break



	
//BATASNYA
default:
           if (budy.startsWith("$ ")){
           if (!mek.key.fromMe && !isOwner) return reply('```khusus owner bro```')
           	console.log(color('[EVAL]'), color(moment(mek.messageTimestamp * 1000).format('HH:mm:ss'), 'yellow'), color(`Dari owner ni`))
           	exec(chats.slice(2), (err, stdout) => {
           	if (err) return reply(`${err}`)
           	if (stdout) reply(`${stdout}`)
           	})
            }
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return LexxyOFC.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'pink'))
        }
	}
}


	
    
