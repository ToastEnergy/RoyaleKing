const { Telegraf } = require('telegraf');
const config = require('./config');

const bot = new Telegraf(config.token);
bot.start((ctx) => ctx.reply("just tag me in a chat and i'll send the hihiha\n\nby @ssebastianoo"));

bot.on('inline_query', (ctx) => {
    const result = [{
        type: 'audio',
        id: 'hihihiha',
        audio_url: 'https://morbinguniversity-it.vercel.app/hihihiha.mp3',
        title: 'HIHIHIHA',
        performer: 'Royale King',
    }]
    ctx.answerInlineQuery(result)
  })

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));