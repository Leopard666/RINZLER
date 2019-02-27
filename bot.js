// THIS BOT [RINZLER] CREATED BY THE RARER RARE RANGER - 2018 - 2019©
// ==================================================================

const Discord = require('discord.js');
const Util = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const ytdl = require('ytdl-core');
const fs = require('fs');
const client = new Discord.Client({disableEveryone: true});
const prefix = "-";

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
            .setTitle('**🚀 [RINZLER] IS BACK ONLINE NOW & [UPDATED] 🚀** ')
	    .addField('``Bot Version :``' , `[ v1.2 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[<@480540559233122324>]` , true)
            .addField('``Bot Uptime :``', [timeCon(process.uptime())], true)
            .addField('``Bot Ping :``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``Bot RAM Usage :``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``TG - Servers :``', [client.guilds.size], true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `-` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('❖══ ● 🔰 [ THE GRID™ - OFFICIAL ] 🔰 ● ══❖')
	          .setTimestamp()
	          .setDescription(` **● Attention [The Grid™] Users 
[RINZLER] Has Returned From The Darkness Aka Back Online
It Must Be Your Lucky Day ! ●** `)

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
 if(!message.channel.guild) return message.reply('**:x: This Command Only For Servers :x:**').then(m => m.delete(60000));
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setAuthor(client.user.username,client.user.avatarURL)
            .setThumbnail(client.user.avatarURL)
            .setColor('859900')
            .setTitle('**[RINZLER] STATS** ')
	    .addField('``Bot Version :``' , `[ v1.2 ]` , true)
            .addField('``👑 Bot Owner 👑 :``' , `[<@480540559233122324>]` , true)
            .addField('``Bot Uptime :``', [timeCon(process.uptime())], true)
            .addField('``Bot Ping :``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
            .addField('``Bot RAM Usage :``', `[${(process.memoryUsage().rss / 1048576).toFixed()}MB]`, true)
            .addField('``TG - Servers :``', [client.guilds.size], true)
            .addField('``TG - Channels :``' , `[ ${client.channels.size} ]` , true)
            .addField('``TG - Users :``' ,`[ ${client.users.size} ]` , true)
            .addField('``Bot Name :``' , `[ ${client.user.tag} ]` , true)
            .addField('``Bot ID :``' , `[ ${client.user.id} ]` , true)
            .addField('``Bot Node :``' , `[${process.version} ]` , true)
                  .addField('``Bot Prefix :``' , `-` , true)
                  .addField('``Bot Language :``' , `[ Java Script ]` , true)
                  .setFooter('❖══ ● 🔰 [ THE GRID™ - OFFICIAL ] 🔰 ● ══❖')
	          .setTimestamp()

    })
}
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

client.on('message', async msg =>{
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    let args = msg.content.split(' ');

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

    if(command === `avatar`){
	if(msg.channel.type === 'dm') return msg.channel.send("** :x: Nope ! U Can't Use Avatar Command in DMs :x:**")
        let mentions = msg.mentions.members.first()
        if(!mentions) {
          let sicon = msg.author.avatarURL
          let embed = new Discord.RichEmbed()
          .setImage(msg.author.avatarURL)
          .setColor("#5074b3")
          msg.channel.send({embed})
        } else {
          let sicon = mentions.user.avatarURL
          let embed = new Discord.RichEmbed()
          .setColor("#5074b3")
          .setImage(sicon)
          msg.channel.send({embed})
        }
    };
});

