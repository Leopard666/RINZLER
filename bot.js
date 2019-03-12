// ==================================================================

 // THIS BOT [RINZLER] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================

const client = new Discord.Client();
const Discord = require('discord.js'),
YTDL = require("ytdl-core"),
FFMPEG = require("ffmpeg"),
YouTube = require('simple-youtube-api'),
YTapi = new YouTube(process.env.ytapikey ? process.env.ytapikey : require("./config.json").ytapikey);
prefix = process.env.prefix ? process.env.prefix : require("./config.json").prefix,
let cooldown = new Set();
let cdseconds = 5;

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '1.2';
client.on('message', message => {
    if(message.content.startsWith(prefix + "RINZLER IS BACK ONLINE NOW")) {
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**🚀 HI, IM BACK [ONLINE] NOW & [UPDATED] 🚀** ')
	    .addField('``Bot Version :``' , `[ v1.2 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ] , true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ - ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()
    })
}
});

client.on('ready', function(){
client.channels.get("542905235241304065").send("-RINZLER IS BACK ONLINE NOW").then(m => m.delete(500));
		   
 });

// ==================================================================

function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}
var version = '1.2';
client.on('message', message => {
    if(message.content.startsWith(prefix + "stats")) {  
      if(!message.content.startsWith(prefix)) return;
        if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }    
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[RINZLER] STATS** ')
	    .addField('``Bot Version :``' , `[ v1.2 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[ <@480540559233122324> ]` , true)
            .addField('``Bot Uptime :``', [ timeCon(process.uptime()) ], true)
            .addField('``Bot Ping :``' , [ `${Date.now() - message.createdTimestamp}` + 'MS' ] , true)
            .addField('``Bot RAM Usage :``', `[ ${(process.memoryUsage().rss / 1048576).toFixed()}MB ]` , true)
            .addField('``TG - Servers :``', [ client.guilds.size ] , true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
	    .addField('``TG Server Region :``' , `[ Eu - Central ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[ ${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `👑 [ - ] 👑` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	          .setTimestamp()

    })
}
	
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
});

// ==================================================================

client.on('ready', function(){//npm i ms 
client.user.setStatus("dnd")
    var ms = 10000 ;
    var setGame = [`★ -Help | MusicBot ★`,`★ SERVERS : [${client.guilds.size}] ★`,`★ THE GRID™ ★`];
    var i = -1;
    var j = 0;
    setInterval(function (){
        if( i == -1 ){
            j = 1;
        }
        if( i == (setGame.length)-1 ){
            j = -1;
        }
        i = i+j;
        client.user.setGame(setGame[i],`https://www.twitch.tv/TheRealPredvkill`);
    }, ms);

});

// ==================================================================

client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

});


// ==================================================================

client.on('message', message => {
  if(message.content ===  prefix + 'leaveserver') {
	     message.channel.send('**:white_check_mark: ● Done - Now Im Gonna Go Back To My HQ , Cya ● **').then(m => m.delete(60000));
       if (message.author.id !== "480540559233122324") return;
  message.guild.leave();
	  
  }
})

// ==================================================================


client.on('guildCreate', guild => {
    var embed = new Discord.RichEmbed()
    .setThumbnail(client.user.avatarURL)
    .setColor('RANDOM')
    .setDescription(`:heart: **شكراً لك لإضافه البوت الى سيرفرك** :heart:`)
    .addField('**● Bot Version** :robot: :' , `**[ v1.2 ]**`)
    .addField('**● Bot CMD** 🔮 :' , `**Use -help For Bot Commands**`)
    .addField('**● Bot Owner** 👑 :' , `**[ <@480540559233122324> ]**`)
    .addField('**● Bot Name** 🔰 :' , `**[ ${client.user.tag} ]**`)
    .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
    .setTimestamp()
        guild.owner.send(embed)
  });

// ==================================================================
		
	client.on('message', async msg => {
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    const args = msg.content.split(' ');
    const searchString = args.slice(1).join(' ');
    const url = args[1] ? args[1] .replace(/<(.+)>/g, '$1') : '';
    const serverQueue = queue.get(msg.guild.id);
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
		
// ==================================================================
		

bot = new Discord.Client({
  messageCacheMaxSize: 10,
  messageCacheLifetime: 0,
  messageSweepInterval: 2600,
  disableEveryone: true,
  fetchAllMembers: false,
  disabledEvents: [
    'channelCreate', 'channelDelete', 'channelPinsUpdate', 'channelUpdate', 'clientUserGuildSettingsUpdate',
	'clientUserSettingsUpdates', 'emojiCreate', 'emojiDelete', 'guildBanAdd', 'guildBanRemove', 'guildCreate',
	'guildDelete', 'guildMemberAdd', 'guildMemberAvailable', 'guildMemberRemove', 'guildMembersChunck',
	'guildMemberSpeaking','guildMemberUpdate','guildUnavailable','guildUpdate','messageDelete', 'meesageDeleteBulk',
	'messageReactionAdd', 'messageReactionRemove', 'messageReactionRemoveAll', 'messageUpdate', 'presenceUpdate',
	'roleCreate', 'roleDelete', 'roleUpdate', 'typingStart', 'typingStop', 'userNoteUpdate', 'userUpdate', 'voiceStateUpdate'
  ],
  ws: { large_threshold: 250, compress: false }
});
console.log(process.pid);
bot.on(`ready`, () => {
	console.log(`${bot.user.username} I M READY TO FIGHT`)
});
process.on('unhandledRejection', console.error);
bot.login(process.env.token ? process.env.token : require("./config.json").token);

var servers = {};

function queueShift(server) {
  server.queueList.shift();
  server.queueNames.shift();
  server.queueAuthor.shift();
  server.queueImage.shift();
  server.queueLength.shift();
  server.queueMessages.shift();
  server.skipNum = 0;
  server.skipUsers = [];
}

function end_Connection(bot, server, connect, msg) {
  if (server.queueList.length > 1) {
    queueShift(server);
    play(connect, msg, bot);
  } else {
    queueShift(server);
    connect.disconnect();
    let endem = new Discord.RichEmbed()
      .setColor("0x36393E")
      .setDescription(`I have now stopped playing in ${connect.channel.name}`)
      .setAuthor(`${bot.user.username}`, bot.user.avatarURL);

    msg.channel.send({ embed: endem }).then(m => m.delete(25000));
  }
}

function play(connect, msg, bot) {
  let server = servers[msg.guild.id];

  //if (server.queueLength[0] !== 1800) {
  if (server.queueLength[0] !== "0:0:0") {
    let em = new Discord.RichEmbed()
      .setColor("0x36393E")
      .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
      .setThumbnail(server.queueImage[0])
      .setDescription(`I will now start playing **${server.queueNames[0]}** in ${connect.channel.name}\n\n**By:** ${server.queueAuthor[0]}\n**Link:** ${server.queueList[0]}\n**Length:** ${server.queueLength[0]}`)
      .setFooter(`Requester: ${server.queueMessages[0].author.tag}`, server.queueMessages[0].author.avatarURL);

    msg.channel.send({ embed: em }).then(m => m.delete(50000));
	server.dispatcher = msg.guild.voiceConnection.playStream(YTDL(server.queueList[0], { audioonly: true }), { passes: process.env.passes ? process.env.passes : require("./config.json").passes});
   // passes -- can be increased to reduce packetloss at the expense of upload bandwidth, 4-5 should be lossless at the expense of 4-5x upload

    server.dispatcher.on("end", (reason) => {
      end_Connection(bot, server, connect, msg);
    });
  } else {
    end_Connection(bot, server, connect, msg);
    let em = new Discord.RichEmbed()
      .setColor("0x36393E")
      .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
      .setThumbnail(server.queueImage[0])
      .setDescription(`I have skipped **${server.queueNames[0]}** in ${connect.channel.name}\n\n**Reason:** Livestream Error`);

    msg.channel.send({ embed: em }).then(m => m.delete(`10000`));
  }
}

function removedat(msg) {
  if (msg.channel.type === "dm") return;
  if (!msg.deletable) {
    return;
  }
  msg.delete();
}

function parseTime(hour, min, seconds) {

  var hourt = hour !== 0 ? `${hour}` : "";
  var mint = min !== 0 ? `${min}` : "";
  var secondst = seconds !== 0 ? `${seconds}` : "";

  hourt = hourt < 10 && hourt !== 0 ? `0${hourt}` : `${hourt}`;
  mint = mint < 10 && mint !== 0 ? `0${mint}` : `${mint}`;
  secondst = secondst < 10 && secondst !== 0 ? `0${secondst}` : `${secondst}`;

  return `${hourt==""?"":hourt + ":"}${mint==""?"":mint + ":"}${secondst==""?"":secondst}`;
}

function parseUpload(bot, server, link, message, playlist) {
  //  YTDL.getInfo(link).then(info => {
  YTapi.getVideo(link).then(info => {

      let length = parseTime(info.duration.hours, info.duration.minutes, info.duration.seconds);
      if (length == "0:0:0") {
        if (!playlist) {
          let em = new Discord.RichEmbed()
            .setColor("0x36393E")
            .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
            .setThumbnail(info.thumbnails.default.url)
            .setDescription(`I could not add **${info.title}** to play in ${message.member.voiceChannel.name}\n\n**Reason:** Livestream`)
            .setFooter(`Requester: ${message.author.tag}`, message.author.avatarURL);

          message.channel.send({ embed: em }).then(m => m.delete(5000));
          return;
        }
      }
      //console.log(info);
      server.queueList.push(link);
      server.queueNames.push(info.title);
      server.queueAuthor.push(info.channel.title);
      server.queueImage.push(info.thumbnails.default.url);
      server.queueLength.push(length);
      server.queueMessages.push(message);

      if (!message.guild.voiceConnection) {
        message.member.voiceChannel.join().then(function(connection) { play(connection, message, bot); });
      } else {
        if (!playlist) {
          let em = new Discord.RichEmbed()
            .setColor("0x36393E")
            .setAuthor(`${bot.user.username}`, bot.user.avatarURL)
            .setThumbnail(info.thumbnails.default.url)
            .setDescription(`I have added **${info.title}** to play in ${message.member.voiceChannel.name}\n\n**By:** ${info.channel.title}\n**Link:** ${link}\n**Length:** ${length} `)
            .setFooter(`Requester: ${message.author.tag}`, message.author.avatarURL);

          message.channel.send({ embed: em }).then(m => m.delete(10000));
        }
      }
    })
    .catch(console.log);
}


bot.on(`message`, (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(`${prefix}`)) return;
  if (message.channel.type == "dm") return;
  var args = message.content.substring(prefix.length).split(" ");

  switch (args[0].toLowerCase()) {
      break;
    case "play":
      if (!message.member.voiceChannel) {
        removedat(message);
        message.channel.send(":x: Oh I forgot.. You need to be in a voice channel!");
        break;
      }
      if (!message.member.voiceChannel.joinable || message.member.voiceChannel.full) {
        removedat(message);
        message.channel.send(":x: Looks like I cannot join that voice channel.");
        break;
      }
      if (!args[1]) {
        removedat(message);
        message.channel.send(":x: Umm where's the link?");
        break;
      }
      message.channel.send(`<@${message.author.id}>, I will now process that song name/link!`).then(m => m.delete(5000));
      if (!servers[message.guild.id]) {
        servers[message.guild.id] = { queueList: [], queueNames: [], queueAuthor: [], queueImage: [], queueLength: [], queueMessages: [], skipNum: 0, skipUsers: [] };
      }

      if (!args[1].match(/^https?:\/\/(www.youtube.com|youtube.com)/)) {
        // message.channel.send(":x: Are you sure thats a Youtube link?")
        var server = servers[message.guild.id];

        YTapi.searchVideos(args.slice(1).join(" "), 5).then(videos => {
          //  console.log(videos)
          let choice = new Discord.RichEmbed()
            .setColor("0x36393E")
            .setAuthor(`${bot.user.username}`)
            .setDescription(`Please provide a value to select one of the search results ranging from 1-5`)
            .setFooter(`Cancelling in 10 seconds`, bot.user.avatarURL)
            .setTimestamp()
            .addField(`**1.** ${videos[0].title}`, `[${videos[0].channel.title}](https://www.youtube.com/channel/${videos[0].channel.id}) `)
            .addField(`**2.** ${videos[1].title}`, `[${videos[1].channel.title}](https://www.youtube.com/channel/${videos[1].channel.id}) `)
            .addField(`**3.** ${videos[2].title}`, `[${videos[2].channel.title}](https://www.youtube.com/channel/${videos[2].channel.id}) `)
            .addField(`**4.** ${videos[3].title}`, `[${videos[3].channel.title}](https://www.youtube.com/channel/${videos[3].channel.id}) `)
            .addField(`**5.** ${videos[4].title}`, `[${videos[4].channel.title}](https://www.youtube.com/channel/${videos[4].channel.id}) `);

          message.channel.send({ embed: choice }).then(m =>m.delete(10000));


          message.channel.awaitMessages(m => m.content > 0 && m.content < 6, {
              max: 1,
              max: 1,
              time: 10000,
              errors: ['time']
            })
            .then(collected => {
              collected.first().delete();
              removedat(message);

              //  message.channel.send(`Okay I'll now add **${videos[collected.first().content-1].title}**`).then(m => m.delete(5000))
              parseUpload(bot, server, `https://www.youtube.com/watch?v=${videos[collected.first() - 1].id}`, message);
            })
            .catch(err => {
              console.log(err);
              //console.log(collected.first().author.id);
              message.channel.send(`** Canceled **`).then(m => m.delete(5000));
              removedat(message);
            });

        });
      } else {
        if (args[1].match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
          YTapi.getPlaylist(args[1]).then(list => {
            message.channel.send(`⏱ Parsing Playlist: **${list.title}**\nPlease give some time. This also includes the server's parsing power and the ammount of videos provided.`);
            list.getVideos().then(videos => {
              for (const video of Object.values(videos)) {
                YTapi.getVideoByID(video.id).then(vid => {
                  parseUpload(bot, servers[message.guild.id], `https://www.youtube.com/watch?v=${vid.id}`, message, true);
                });

              }
              message.channel.send(`✅ Playlist: **${list.title}** [${videos.length > 50 ? '50+' : videos.length} videos] has been added to the queue!`);
            });
          });
        } else {
          removedat(message);
          parseUpload(bot, servers[message.guild.id], args[1], message);
        }
      }

      break;
    case "skip":
      if (!message.member.voiceChannel) {
        removedat(message);
        message.channel.send(":x: Oh I forgot.. You need to be in a voice channel!");
        break;
      }
      removedat(message);
      var server = servers[message.guild.id];
      if (!server) return;
      if (!message.guild.voiceConnection) return;
      if (!message.member.voiceChannel) {
        removedat(message);
        message.channel.send(":x: Oh I forgot.. You need to be in a voice channel!");
        break;
      }
      if (server.dispatcher) server.dispatcher.end();
      break;
    case "stop":
      if (!message.member.voiceChannel) {
        removedat(message);
        message.channel.send(":x: Oh I forgot.. You need to be in a voice channel!");
        break;
      }
      removedat(message);
      var server = servers[message.guild.id];
      if (!server) return;
      server.queueList = [];
      server.queueNames = [];
      server.queueAuthor = [];
      server.queueImage = [];
      server.queueLength = [];
      server.queueMessages = [];
      server.skipNum = 0;
      server.skipUsers = [];
      if (message.guild.voiceConnection) message.guild.voiceConnection.disconnect();
      break;
    case "queue":
      removedat(message);
      var server = servers[message.guild.id];
      if (!server) {
        return;
      } else if (server.queueNames.length == 0) {
        return;
      }

      var queue = ` **Queue for ${message.guild.name}** [ ${server.queueNames.length} song${server.queueNames.length>1?"s":""} total ]\n\n `;
      var queueLength = server.queueNames.length > 5 ? 5 : server.queueNames.length;
      for (var i = 0; i < queueLength; i++) {
        var temp = ` ${i + 1}: ${i === 0 ? "*(Current Song)*":""} ${server.queueNames[i].includes("*")?server.queueNames[i].replace('*', ''):server.queueNames[i]}\n **Requester:** ${server.queueMessages[i].author.tag }\n\n`;
        queue = queue + temp;
      }
      if (queueLength == 5 && server.queueNames.length > 5) {
        var addition = `***+ ${server.queueNames.length-5} more songs***`;
        queue = queue + addition;
      }
      let queue_embed = new Discord.RichEmbed()
        .setColor("0x36393E")
        .setAuthor(`${bot.user.username }`)
        .setDescription(queue)
        .setThumbnail(message.guild.iconURL !== null ? message.guild.iconURL : "https://maxcdn.icons8.com/Share/icon/Logos//discord_logo1600.png")
		.setFooter(`Server Queue`, bot.user.avatarURL);
		
      message.channel.send({ embed: queue_embed }).then(m => m.delete(55000));
      break;
    case "np":
      removedat(message);
      var server = servers[message.guild.id];
      if (!server) { return message.channel.send(`:x: looks like nothing is playing right now...`); }
      if (!server.queueList[0]) { return message.channel.send(`:x: looks like nothing is playing right now...`); }

      let npem = new Discord.RichEmbed()
        .setColor("0x36393E")
        .setAuthor(`${bot.user.username }`)
        .setThumbnail(server.queueImage[0])
        .setDescription(`**Now Playing** \n\n **Name: ** ${server.queueNames[0]}\n **By: ** ${server.queueAuthor[0]}\n **Link: ** ${server.queueList[0]}\n **Length:** ${server.queueLength[0]}\n **Requester: ** ${server.queueMessages[0].author.tag}`)
		.setFooter(`Now Playing`, bot.user.avatarURL);
		
      message.channel.send({ embed: npem }).then(m => m.delete(50000));
      break;
  }
  //message.delete();
});
	
// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }      
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setThumbnail(client.user.avatarURL)
  .addField('**● BOT - VERSION** :robot: :' , `**[ v1.2 ]**`)
  .addField('**● BOT - OWNER** 👑 :' , `**[ <@480540559233122324> ]**`)
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
:notes:  [❖═══ ● برفكس البوت ( - ) & أوامر الميوزك ● ════❖] :notes: 
  
❖═════════════════════════════════════❖  

● :headphones: : ${prefix}play :arrow_right: لتشغيل اغنية ●

● :headphones: : ${prefix}skip :arrow_right: للإنتقاال الى الاغنيه التاليه اذا كان هناك بقائمة الانتظار ●

● :headphones: : ${prefix}queue :arrow_right: اظهار قائمة التشغيل ●

● :headphones: : ${prefix}volume :arrow_right: لتغير حجم الصوت ●

● :headphones: : ${prefix}nowplaying :arrow_right: اظهار الاغنية اللي انت مشغلها حاليا ●

● :headphones: : ${prefix}resume :arrow_right: لاعادت تشغيل الاغنية الموجودة ●

● :headphones: : ${prefix}stop :arrow_right: الخروج من رومك الصوتي ●

● :headphones: : ${prefix}pause :arrow_right: ايقاف الاغنية مؤقتا ●


❖═════════════════════════════════════❖

:tools:   [❖═══ ● 🔰 [ RINZLER STATS ] 🔰 ● ═══❖] :tools:  

● :rocket: : ${prefix}Rinzler :arrow_right: STATS BOT ●


❖═════════════════════════════════════❖

:heavy_plus_sign: [❖═════ ● Other Bot Commands ● ═══════❖] :heavy_plus_sign:   

● :books: : سيرفر دعم :arrow_right: https://discord.gg/PzbDJwx ●

:hearts: [❖══════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts:**`)
   
.setFooter('❖══ ● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ● ══❖')
.setTimestamp()   
   
message.author.sendEmbed(embed)
   
    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	   
  }
		  
});

// ==================================================================


client.on('message', message => {
    if(message.content === prefix + "restart") {
	     if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
          client.channels.get("542905235241304065").send({
	     embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('b58900')
	    .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [RINZLER] IS REBOOTING NOW BY THE OWNERS !**')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		 });
	    console.log(`${message.author.tag} [ ${message.author.id} ] Rinzler Has Restarted Successfully.`);
            console.log(`Rinzler Is Restarting Now..`);
            setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
            },3000);

}
});

// ==================================================================


 client.on('message', message => {
    if(message.content === prefix + "shutdown") {
	    if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));    
            client.channels.get("542905235241304065").send({
	    embed: new Discord.RichEmbed()
	    .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('dc322f')
	    .setFooter('● 🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰 ●')
	    .setTimestamp()
            .setTitle('**● :robot: [RINZLER] IS SHUTDOWN NOW BY THE OWNERS !**')
	    .setDescription(`**⚠️ PLEASE WAIT TILL EVERYTHING SETUP ⚠️**`)
		    });
            console.log(`${message.author.tag} [ ${message.author.id} ] Rinzler Has ShutDown Successfully.`);
            setTimeout(() => {
            client.destroy();
            },3000);
}
});    

// ==================================================================


client.on('message', message => {
  if (message.content === ('-Rinzler')) {
  if(!message.content.startsWith(prefix)) return;
  if(cooldown.has(message.author.id)){
    message.delete();
    return message.reply("**:no_entry: You have to wait [5] seconds between commands :no_entry:**")
  }
  //if(!message.member.hasPermission("ADMINISTRATOR")){
    cooldown.add(message.author.id);
 // }        
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
	  .addField('**Bot Version** :robot: :' , `[ v1.2 ]`, true)
          .addField('**Bot Ping** 🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('**Servers** 📚 :', [client.guilds.size], true)
          .addField('**Channels** 📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users** 🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name** 🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner** 👑 :' , `[ <@480540559233122324> ]` , true)
	  .setFooter('🔰 [ THE GRID™ - OFFICIAL - 2019© ] 🔰')
          .setTimestamp()   
  
  })
}

    setTimeout(() => {
    cooldown.delete(message.author.id)
  }, cdseconds * 1000)
	
	
});

// ==================================================================

client.login(process.env.BOT_TOKEN);

// ==================================================================

 // THIS BOT [RINZLER] CREATED BY [THE RARE RANGER] - 2019© //
////////////// 🔰 THE DAMNATION™ & THE GRID™ 🔰 //////////////

// ==================================================================
