const { MessageEmbed } = require("discord.js");

module.exports = async (client, channel) => {
  if (channel.type === "dm") return;
  else {
    const fetchGuildAuditLogs = await channel.guild.fetchAuditLogs({
      limit: 1,
      type: 'CHANNEL_CREATE'
    });
  
    const latestChannelCreated = fetchGuildAuditLogs.entries.first();
    const { executor } = latestChannelCreated;
  
    const embed = new MessageEmbed()
      .setAuthor(`[SALON CREE] ${channel.name}`)
      .setColor("#004aff")
      .setDescription(`**Moderateur**: ${executor.tag}\n**Action**: création de salon\n**Salon créé**: ${channel.name}`)
      .setTimestamp()
      .setFooter(executor.username, executor.displayAvatarURL());
  
    client.channels.cache.get("757260841031565497").send(embed);
  }
}