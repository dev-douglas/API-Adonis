import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        name: "Douglas Lopes",
        email: 'admin@gmail.com',
        password: 'secret',
        role: 'admin'
      },
      {
        name: "Douglas Normal",
        email: 'normal@gmail.com',
        password: 'secret',
        role: 'admin'
      }
    ])
  }
}
