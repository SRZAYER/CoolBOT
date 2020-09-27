const ms = require("ms");
const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find((r) => r.name === "Muted_by_CB");
  let muteTime = (args[1] || "60s");

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data: {
        name: "Muted_by_CB",
        color: "#0a0a0a",
        permissions: [],
      },
    });

    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updateOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false,
        VIEW_CHANNEL: false,
      });
    });
  }

  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
  }, ms(muteTime));

  const embed = new MessageEmbed()
    .setAuthor(`[MUTE] ${user.user.tag}`, user.user.avatarURL())
    .setColor("#fcf700")
    .setDescription(`**Utilisateur**: ${user.user.tag}\n**Moderateur**: ${message.author.tag}\n**Action**: mute\n**Temps**: ${ms(ms(muteTime))}`)
    .setThumbnail(user.user.avatarURL())
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());

  client.channels.cache.get("757260841031565497").send(embed);
};

module.exports.help = {
  name: "mute",
  aliases: ["mute"],
  category: 'moderation',
  description: "Mute un utilisateur",
  cooldown: 3,
  usage: "<@user> <time>",
  isUserAdmin: true,
  permissions: true,
  args: true,
};
