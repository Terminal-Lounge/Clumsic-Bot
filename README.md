
# Clumsic Bot

A powerful and customizable Discord bot built using [Discord.js](https://discord.js.org) v14+.

## 🚀 Getting Started

### ✅ Prerequisites

Before you begin, ensure you have the following installed:

- **[Node.js](https://nodejs.org/)** (v14 or higher)
- **[Discord.js](https://discord.js.org/#/)** (v14 or higher)

### 🛠 Installation

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Terminal-Lounge/Clumsic-Bot.git
   cd Clumsic-Bot
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Create a `.env` file** in the root directory and add your bot token:  
   ```env
   TOKEN=your-bot-token
   ```

4. **Add your client id** in src/functions/handleCommands
   ```js
   clientId = 'YOUR CLIENT IDS'; 
   ```

5. **Start the bot**  
   ```bash
   node .
   ```

## 💡 Features

This bot is built using the powerful [`discord.js`](https://discord.js.org) library and supports a variety of moderation, utility, and fun commands.

### 🧾 Commands List

| Command           | Description                                       |
|------------------|---------------------------------------------------|
| [`/help`](#)          | Displays all of the bot's commands.               |
| [`/ping`](#)          | Displays the API latency of the bot.              |
| [`/emote-list`](#)    | Lists all emotes in the server.                   |
| [`/emote-steal`](#)   | Steals an emote from a message link.              |
| [`/emote-add`](#)     | Adds a new emote to the server.                   |
| [`/sticker-add`](#)   | Adds a new sticker to the server.                 |
| [`/ban`](#)           | Bans a member from the server.                    |
| [`/kick`](#)          | Kicks a member from the server.                   |
| [`/mute`](#)          | Mutes a member in the server.                     |
| [`/nick`](#)          | Changes a member's nickname.                      |
| [`/poll`](#)          | Creates a simple poll.                            |
| [`/purge`](#)         | Deletes a number of messages.                     |
| [`/role`](#)          | Assigns or removes a role from a member.          |
| [`/slowmode`](#)      | Sets slow mode duration in a channel.             |
| [`/tempban`](#)       | Temporarily bans a member.                        |
| [`/tempmute`](#)      | Temporarily mutes a member.                       |
| [`/timeout`](#)       | Puts a user in timeout for a specified duration.  |
| [`/unmute`](#)        | Unmutes a member.                                 |
| [`/avatar`](#)        | Displays a user's avatar.                         |

## 📁 Project Structure

```
discord-bot/
├── commands/        # All slash command files
├── events/          # Event listeners (e.g. ready, interactionCreate)
├── config/          # Configuration files
├── index.js         # Entry point
├── .env             # Environment variables
└── package.json     # Node.js dependencies and scripts
```

## 🙌 Contributing

Feel free to fork this project and submit a pull request. Contributions are always welcome!

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Made with ❤️ using [Discord.js](https://discord.js.org) and [Node.js](https://nodejs.org/)

> Made with ❤️ By [Ramkrishna](https://github.com/ramkrishna000) and [! Friday](https://github.com/friday2su)
