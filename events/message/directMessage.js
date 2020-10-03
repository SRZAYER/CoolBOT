const { MessageEmbed } = require("discord.js");

module.exports = (client, message) => {
 const user = message.author;
 if (user.bot) return;

 const embed = new MessageEmbed() 
   .setAuthor(`[TICKET] ${user.tag}`, user.avatarURL())
   .setColor("#00ffa4")
   .setDescription(`**Utilisateur**: ${user}\n**Action**: ouverture de ticket\n**Raison**: ${message.content}`)
   .setThumbnail(user.avatarURL())
   .setTimestamp()
   .setFooter(message.author.username, message.author.avatarURL());
  user.send("Votre ticket a été envoyé, on vous repondra dès que possible !")
 client.channels.cache.get("761647236383637554").send(embed);
}