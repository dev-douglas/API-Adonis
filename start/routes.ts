/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group( () => {
  Route.post('/', 'AuthController.store') //entrar no sistema
  Route.delete('/', 'AuthController.destroy').middleware('auth') //Sair do sistema
}).prefix('/auth')

Route.resource('/posts', 'PostsController').apiOnly().middleware({
  store: ['auth', 'acl:admin'], // array pois você pode definir várias middleware para a rota
  update: ['auth', 'acl:admin'],
  destroy: ['auth', 'acl:admin,normal'],
})

// Route.group( () => {
//   Route.resource('/posts', 'PostsController').apiOnly()
// }).middleware('auth')