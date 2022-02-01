const { MessageEmbed, Client, ContextMenuInteraction } = require("discord.js");
module.exports = {
    name:"Kullanıcı Bilgi",
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
        embed.setThumbnail(target.user.avatarURL({dynamic:true}))
     }
     embed
     .addField(`Kullanıcı ID`,`${target.user.id}`,false)
     .addField(`Roller`,`${target.roles.cache.map(r => r).join(" ").replace("@everyone","") || "Yok"}`,false)

     .addField(`Katılım Tarihi (Sunucu)`, `<t:${parseInt(target.joinedTimestamp / 1000)}:R>`, true)
     .addField(`Katılım Tarihi (Discord)`, `<t:${parseInt(target.user.createdTimestamp / 1000)}:R>`, true)
     interaction.reply({embeds:[embed]});
      
}
};