const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`[ARRIVEE] ${member.user.tag}`, member.user.displayAvatarURL())
    .setColor("#33ff00")
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`**Utilisateur**: ${member.user.tag}\n**Action**: rejoint le serveur`)
    .setFooter(`${member.displayName} a rejoint`)
    .setTimestamp();

  client.channels.cache.get("757260841031565497").send(embed);
}