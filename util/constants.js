const MESSAGES = {
 COMMANDS: {
  ADMIN: {
   CONFIG: {
    name: "config",
    aliases: ["config"],
    category: 'admin',
    description: "Modifier la base de donnée",
    cooldown: 3,
    usage: "<key> <value>",
    isUserAdmin: false,
    permissions: true,
    args: true,
   },
   EVAL: {
    name: "eval",
    aliases: ["eval"],
    category: 'admin',
    description: "Renvoie un code javascript testé",
    cooldown: 3,
    usage: "<code_to_test>",
    isUserAdmin: false,
    permissions: true,
    args: true,
   }
  },
  MISC: {
   SAY: {
    name: "say",
    aliases: ["repeat", "rep"],
    category: 'misc',
    description: "Répéte le message",
    cooldown: 10,
    usage: "<votre_message>",
    isUserAdmin: false,
    permissions: false,
    args: true,
   },

   PING: {
    name: "ping",
    aliases: ["ping"],
    category: 'misc',
    description: "Pong !",
    cooldown: 3,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false,
   },
   PETITOURS: {
    name: "petitours",
    aliases: ["pt", "petit"],
    category: 'misc',
    description: "Brun !",
    cooldown: 60,
    usage: "",
    isUserAdmin: false,
    permissions: false,
    args: false,
   },
   HELP: {
    name: "help",
    aliases: ['help'],
    category: 'misc',
    description: "Help sur une commande ou plusieurs !",
    cooldown: 5,
    usage: "<command_name>",
    isUserAdmin: false,
    permissions: false,
    args: false,
   },
   WEJDENE: {
    name: "wejdene",
    aliases: ['anissa'],
    category: 'misc',
    description: "WEJDENE",
    cooldown: 600,
    usage: "<command_name>",
    isUserAdmin: false,
    permissions: false,
    args: false,
   },
  },
  MODERATION: {
   BAN:{
    name: "ban",
    aliases: ["ban"],
    category: 'moderation',
    description: "Ban un utilisateur",
    cooldown: 3,
    usage: "<@user> <raison>",
    isUserAdmin: true,
    permissions: true,
    args: true,
   },
   CLEAR: {
    name: "clear",
    aliases: ["clear"],
    category: 'moderation',
    description: "Clear un nombre de message spécifié",
    cooldown: 3,
    usage: "<nbr_message>",
    isUserAdmin: false,
    permissions: true,
    args: true,
   },
   KICK: {
    name: "kick",
    aliases: ['kick'],
    category: 'moderation',
    description: "Kick un utilisateur",
    cooldown: 3,
    usage: '<@user> <raison>',
    isUserAdmin: true,
    permissions: true,
    args: true
   },
   MUTE: {
    name: "mute",
    aliases: ["mute"],
    category: 'moderation',
    description: "Mute un utilisateur",
    cooldown: 3,
    usage: "<@user> <time>",
    isUserAdmin: true,
    permissions: true,
    args: true,
   },
   UNBAN: {
    name: "unban",
    aliases: ["unban"],
    category: 'moderation',
    description: "Unban un utilisateur",
    cooldown: 3,
    usage: "<user_id>",
    isUserAdmin: false,
    permissions: true,
    args: true,
   },
   UNMUTE: {
    name: "unmute",
    aliases: ["unmute"],
    category: 'moderation',
    description: "Unmute un utilisateur",
    cooldown: 3,
    usage: "<@user>",
    isUserAdmin: true,
    permissions: true,
    args: true,
   },
   USERCLEAR: {
    name: "userclear",
    aliases: ["userclear"],
    category: 'moderation',
    description: "Clear un nombre de message d'un utilisateur",
    cooldown: 3,
    usage: "<@user> <nbr_message>",
    isUserAdmin: true,
    permissions: true,
    args: true,
   },
  },
  REACTIONS: {
   ALLROLES: {
    name: "allroles",
    aliases: ["allroles"],
    category: 'reactions',
    description: "Renvoie un message avec des reactions !",
    cooldown: 3,
    usage: "",
    isUserAdmin: false,
    permissions: true,
    args: false,
   }
  }
 }
}

exports.MESSAGES = MESSAGES;