const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emote-list')
        .setDescription('List all emotes in the server'),
    async execute(interaction) {
        const emojis = interaction.guild.emojis.cache.map(emoji => {
            return `${emoji} - \`<:${emoji.name}:${emoji.id}>\``;
        }).join('\n');

        const embed = new EmbedBuilder()
            .setTitle('emote List')
            .setDescription(emojis || 'No emotes found')
            .setColor('#0099ff');

        await interaction.reply({ embeds: [embed] });
    },
};