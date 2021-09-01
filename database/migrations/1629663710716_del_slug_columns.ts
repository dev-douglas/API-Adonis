import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Post extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('slug')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.string('slug').notNullable().unique()
    })
  }
}
