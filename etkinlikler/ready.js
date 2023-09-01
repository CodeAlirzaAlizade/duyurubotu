const ayarlar = require('../closly.json');

module.exports = client => {
  client.user.setActivity(`SA`);//Oynuyor yerini Yaz knk
   
// Kaç Kullancı olduğunu görmek için
// ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı! 🔥

  console.log(`↝ Logs.`);
  console.log(`↝ Bu Alt Yapı Closly e aittir.`);
  console.log(`↝ ${client.user.username} Adıyla Botun Aktif.`);
console.log(`▷ ────◉────── 00:50\n\n Botun Başladı.`);
};

