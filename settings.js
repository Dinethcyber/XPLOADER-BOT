  //project_name : XPLOADER
// @author : TYLOR
// @youtube : https://www.youtube.com/@heyits_tylor
// @instagram : heyits_tylor
// @telegram : t.me/heyits_tylor
// @github : Dark-Xploit
// @tiktok : heyits_tylor
// @whatsapp : +254754783972
//*
//* 
//=================================================//
const fs = require('fs')
const { color } = require('./lib/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//=================================================//
global.SESSION_ID =XPLOADER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZoYzhtZ1VINjhwWnR0RGlhY2FHYUlXZEFodHFnVUJrS1RPelN2QnVHND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTlyZzZDaXBOUE5NR01xWEpEVU9SU0h4cWxOSWxiUmlTRmpLbDZhc1lnVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNS1B0MTZxKzhHSVdNT2pPRVZQazl1THRyWGgrYXdSS2FDWHFPT0d0R1g4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4RGhYWlJZWWE2MVZkUEYyRnpCdEJtS0ZMM2VyeHYxY0pqWTArd3Y2MWhRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFDUWlGNVR2NW9XTXhiM3o2WXcyWEVpSDY5dFIyZDJMOVhLbzhyT2RWVUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJuTWZ3anBkb0YrVWtWRWF5aGE4QmhBRUdpRTZQV0VFSU9PNElqZHNWUTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUpnSjdXdXp3Z2E3bG53b2RMRjNsc0FjTEpYazFISDJETEkrNmh2SWdVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzUvb05KK21YSGc0NFZsdktxelFtUms0LzVneGZqL3NSd0NqaXVqQ0lDOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iklhc0pBRU02MXNSemtnamU5eHcyL0FOYXNhNzRXNXR0VWxSdzdlZ1lnR1poR2tBaGxLZVJvVGRyd3ltS3Q4MHhMei83MGpEbHhmaXFyMVRoRE81d2h3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDgsImFkdlNlY3JldEtleSI6Iis3NlV4MFNpMmVaZ1pmWTZSdm8yajhoNXpVSUZvdzdNYUxZdmticS9kdTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NDE3MDMwMzhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUMzNzQxQkUyMzg0MzI4NjU3NUUxMkM3NTg4MTc4MkIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczNTkwODAyNX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiM0JJRjFDMGVTcjJkeDNPQ0djUzBUQSIsInBob25lSWQiOiJjY2M0NTBkOS00NWY3LTRkNTgtOTVjMS0xODkxYTdmMjRkZmUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU9qenNBWmlES1pRYW1CVHJyWUlwMlY2S1V3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ2M3NESHlRd081NE40UU9kUGlUaEc2aFl6QT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI5TDdDMkZOMiIsIm1lIjp7ImlkIjoiOTQ3NDE3MDMwMzg6MjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoifkRlbW8iLCJsaWQiOiI1MDA3NTQ5MzUxOTQ0ODoyMEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05UKzcvUUNFS1cxMzdzR0dBd2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImN2ckZCazBKbG0yVTdFUmNLR3prNndJY2xKQWZkYVVHL1dCY2xaTFhQeXc9IiwiYWNjb3VudFNpZ25hdHVyZSI6InBTRUdHczJ5cktoY0IzUVlHcnpVMnpZYm9qTHhzbi9yYWJ3SEYrYzUvanEzdEVNb3lOYmRkWkN5R2o2azVqWElVYmU0OHRneElkLzlmSzh6VmJnUkJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJoNkhhNnNVOTNkdkd0Sm81MnpVc3JkOTE1ODhyVnRwMi93WWlJbkdDRWk2VEJtNjVheEMwdFdiQU9uR1k3Zy9Yeis1ZnU4QllLZGxENEtYWmNYSGRpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzQxNzAzMDM4OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhMNnhRWk5DWlp0bE94RVhDaHM1T3NDSEpTUUgzV2xCdjFnWEpXUzF6OHMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5MDgwMTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQ2tCIn0= || '' 
//Enter your Xploader session id here; must start with XPLOADER~

//=================================================//
global.botname = process.env.BOT_NAME || 'DEMO ᗷOT' 
//Your desired bot name

//=================================================//
global.ownernumber = process.env.OWNER_NUMBER || '94741703038' 
//Type your number here

//=================================================//
global.ownername = process.env.OWNER_NAME || 'demo' 
//Type your name here

//=================================================//
global.plink = process.env.PLINK || "https://www.instagram.com/heyits_tylor?igsh=YzljYTk1ODg3Zg=="

//=================================================//
global.wm = process.env.GL_WM || "©DEMO ᗷOT"

//=================================================//
global.packname = process.env.STICKER_PACK_NAME || "DEMO" 
//The sticker pack name

//=================================================//
global.author = process.env.STICKER_AUTHOR_NAME || "ᗷOT" 
//The sticker author name

//=================================================//
global.urldb =process.env.MONGODB_URL || ""
// just leave blank or enter a mongoDB url

//=================================================//
global.xprefix = process.env.PREFIX || '.' 
//Set your desired prefix

//=================================================//
global.mode = process.env.MODE || 'public';
// Set to 'private' to enable private mode, otherwise default is 'public'

//=================================================//
global.hituet = 0 
//=================================================//
global.autoviewstatus = process.env.AUTO_STATUS_VIEW || 'true'

//=================================================//
global.autoreactstatus = process.env.AUTO_STATUS_REACT || 'true'

//=================================================//
global.anticall = process.env.ANTI_CALL || 'false'

//=================================================//
global.welcome = process.env.WELCOME_MSG || 'false'

//=================================================//
global.statusemoji = process.env.STATUS_EMOJI || '🙂'
//Set the emoji that you want to be reacted to status

//=================================================//
global.timezones = process.env.TIMEZONE || "Africa/Nairobi" 
//Don't edit this if you don't know!

//=================================================//
global.countrycode = process.env.COUNTRY_CODE || '254' 
//set your country code for functionality of blockforeign and antiforeign commands

//=================================================//
global.autoblockforeign = process.env.AUTO_BLOCK_FOREIGN || 'false';
// Set to 'true' to enable automatic blocking of foreign numbers

//=================================================//
global.gcantiforeign = process.env.GC_ANTI_FOREIGN || 'false';
// Set to 'true' to enable automatic removal of foreign numbers from groups

//=================================================//
global.autoread = process.env.AUTO_READ || 'false';
// Set to 'true' to enable automatic reading of messages

//=================================================//
//=================================================//
global.menustyle = process.env.MENU_STYLE || '2' 
// options 1, 2, 3, 4 or 5
// 1 = Document menu(Android only)
// 2 = Text only menu(Android & iOS)
//3 = Image menu with context(Android & iOS)
//4 = Image menu(Android & iOS)
//5 = Payment menu

//=================================================//
//Replies
global.mess = { 
  limit: '*Your limit is used up!*', 
  nsfw: '*Tell the admin to enable NSFW first!*', 
  done: '*Done*', 
  error: '*Sorry, I cannot perform that action!*', 
  success: '*©𝐗𝐩𝐥𝐨𝐚𝐝𝐞𝐫𝐁𝐨𝐭*', 
  premium: '*Only premium users can use this command!*', 
  owner: '*Apologies, only my owner can use this command!*', 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}
//=================================================//

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})
//=================================================//
