const {options} = require("../../config/options")
const knex = require("knex")(options);

const createTableProduct = (async () => {
    try {
        if(await knex.schema.hasTable('producto')){
            await knex.schema.dropTable('producto');
        }
        await knex.schema.createTable('producto', table => {
            table.increments('id');
            table.string('title', 100);
            table.float('price');
            table.string('thumbnail',200);
        });
        console.log('Table producto created');
    } catch (err) {
        console.log(err);
    } finally {
        knex.destroy();
    }
});


module.exports = {
    createTableProduct
};