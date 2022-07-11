const {options} = require("../../config/options")
const knex = require("knex")(options);

const createTableChat = (async () => {
    try {
        if(await knex.schema.hasTable('chat')){
            await knex.schema.dropTable('chat');
        }
        await knex.schema.createTable('chat', table => {
            table.increments('id');
            table.string('email', 100);
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.string('text',200);
        });
        console.log('Table chat created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
});


module.exports = {
    createTableChat
};