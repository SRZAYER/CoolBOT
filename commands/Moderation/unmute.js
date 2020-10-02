const { MessageEmbed } = require("discord.js");

module.exports.run = (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find((r) => r.name === "Muted_by_CB");

  if (!user.roles.cache.has(muteRole.id)) return message.reply("L'utilisateur mentionné n'est pas muté !");
  user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> n'est plus muté.`);

  const embed = new MessageEmbed()
    .setAuthor(`[UNMUTE] ${user.user.tag}`, user.user.avatarURL())
    .setColor("#287db5")
    .setDescription(`**Utilisateur**: ${user.user.tag}\n**Moderateur**: ${message.author.tag}\n**Action**: unmute`)
    .setThumbnail(user.user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
};

module.exports.help = {
  name: "unmute",
  aliases: ["unmute"],
  category: 'moderation',
  description: "Unmute un utilisateur",
  cooldown: 3,
  usage: "<@user>",
  isUserAdmin: true,
  permissions: true,
  args: true,
};
