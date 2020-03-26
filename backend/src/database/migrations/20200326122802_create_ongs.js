
/**
 * .UP: É o que eu quero que seja feito
 * .Down: O que fazer caso tenha algum erro
 */
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
         table.string('id').primary();
         table.string('name').notNullable();
         table.string('email').notNullable();
         table.string('whatsapp').notNullable();
         table.string('city').notNullable();
         table.string('uf', 2).notNullable();
     });
 };
 
 exports.down = function(knex) {
     return knex.schema.dropTable('ongs');
 };
 
