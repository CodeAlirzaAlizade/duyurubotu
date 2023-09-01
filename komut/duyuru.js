const Discord = require('discord.js');
const closly = require("../closly.json")
const db = require('quick.db')

exports.run = (client, message, args) => {

if(message.author.id !== closly.sahip) return message.channel.send(`BU KOMUTU NASIL BULDUN AMK`)

      client.users.forEach(u => {

const emd = new Discord.RichEmbed()

.setColor("#00E5FF")
.setAuthor(`You want +1,000 Members ?!`, "https://cdn.discordapp.com/attachments/681179556199268411/740712944815570995/d0baeb785f77b8ed953688d26ff5cd50.png")
.setDescription(`[CLICK ME](https://discord.gg/hGvQch6)`)
.setThumbnail(client.user.avatarURL)
.addField(`**You want more members+ coins ? You mst only click !**  [Click Here To Get More Coins](https://discord.gg/hGvQch6)`)
.setImage("https://cdn.discordapp.com/attachments/681179556199268411/740712533966454904/Sans_titre-1.png")
.setFooter("Secret Event", "https://cdn.discordapp.com/attachments/681179556199268411/740712944815570995/d0baeb785f77b8ed953688d26ff5cd50.png")

u.send(emd)

})
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['send'],
  permlevel: 0
};

exports.help = {
  name: 'sex',
  description: 'İstediğiniz şeyi bota duyurtur. Sadece Bot Kurucuları Yapar.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};