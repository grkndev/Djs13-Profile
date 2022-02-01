const { MessageEmbed, ContextMenuInteraction, MessageButton, MessageActionRow } = require("discord.js");
const axios = require("axios");
module.exports = {
    name:"Kullanıcı Banner",
    type:"USER",
    /**
 * @param {ContextMenuInteraction} interaction
 */

    run: async (interaction) => {
        const target = await interaction.guild.members.fetch(interaction.targetId);       
        axios
       .get(`https://discord.com/api/users/${target.user.id}`,{
         headers: {
           Authorization: `Bot ${client.token}`,
         },
       })
       .then((res) =>{
         const {banner, accent_color} = res.data;
 
         if(banner){
           const extention = banner.startsWith("a_") ? ".gif" : ".png";
           const url = `https://cdn.discordapp.com/banners/${target.user.id}/${banner}${extention}?size=4096`;
           const but = new MessageButton().setLabel("Tarayıcıda Göster").setStyle("LINK").setURL(url)
           const embed = new MessageEmbed()
           .setColor(accent_color)
           .setAuthor({
             name:`${target.user.username} Kişisine Ait Banner`, iconURL:target.user.avatarURL({ dynamic: true, size: 1024 })
           })
           .setImage(url);
             interaction.reply({embeds:[embed],components:[new MessageActionRow().addComponents(but)]});
         }
         else{
           const embed2 = new MessageEmbed().setDescription('Kullanıcıda banner bulunmuyor').setColor(accent_color);
           interaction.reply({embeds:[embed2]})
         }
       })
     }
};