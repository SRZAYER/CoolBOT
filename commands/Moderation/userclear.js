const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  if (isNaN(args[1]) || (args[1] < 1 || args[1] > 100)) return message.reply('Il faut spécifier un ***nombre*** entre 1 et 100 !');

  const messages = (await message.channel.messages.fetch({
    limit: 100,
    before: message.id,
  })).filter(a => a.author.id === user.id).array();

  messages.length = Math.min(args[1], messages.length);

  if (messages.length === 0 || !user) return messages.reply('Aucun message à supprimer sur cet utilisateur (ou cet utilisateur n\'existe pas) !');

  if (messages.length === 1) await messages[0].delete();
  else await message.channel.bulkDelete(messages);

  message.delete();

  const embed = new MessageEmbed()
    .setAuthor(`[USERCLEAR] ${user.user.tag}, ${message.channel.name}`, user.user.avatarURL())
    .setColor("#9b0b58")
    .setDescription(`**Salon**: ${message.channel}\n**Utilisateur**: ${user.user.tag}\n**Moderateur**: ${message.author.tag}\n**Action**: userclear\n**Nbr de messages: ${args[1]}**`)
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
};

module.exports.help = {
  name: "userclear",
  aliases: ["userclear"],
  category: 'moderation',
  description: "Clear un nombre de message d'un utilisateur",
  cooldown: 3,
  usage: "<@user> <nbr_message>",
  isUserAdmin: true,
  permissions: true,
  args: true,
};
