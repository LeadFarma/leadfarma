'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('website.index').as('index')
Route.on('/landing').render('landing.index').as('index')
Route.on('/dashboard').render('dashboard.index').as('dashboard')
Route.get('dashboard/products' , 'ProductController.index').as('product')
Route.get('dashboard/contacts' , 'ContactController.index').as('contact')
Route.get('dashboard/users' , 'UserController.index').as('user')
Route.get('dashboard/affiliates' , 'AffiliateController.index').as('affiliate')

