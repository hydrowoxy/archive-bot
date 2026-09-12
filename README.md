who knows...

# Setup

1. Create a config.json file with the following format
{
    "clientId" : "",
    "guildId" : "",
    "token" : "",
    "wikiApiKey": "",
    "githubToken": ""
}

Where:
- The clientId is the ID of your bot,
- guildId is of your server,
- the token is the bot token,
- the wikiApiKey is the api key from the admin panel of the Wiki, and
- the githubToken is a (classic) personal access token for a GitHub account with access to the Baja Racing org

2. Then, run npm i in order to install all node modules
3. Run deploy-commands.js to send the commands to the discord server.
4. Run npm start to begin hosting the bot
5. Host index.js as long as you'd like to run the discord bot

# Docker
- tbd