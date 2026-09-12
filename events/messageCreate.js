const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,

    async execute(message) {
        if (message.author.bot) return;

        console.log('----------------');
        console.log(`Channel: ${message.channel.name}`);
        console.log(`Channel type: ${message.channel.type}`);
        console.log(`Author: ${message.author.tag}`);
        console.log(`Message ID: ${message.id}`);
        console.log(`Content: ${message.content}`);

        if (message.channel.isThread()) {
            console.log(`Thread: ${message.channel.name}`);
            console.log(`Parent: ${message.channel.parent?.name}`);
        }

        for (const attachment of message.attachments.values()) {
            console.log(`Attachment: ${attachment.name}`);
            console.log(`Size: ${attachment.size}`);
            console.log(`Content type: ${attachment.contentType}`);
            console.log(`URL: ${attachment.url}`);
        }
    },
};