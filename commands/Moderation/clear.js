const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut spécifier un ***nombre*** entre 1 et 100 !');

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });

  await message.channel.bulkDelete(messages);
  message.delete();

  const embed = new MessageEmbed()
    .setAuthor(`[CLEAR] ${message.channel.name}`, message.guild.iconURL())
    .setColor("#ff0092")
    .setDescription(`**Salon**: ${message.channel}\n**Moderateur**: ${message.author.tag}\n**Action**: clear\n**Nbr de messages: ${args[0]}**`)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
};

module.exports.help = MESSAGES.COMMANDS.MODERATION.CLEAR;
