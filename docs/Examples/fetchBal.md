## FetchBal Example / Usage

Discord-DBA is made in a language called javascript, have not learned javascript yet? Please [learn and understand](https://www.codecademy.com/learn/learn-javascript) it before using this.

| Parameter | Type | Optional | Description |
| ------ | ------ | ------ | ------ | 
| userID | String | No | Gets the user id from the author of the message or the user you mentioned. |

#### FetchBal Usage

```js
// Import Discord.js
const Discord = require('discord.js');
// Import Discord-DBA
const dba = require('discord-dba');

// Create an instance of a Discord client
const client = new Discord.Client();

// Make sure your bot is running
client.on('ready', () => {
  console.log('I am running!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "balance"
  if (message.content === 'balance') {
  
  // Get the user balance
  dba.fetchBal(message.author.id).then(u => {
    // Send Balance to the channel
    message.channel.send('$' + u.money);

  }
 });

});

// Log our bot in using the token from https://discordapp.com/developers/applications/me

client.login('your token here');
```
