const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
  let user = message.mentions.users.first();
  let reason = (args.splice(1).join(' ') || 'Aucune raison spécifiée !');
  user ? message.guild.member(user).ban({reason}) : message.channel.send("L'utilisateur n'existe pas");

  const embed = new MessageEmbed()
    .setAuthor(`[BAN] ${user.tag}`, user.avatarURL())
    .setColor("#dc143c")
    .setDescription(`**Utilisateur**: ${user.tag}\n**Moderateur**: ${message.author.tag}\n**Action**: ban\n**Raison**: ${reason}`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("757260841031565497").send(embed);

};

module.exports.help = {
  name: "ban",
  aliases: ["ban"],
  category: 'moderation',
  description: "Ban un utilisateur",
  cooldown: 3,
  usage: "<@user> <raison>",
  isUserAdmin: true,
  permissions: true,
  args: true,
};
