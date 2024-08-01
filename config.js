const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "22364881656";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_47_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgzLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTc2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyLFxuICAgICAgICA1MSxcbiAgICAgICAgMSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEzNCxcbiAgICAgICAgODQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxLFxuICAgICAgICA0LFxuICAgICAgICA3OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwLFxuICAgICAgICAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDc4LFxuICAgICAgICA0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDgsXG4gICAgICAgIDQwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDg2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjE5LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTksXG4gICAgICAgIDE3MixcbiAgICAgICAgMjMwLFxuICAgICAgICAzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM4LFxuICAgICAgICA2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDcyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTI1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDU0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDgwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICA5OCxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTczLFxuICAgICAgICA3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICA1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTAsXG4gICAgICAgIDMsXG4gICAgICAgIDk1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU3LFxuICAgICAgICAyNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIxNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMzksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiWnQ1V3M5WlZvN2xaek9IOFh2cHMvenB0NFQ3U1MzRWVtSEJCczRMUUNwTT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiWG5DZ1I1cnNTZFdDcTdrVHRHVHc5UVwiLFxuICBcInBob25lSWRcIjogXCJlZTYxY2IzYi1hNWVhLTRhMDItOWJkOC1kODZhMzI2ZmIxYTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAxMjcsXG4gICAgICAzMyxcbiAgICAgIDY4LFxuICAgICAgMTEsXG4gICAgICA2MixcbiAgICAgIDEzNyxcbiAgICAgIDMyLFxuICAgICAgNjIsXG4gICAgICAxODAsXG4gICAgICA2MCxcbiAgICAgIDE1MSxcbiAgICAgIDYyLFxuICAgICAgMTgxLFxuICAgICAgMTIxLFxuICAgICAgMTU1LFxuICAgICAgMTM5LFxuICAgICAgMjUyLFxuICAgICAgMTA3LFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMjEyLFxuICAgICAgMjQ5LFxuICAgICAgMjI5LFxuICAgICAgMjExLFxuICAgICAgMTMwLFxuICAgICAgMTE1LFxuICAgICAgODIsXG4gICAgICAxMzcsXG4gICAgICAxMixcbiAgICAgIDEzMSxcbiAgICAgIDYsXG4gICAgICAyMDAsXG4gICAgICAxNjYsXG4gICAgICAxNDgsXG4gICAgICAxMDEsXG4gICAgICAxMTIsXG4gICAgICAyMzYsXG4gICAgICAzNyxcbiAgICAgIDI0NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKQlY2SzU4TVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzNjQ4ODE2NTY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3NDY4NTA4NjQxNzA1MjoxMkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNU3kxTEVGRU1lSHJyVUdHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInVQbFluK0s5MmtWUHlxb2o2dmZIMnNPam55cjFzeG5DMXNTRUxNNzh2SE09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYjVNNWZKejh2TTRIc3VPeE5XU0lhNGRRSHdkR2pROE1Gd0xxUitsNnFKRGM1NWE5dndBZDhUK3VpVFZ6aUY0LzFzVm9lWVREY3JaQzBnUmtWZUhCQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwicjhNRGVZeE9SOUNKTHc4RDFadTlKYjFaMzUyVXV0VnROTjNsVkJXWXhxRUVuM0V2bmJxZGxwNVV3c21MVys5UitPTDQ0VkhFMklrdTlDWnB5STVSQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzNjQ4ODE2NTY6MTJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjUxNjQyNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJtUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQm1QLmpzb24iOiAie1wia2V5RGF0YVwiOlwiUnE4WW10SVh4MURDeHdOVUErdmttL0NIY3kyK2xoVDZ4TnBIZzEwcXFjVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDQ2MzIwNDUyLFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0NDU1NDY5NjhcIn0iCn0="  // PUT y 


module.exports = {

  menu: process.env.MENU || "https://telegra.ph/file/07a9fc24fad3a07d9c789.jpg", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𝛭𝑅 𝑇𝑊𝛪𝐿𝛪𝐺𝛨𝑇",
  botname : process.env.BOT_NAME  || "𝛭𝑅 𝑇𝑊𝛪𝐿𝛪𝐺𝛨𝑇 md",
  ownername:process.env.OWNER_NAME|| "𝛭𝑅 𝑇𝑊𝛪𝐿𝛪𝐺𝛨𝑇",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
