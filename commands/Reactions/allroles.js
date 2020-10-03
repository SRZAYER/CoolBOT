const { MESSAGES } = require("../../util/constants");
const { MessageEmbed } = require('discord.js');

module.exports.run = (client, message, args) => {
 const hipoRole = message.guild.roles.cache.get("761621996018073630");
 const trouRole = message.guild.roles.cache.get("761622101869854742");
 const hipoEmoji = message.guild.emojis.cache.get("761624601267666955");
 const trouEmoji = message.guild.emojis.cache.get("761622656792789025");

const embed = new MessageEmbed()
  .setTitle("Rôles")
  .setDescription("Cliquez sur les réactions pour obtenir les rôle correspondants")
  .setColor("#dc778f")
  .addField(
   "Les rôles disponibles:",
   `
   ${hipoEmoji} - ${hipoRole.toString()}
   ${trouEmoji} - ${trouRole.toString()}
   `
  );
  message.channel.send(embed).then(async msg => {
   await msg.react(hipoEmoji);
   await msg.react(trouEmoji);
  })
};

module.exports.help = MESSAGES.COMMANDS.REACTIONS.ALLROLES;