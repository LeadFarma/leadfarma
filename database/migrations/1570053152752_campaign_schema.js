'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CampaignSchema extends Schema {
  up () {
    this.create('campaigns', (table) => {
      table.string('description' , 255)
      table
      .integer('affiliate_id')
      .unsigned()
      .references('id')
      .inTable('affiliates')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('url' , 255)
      table.boolean('is_active').defaultTo(true)
      table.boolean('has_sms').defaultTo(false)
      table.boolean('has_email').defaultTo(false)
      table.boolean('has_whatsapp').defaultTo(false)
      table.boolean('has_telegram').defaultTo(false)
      table.boolean('has_call').defaultTo(false)
      table.date('start')
      table.date('stop')


      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('campaigns')
  }
}

module.exports = CampaignSchema
