module.exports = (client, messageReaction, user) => {
 const message =  messageReaction.message;
 const member = message.guild.members.cache.get(user.id);
 const emoji = messageReaction.emoji.name;
 const channel = message.guild.channels.cache.find(c => c.id === message.channel.id);
 const hipoRole = message.guild.roles.cache.get("761621996018073630");
 const trouRole = message.guild.roles.cache.get("761622101869854742");
 if (member.user.bot) return;

 if(["hipo", "trou"].includes(emoji) && message.channel.id === channel.id) {
  switch (emoji) {
   case "hipo":
     member.roles.remove(hipoRole);
     message.channel.send(`Le rôle ${hipoRole.name} a été supprimé avec succès !`);
     break;
    case "trou":
     member.roles.remove(trouRole);
     message.channel.send(`Le rôle ${trouRole.name} a été supprimé avec succès !`);
     break;

  }
 }
};