const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
  const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
    limit: 1,
    type: 'CHANNEL_DELETE'
  });

  const latestChannelDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestChannelDeleted;

  const embed = new MessageEmbed()
    .setAuthor(`[SALON SUPPR] ${channel.name}`)
    .setColor("#660027")
    .setDescription(`**Moderateur**: ${executor.tag}\n**Action**: suppréssion de salon\n**Salon supprimé**: ${channel.name}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
}