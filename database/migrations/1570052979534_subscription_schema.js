'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SubscriptionSchema extends Schema {
  up () {
    this.create('subscriptions', (table) => {
      table
      .integer('tenant_id')
      .unsigned()
      .references('id')
      .inTable('tenants')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table
      .integer('plan_id')
      .unsigned()
      .references('id')
      .inTable('plans')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      
      table.integer('day_of_payment')
      table.boolean('is_active').defaultTo(false)
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('subscriptions')
  }
}

module.exports = SubscriptionSchema
