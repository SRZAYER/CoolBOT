const { MessageEmbed } = require("discord.js");

module.exports = (client, member) => {
  const embed = new MessageEmbed()
    .setAuthor(`[DEPART] ${member.user.tag}`, member.user.displayAvatarURL())
    .setColor("#ff0004")
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`**Utilisateur**: ${member.user.tag}\n**Action**: quitte le serveur`)
    .setFooter(`${member.displayName} a quitté`)
    .setTimestamp();

  client.channels.cache.get("757260841031565497").send(embed);
}