const { MessageEmbed } = require("discord.js");

module.exports = async (client, role) => {
  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
    limit: 1,
    type: 'ROLE_DELETE'
  });

  const latestRoleDeleted = fetchGuildAuditLogs.entries.first();
  const { executor } = latestRoleDeleted;

  const embed = new MessageEmbed()
    .setAuthor(`[ROLE SUPPR] ${role.name}`)
    .setColor("#be1201")
    .setDescription(`**Moderateur**: ${executor.tag}\n**Action**: suppréssion de rôle\n**Rôle supprimé**: ${role.name}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
}