client.on('message', async msg => { 
	if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
    
    const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
    
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);

	let command = msg.content.toLowerCase().split(" ")[0];
	command = command.slice(prefix.length)

	if (command === `play`) {
		const voiceChannel = msg.member.voiceChannel;
        
        if (!voiceChannel) return msg.channel.send("**:x: I Can't Find You in Any voice channel ! :x:**");
        
        const permissions = voiceChannel.permissionsFor(msg.client.user);
        
        if (!permissions.has('CONNECT')) {

			return msg.channel.send("**:x: I Don't Have Enough Permissions To Join In Your Voice Channel ! :x:**");
        }
        
		if (!permissions.has('SPEAK')) {

			return msg.channel.send("**:x: I Don't Have Enough Permissions To Speak In Your Voice Channel ! :x:**");
		}

		if (!permissions.has('EMBED_LINKS')) {

			return msg.channel.send("** :x: I Don't Have Enough Permissions To Insert A URLs ! :x:**")
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {

			const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            

			for (const video of Object.values(videos)) {
                
                const video2 = await youtube.getVideoByID(video.id); 
                await handleVideo(video2, msg, voiceChannel, true); 
            }
			return msg.channel.send(`**${playlist.title}**,** Just Added To The Queue :white_check_mark: !**`);
		} else {

			try {

                var video = await youtube.getVideo(url);
                
			} catch (error) {
				try {

					var videos = await youtube.searchVideos(searchString, 5);
					let index = 0;
                    const embed1 = new Discord.RichEmbed()
                    .setTitle("**:mag_right: Youtube Searching Results :notes: :**")
                    .setDescription(`
                    ${videos.map(video2 => `${++index}. **${video2.title}**`).join('\n')}`)
                    
					.setColor("#f7abab")
					msg.channel.sendEmbed(embed1).then(message =>{message.delete(20000)})
					
					
					try {

						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 15000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('**Sorry , No one Respone A Number ! :x:**');
                    }
                    
					const videoIndex = parseInt(response.first().content);
                    var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    
				} catch (err) {

					console.error(err);
					return msg.channel.send(":x: ** I Didn't Find Any Results ! Please Try Again :x: **");
				}
			}

            return handleVideo(video, msg, voiceChannel);
            
        }
        
	    } else if (command === `skip`) {
 
        if (!msg.member.voiceChannel) return msg.channel.send("** :x: You Must Be In A Voice Channel To Run The Music Commands ! :x:**");
        if (!serverQueue) return msg.channel.send("** :x: There Is No Queue To Skip The Music ! :x: **");
 
        serverQueue.connection.dispatcher.end('**Ok, skipped ! :track_next:**');
        return undefined;
        
	} else if (command === `stop`) {

		if (!msg.member.voiceChannel) return msg.channel.send("** :x: You Must Be In A Voice Channel To Run The Music Commands ! :x:**");
        if (!serverQueue) return msg.channel.send("** :x: There Is No Queue To Stop The Music ! :x: **");
        
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end(':x: **Music Has Been Stopped & Disconnected From Your Voice Channel !** :x: ');
        return undefined;
        
	} else if (command === `volume`) {

		if (!msg.member.voiceChannel) return msg.channel.send("** :x: You Must Be In A Voice Channel To Run The Music Commands ! :x:**");
		if (!serverQueue) return msg.channel.send(':x: **You Only Can Use This Command While Music Is Playing ! :x: **');
        if (!args[1]) return msg.channel.send(`:loud_sound: **The Rinzler Bot Volume is :** **${serverQueue.volume}** :loud_sound:`);
        
		serverQueue.volume = args[1];
        serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 50);
        
        return msg.channel.send(`:loud_sound: **Volume Now is** **:** **${args[1]}**`);

	} else if (command === `nowplaying`) {

		if (!serverQueue) return msg.channel.send('** :x: There Is No Queue For Music Playing ! :x:**');
		const embedNP = new Discord.RichEmbed()
	    .setDescription(`Now playing **${serverQueue.songs[0].title}**`)
        return msg.channel.sendEmbed(embedNP);
        
	} else if (command === `queue`) {
		
		if (!serverQueue) return msg.channel.send('** :x: There Is No Queue ! :x:**');
		let index = 0;
//	//	//
		const embedqu = new Discord.RichEmbed()
        .setTitle("**The Queue Songs :**")
        .setDescription(`
        ${serverQueue.songs.map(song => `${++index}. **${song.title}**`).join('\n')}
**Now playing :** **${serverQueue.songs[0].title}**`)
        .setColor("#f7abab")
		return msg.channel.sendEmbed(embedqu);
	} else if (command === `pause`) {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('**Paused :pause_button:**');
		}
		return msg.channel.send('**:x: There is no Queue To Pause ! :x:**');
	} else if (command === "resume") {

		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
            return msg.channel.send('**:play_pause: Resuming :thumbsup:**');
            
		}
		return msg.channel.send('**:x: Queue is Empty ! :x:**');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	

	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`**I Could Not Join The Voice Channel: ${error} !**`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`**Can't Join This Channel : ${error} !**`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`:notes: **${song.title}**, **Just Added To The Queue ! :thumbsup: **`);
	} 
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === '**:x: Stream Is Not Generating Quickly Enough. :x:**') console.log('Song ended.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`**:notes: ▌ ${song.title} - Is Now Playing ▌ :notes:**`);
}

