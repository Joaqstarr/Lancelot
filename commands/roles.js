const { SlashCommandBuilder, ActionRowBuilder, SelectMenuBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roles')
		.setDescription('roles dummy description')
        .addStringOption(option =>
            option.setName('input')
                .setDescription('input dummy description')
                .addChoices(
                    { name: 'assign', value: 'assign' },)
                .setRequired(true)
        ),
        
	async execute(interaction) {
        const input = interaction.options.getString('input') ?? 'No input provided';
        if(input === "assign"){
            this.Assign(interaction);
            return;
        }

		await interaction.reply("Please select an input");
		
	},

    async Assign(interaction){
        //MENU \/ \/ \/ \/ \/ 
        const row = new ActionRowBuilder()
			.addComponents(
				new SelectMenuBuilder()
					.setCustomId('select')
					.setPlaceholder('Nothing selected')
					.addOptions(
						{
							label: 'role dummy 1',
							description: 'role description 1',
							value: 'first_option',
						},
						{
							label: 'role dummy 2',
							description: 'role description 2',
							value: 'second_option',
						},
					),
			);


		await interaction.reply({ content: 'Please select a role', components: [row] });
    }
};