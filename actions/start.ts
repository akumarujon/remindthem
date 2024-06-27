// Import necessary modules
import { bot } from "../bot.ts";

// Define a command handler for the "start" command
bot.command("start", async (ctx) => {
  await ctx.reply(
    "Welcome!",
  );
});

const messages = [
  "Say — La ilaha illa Allah ☝🏻 Muhammad ﷺ Rasul Allah",
  "Say — Subhanallah",
  "Say — Subhanallahi va bixamdixi",
  "Say — Subhanallahiyl a’ziym",
  "Say — Inna lillahi va inna ilaihi rojiun",
  "Say — Hasbunallohu ve ne’mal vakil",
  "Say — Rabbi rhamhumaa kamaa rabbayaanee sogheeraa",
  "Say — Allahumma solli a’la sayyidina Muhammad ﷺ",
  "Say — Astag’firullah al aziym",
  "Say — Astag’firullah va atubu ilayhi",
  "Say — Bismillahir Rahmanir Raheem ﷽",
  "Say — Allahu Akbar",
  "Say — Astag’firullah",
  "Say — Alhamdulillah",
  "Say — Yaa muqallibal quluub, thabbit qalbee ‘alaa deenik",
  "Say — La x’aula va la quvvata illa billah",
  "Say — La ilaha illa anta subhanaka inniy kuntu minaz zolimiyn",
];

const username = "@rem1ndthem";

// Schedule a cron job to check for new articles
Deno.cron("send an article", "* * * * *", async () => {
  const index = Math.floor(Math.random() * messages.length);
  await bot.api.sendMessage(username, messages[index]);
});
