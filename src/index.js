const { Client, GatewayIntentBits, EmbedBuilder, PermissionsBitField, Permissions, MessageManager, Embed, Collection, Presence, ActivityType } = require(`discord.js`);
const fs = require('fs');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildPresences] }); 

client.commands = new Collection();

require('dotenv').config();

const functions = fs.readdirSync("./src/functions").filter(file => file.endsWith(".js"));
const eventFiles = fs.readdirSync("./src/events").filter(file => file.endsWith(".js"));
const commandFolders = fs.readdirSync("./src/commands");

(async () => {
    for (file of functions) {
        require(`./functions/${file}`)(client);
    }
    client.handleEvents(eventFiles, "./src/events");
    client.handleCommands(commandFolders, "./src/commands");


    client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
        client.user.setPresence({
          status: 'idle',
      });
      client.user.setActivity({
              name: 'Getting Made',
              type: ActivityType.Custom,
           //   url: 'https://www.twitch.tv/discord'
          });
});
    client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const mentionsEveryone = message.mentions.everyone;
  const mentionsHere = message.content.includes("@here");
  const isReplyMention = message.type === "REPLY";

  if (mentionsEveryone || mentionsHere || isReplyMention) return;

  if (message.mentions.has(client.user.id)) {
    const embed = new EmbedBuilder()
      .setTitle(`Hello, I'm Clumsic`)
      .setDescription(`If you like Clumsic, Consider voting or inviting it to your server! Thank you for using Clumsic, we hopeyou enjoy it, as we always look forward to improve the bot.
        
        Bot Stats
        Total Users: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}
        Total Servers: ${client.guilds.cache.size}
        Ping: ${client.ws.ping}ms
        
        Server Stats
        Total Memebers: ${message.guild.memberCount}
        Total Channels: ${message.guild.channels.cache.size}
        Bots: ${message.guild.members.cache.filter(member => member.user.bot).size}
        
        User Stats
        Username: ${message.author.username}
        Created At: <t:${message.author.createdAt}:R>
        Joined At: <t:${message.member.joinedAt}:R>
         `)
      .setColor(0xFFFFFF)
      .setFooter({ text: "Thnaks For Using Clumsic" })

    message.reply({ embeds: [embed] });
  }
});
    client.login(process.env.token)
})();

