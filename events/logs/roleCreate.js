const { MessageEmbed } = require("discord.js");

module.exports = async (client, role) => {
  const fetchGuildAuditLogs = await role.guild.fetchAuditLogs({
    limit: 1,
    type: 'ROLE_CREATE'
  });

  const latestRoleCreated = fetchGuildAuditLogs.entries.first();
  const { executor } = latestRoleCreated;

  const embed = new MessageEmbed()
    .setAuthor(`[ROLE CREE] ${role.name}`)
    .setColor("#004aff")
    .setDescription(`**Moderateur**: ${executor.tag}\n**Action**: création de rôle\n**Rôle créé**: ${role.name}`)
    .setTimestamp()
    .setFooter(executor.username, executor.displayAvatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
}