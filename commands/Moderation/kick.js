const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée !');
  user ? message.guild.member(user).kick(reason) : message.channel.send("L'utilisateur n'existe pas !");

  const embed = new MessageEmbed() 
    .setAuthor(`[KICK] ${user.tag}`, user.avatarURL())
    .setColor("#ff4500")
    .setDescription(`**Utilisateur**: ${user.tag}\n**Moderateur**: ${message.author.tag}\n**Action**: kick\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.KICK;