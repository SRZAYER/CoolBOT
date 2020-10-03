const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = await client.users.fetch(args[0]);
  if (!user) return message.reply("L'utilisateur n'existe pas");
  message.guild.members.unban(user);

  const embed = new MessageEmbed()
    .setAuthor(`[UNBAN] ${user.tag}`, user.avatarURL())
    .setColor("#00ff9f")
    .setDescription(`**Utilisateur**: ${user.tag}\n**Moderateur**: ${message.author.tag}\n**Action**: unban`)
    .setThumbnail(user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.UNBAN;
