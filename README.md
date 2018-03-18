<div align="center">
 <p>
    <a href="https://nodei.co/npm/discord-dba.png/"><img src="https://nodei.co/npm/discord-dba.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
  <p>
    <a href="https://discord.gg/yeXDVUH"><img src="https://discordapp.com/api/guilds/222078108977594368/embed.png" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/discord-dba"><img src="https://img.shields.io/npm/v/discord-dba.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/discord-dba"><img src="https://img.shields.io/npm/dt/discord-dba.svg?maxAge=3600" alt="NPM downloads" /></a>
   </p>
</div>

# Discord-DBA 

Join our [**Discord Server**](https://discord.gg/yeXDVUH) to get a knowledge of Discord-DBA.

**Note:** This package is still under development and will be updated with big features and bug fixes.

## Dependencies

You need to have **Node.js Engine v8.0.0 or higher**.
You need to have **Sqlite3 v3.1.13 or higher**.
You need to have **Discord.js v11.3.2 or higher**.

## Installation

```
npm install discord-dba
```

**Master Version**

```
npm install https://github.com/DiscordDBA/Discord-DBA
```

## Require The Package

```JS
const dba = require('discord-dba');
```

**FetchBalance Example:**

```JS
dba.fetchBal(message.author.id).then(u => {
    console.log(u.money);
});
```

## Docs

Learn more about **Discord-DBA** documents by joining our [Discord Server](https://discord.gg/yeXDVUH). Get downloads, information, news and help much faster.

## Github

Found any issues? Please report them on our [github issue tab](https://github.com/DiscordDBA/Discord-DBA/issues)!

