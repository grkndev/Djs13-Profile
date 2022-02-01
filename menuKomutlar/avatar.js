const { MessageEmbed, Client, ContextMenuInteraction,MessageActionRow,MessageButton } = require("discord.js");
module.exports = {
    name:"Avatar",
    type:"USER",

    /**
 * @param {Client} client
 * @param {ContextMenuInteraction} interaction
 */

    run: async (interaction) => {
        const target = await interaction.guild.members.fetch(interaction.targetId);
     const embed = new MessageEmbed()
       .setColor("AQUA")
      .setAuthor({name: target.user.tag, iconURL: target.user.avatarURL({dynamic:true})})
      if(target.user.avatarURL()){
        embed.setImage(target.user.avatarURL({dynamic:true, size:1024}))
     }else{
        embed.description(`${target} adlı kullanıcının avatarı yok.`)
     }
     interaction.reply({embeds:[embed],components:[new MessageActionRow().addComponents(new MessageButton().setLabel("Tarayıcıda Göster").setStyle("LINK").setURL(target.user.avatarURL({dynamic:true, size:1024})))]});
      
}
};