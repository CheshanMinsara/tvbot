/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var webAppUrl = WebApp.getUrl({ command: "TvFr" });

Api.sendMessage({
  text: "<b>🔴 Live TV App - Click below to open the app.</b>",
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [
      [{ 
        text: "📺 Watch Now", 
        web_app: { url: webAppUrl } 
      }],
      [
        {
          text: "📢 Our Channel", 
          url: "https://t.me/ECash_Hub"
        },
        {
          text: "💬 Help & Support", 
          url: "https://t.me/+I2g444xWnfA4NWM1"
        }
      ]
    ]
  }
});
