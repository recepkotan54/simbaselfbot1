const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();


client.on("guildMemberAdd", member => {
    member.send('Merhaba Kanka! :heart: \Seni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})
client.on("guildMemberRemove", member => {
    member.send('Merhaba Kanka! :heart: \Seni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU');

    //member.guild.defaultChannel.sendMessage(`Welcome "${member.user.username}"! Be sure to set your platform by typing "!role"`);
})


client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'sa') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hb') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'as') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'partner') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'tm') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hb') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'tmm') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'hoşgeldin') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'selamun aleyküm') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})

client.on("message", async message =>{
  if (message.content.toLowerCase()=== 'merhaba') {
message.author.send('Merhaba Kanka! :heart: \nSeni ***__Simba__*** Krallığına Davet Ediyorum!👉  https://discord.gg/ee6sGSU')
  }
})
client.on("guildCreate", guild => {
  console.log(`Yeni Sunucuya Katıldım: ${guild.name}\n. Bu Sunucu ${guild.memberCount} Üye!`);
});
client.on("guildDelete", guild => {
  console.log(`Hey Beni Çıkardılar ;(: ${guild.name}`);
});



client.login("NDc2NTE1MTA2MDI1NTA0NzY4.Dkutlg.6oe3i3Vp8C4695cCVU6_cBZ2QhA");
