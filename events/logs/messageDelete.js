const { MessageEmbed } = require("discord.js");

module.exports = async (client, message) => {
  const fetchGuildAuditLogs = await message.guild.fetchAuditLogs({
    limit: 1,
    type: 'MESSAGE_DELETE',
  });

  const latestMessageDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestMessageDeleted;

  const embed = new MessageEmbed()
    .setAuthor("[MESSAGE SUPPR]")
    .setColor("#660027")
    .setDescription(`**Action**: suppréssion de message\n**Message supprimé**: ${message.content}\n**Auteur de message**: ${message.author}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
};