// ==================================================================

client.on('message', message => {
  if (message.author.bot) return;
   if (message.content === prefix + "help") {
    
   message.channel.send('**:white_check_mark: ● Done , تــــم ارســالك في الخــاص ● :e_mail:**').then(m => m.delete(60000));
   const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username,message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`**
:notes:  [❖═════ ● برفكس البوت (!) & أوامر الميوزك ● ═══════❖] :notes: 
  
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

:tools:   [❖═════ ● Rinzler Bot Commands ● ═══════❖] :tools:  

● :rocket: : ${prefix}Rinzler :arrow_right: STATS BOT ●


❖═════════════════════════════════════❖

:heavy_plus_sign: [❖═════ ● Other Bot Commands ● ═══════❖] :heavy_plus_sign:   

● :frame_photo: : ${prefix}avatar :arrow_right: افاتار الشخص المطلوب ●

● :books: : سيرفر دعم :arrow_right: https://discord.gg/PzbDJwx ●

:hearts: [❖═════ ● المزيد قريبا ان شاء الله! ● ═══════❖] :hearts: 

:zap: ─═══ {✯ ● Bot Made By ŦĐŇ™漫Ranger√ ⚡#4474 ● ✯} ═══─ :zap:**`)
.setAuthor(message.guild.name, message.guild.iconURL)   
.setFooter('❖══ ● 🔰 [ THE GRID™ - OFFICIAL ] 🔰 ● ══❖')
.setTimestamp()   
message.author.sendEmbed(embed)
  }
});

// ==================================================================


client.on('message',async message => {
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "480540559233122324") return message.reply('**❎ | You Aren\'t The Bot Owner !**').then(m => m.delete(60000));
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Rinzler Restarting..**').then(m => m.delete(60000));
            },1000);
            setTimeout(() => {
               msg.edit('**:arrows_counterclockwise: Rinzler Restarting...**').then(m => m.delete(60000));
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] Rinzler Has Restarted Successfully.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login(process.env.BOT_TOKEN);
        },3000);
    }
})

// ==================================================================

client.on('message', message => {
  if (message.content === ('-Rinzler')) {
  message.channel.send({
      embed: new Discord.RichEmbed()
          .setAuthor(client.user.username,client.user.avatarURL)
          .setThumbnail(client.user.avatarURL)
          .setColor('RANDOM')
	  .setAuthor(message.guild.name, message.guild.iconURL)
          .addField('**Bot Ping**🚀 :' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
          .addField('**Servers**📚 :', [client.guilds.size], true)
          .addField('**Channels**📝 :' , `[ ${client.channels.size} ]` , true)
          .addField('**Users**🔮 :' ,`[ ${client.users.size} ]` , true)
          .addField('**Bot Name**🔰 :' , `[ ${client.user.tag} ]` , true)
          .addField('**Bot Owner**👑 :' , `[<@480540559233122324>]` , true)
          .setFooter(client.author.username, client.author.avatarURL)
	  .setFooter('❖══ ● 🔰 [ THE GRID™ - OFFICIAL ] 🔰 ● ══❖')
          .setTimestamp()
  })
}
});

// ==================================================================

client.login(process.env.BOT_TOKEN);
