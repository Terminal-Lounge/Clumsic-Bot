const {SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('API Ping of the Bot'),
    async execute(interaction) {
        
        try {
            let days = Math.floor(interaction.client.uptime / 86400000);
            let hours = Math.floor(interaction.client.uptime / 3600000) % 24;
            let minutes = Math.floor(interaction.client.uptime / 60000) % 60;
            let seconds = Math.floor(interaction.client.uptime / 1000) % 60;
            let webLatency = new Date() - interaction.createdAt;
            let apiLatency = interaction.client.ws.ping;
            let totalLatency = webLatency + apiLatency;
            let emLatency = {
              Green: '🟢',
              Yellow: '🟡',
              Red: '🔴',
            };

            const embed = new EmbedBuilder()
            .setColor(
                totalLatency < 200
                  ? '#008000' // Green
                  : totalLatency < 500
                  ? '#FFFF00' // Yellow
                  : '#FF0000' // Red
              )
              .setTitle('Latency And API Ping')
              .addFields(
                {
                  name: '📡 Websocket Latency',
                  value: `\`\`\`yml\n${
                    webLatency <= 200
                      ? emLatency.Green
                      : webLatency <= 400
                      ? emLatency.Yellow
                      : emLatency.Red
                  } ${webLatency}ms\`\`\``,
                  inline: true,
                },
                {
                  name: '🛰 API Latency',
                  value: `\`\`\`yml\n${
                    apiLatency <= 200
                      ? emLatency.Green
                      : apiLatency <= 400
                      ? emLatency.Yellow
                      : emLatency.Red
                  } ${apiLatency}ms\`\`\``,
                  inline: true,
                },
                {
                  name: '⏲ Uptime',
                  value: `\`\`\`m\n${days} Days : ${hours} Hrs : ${minutes} Mins : ${seconds} Secs\`\`\``,
                  inline: false,
                }
              );

              const notbutton = new ButtonBuilder()
              .setCustomId('not')
              .setLabel('❤')
              .setStyle(ButtonStyle.Secondary)
              .setDisabled(true);

              const row = new ActionRowBuilder()
              .addComponents(notbutton);
      
            interaction.reply({ embeds: [embed], components: [row] });


    }

    

    catch (error) {
        console.error(error); // Log the error to the console
        interaction.reply('An error occurred while processing the command.'); // Send a generic error message to the user
      }}

}