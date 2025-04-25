module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Ready!');

        async function pickPresence () {
            const option = Math.floor(Math.random(50000) * statusArray.length);

            try {
                await client.user.setPresence({
                    activities: [
                        {
                            name: Clumsic,
                            type: Playing,

                        },
                    
                    ],

                    status: online
                })
            } catch (error) {
                console.error(error);
            }
        }
    },
};