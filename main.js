const { Telegraf } = require('telegraf');
const emotes = require('./emotes');
const config = require('./config');

const bot = new Telegraf(config.token);
bot.start((ctx) => ctx.reply("just tag me in a chat and i'll send the hihiha\n\nby @ssebastianoo & @chickenmatty"));

bot.on('inline_query', (ctx) => {
    const result = emotes.map(emote => {
      return {
        type: 'audio',
        id: emote.id,
        audio_url: emote.url,
        title: emote.title,
        performer: 'Royale King',
      }
    })
    ctx.answerInlineQuery(result)
  })

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));