const { Permissions, MessageEmbed } = require("discord.js");
const {admin} = require("../ayarlar.json");
module.exports = {
    name:"Yardım",
    description: 'Yardım Menüsü',
    type:'CHAT_INPUT',
    options:[],
    run: async (client, interaction) => {

        
          const embed = new MessageEmbed()
            .setAuthor({
                name: "Gweep Creative Komutlar",
                iconURL: client.user.avatarURL({ dynamic: true, size: 1024 })
            })
            .setThumbnail(client.user.avatarURL({ dynamic: true, size: 1024 }))
            .addField("Kullanıcı Avatar", "`/avatar <kullanıcı>`", false)
            .addField("Kullanıcı Banner", "`/banner <kullanıcı>`", false)
            .addField("Kullanıcı Bilgi", "`/kullanıcıbilgi <kullanıcı>`", false)
            .addField("Sunucu Hakkında Bilgi", "`/sunucubilgi`", false)
            .setColor("#2ACAEA");

        interaction.reply({ embeds: [embed] });
           
  }
};