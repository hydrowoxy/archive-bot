who knows...

# Setup

1. Create a config.json file with the following format
{
    "clientId" : "",
    "guildId" : "",
    "token" : ""
}

Where:
- The clientId is the ID of your bot,
- guildId is of your server,
- the token is the bot token,
- the wikiApiKey is the api key from the admin panel of the Wiki, and
- the githubToken is a (classic) personal access token for a GitHub account with access to the Baja Racing org

1. Then, run npm i in order to install all node modules
2. Run deploy-commands.js to send the commands to the discord server.
3. Run npm start to begin hosting the bot
4. Host index.js as long as you'd like to run the discord bot

# Docker
- tbd