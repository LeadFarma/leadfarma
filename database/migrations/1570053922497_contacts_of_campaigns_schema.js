'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ContactsOfCampaignsSchema extends Schema {
  up () {
    this.create('contacts_of_campaigns', (table) => {
      
      table
      .integer('affiliate_id')
      .unsigned()
      .references('id')
      .inTable('affiliates')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table
      .integer('campaign_id')
      .unsigned()
      .references('id')
      .inTable('campaigns')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table
      .integer('contact_id')
      .unsigned()
      .references('id')
      .inTable('contacts')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.boolean('sms_open')
      table.boolean('whatsapp_open')
      table.boolean('email_open')
      table.boolean('telegram_open')
      table.boolean('call_received')
      table.boolean('is_ordered')

      
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('contacts_of_campaigns')
  }
}

module.exports = ContactsOfCampaignsSchema
