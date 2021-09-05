import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').notNullable().unique()
      table.text('content', 'longtext').notNullable()
      table.integer('author_id')
      .unsigned() //unsigned() == para receber valores grandes
      .references('id').inTable('users')
      .onUpdate('CASCADE') //Caso o id na tabela de usuário seja atualizado, atualiza aqui também 
      .onDelete('CASCADE') //Caso o registro na tabela de usuário seja apagado, apaga aqui também 
      table.timestamps(true) // created_at e updated_at
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
