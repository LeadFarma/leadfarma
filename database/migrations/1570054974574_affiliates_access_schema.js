'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AffiliatesAccessSchema extends Schema {
  up () {
    this.create('affiliates_accesses', (table) => {

      table
      .integer('tenant_id')
      .unsigned()
      .references('id')
      .inTable('tenants')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table
      .integer('affiliate_id')
      .unsigned()
      .references('id')
      .inTable('affiliates')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')


      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('affiliates_accesses')
  }
}

module.exports = AffiliatesAccessSchema
