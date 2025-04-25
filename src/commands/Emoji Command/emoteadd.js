const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('emote-add')
        .setDescription('Add a new emote to the server')
        .addStringOption(option =>
            option.setName('emote')
                .setDescription('The emote URL')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name for the emote')
                .setRequired(true)),
    async execute(interaction) {
        const emojiUrl = interaction.options.getString('emoji');
        const emojiName = interaction.options.getString('name');

        // Ensure the URL is valid and points to an image
        if (!emojiUrl.startsWith('http')) {
            await interaction.reply({ content: 'Invalid URL. Please provide a valid image URL.', ephemeral: true });
            return;
        }

        try {
            const emoji = await interaction.guild.emojis.create({
                attachment: emojiUrl,
                name: emojiName,
            });

            const embed = new EmbedBuilder()
                .setTitle('Emote Added')
                .setDescription(`Successfully added ${emoji} with the name \`${emoji.name}\``)
                .setColor('#0099ff');

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'Failed to add emote. Ensure the URL points to a valid image file.', ephemeral: true });
        }
    },
};