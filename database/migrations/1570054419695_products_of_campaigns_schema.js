'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsOfCampaignsSchema extends Schema {
  up () {
    this.create('products_of_campaigns', (table) => {

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
      .integer('product_id')
      .unsigned()
      .references('id')
      .inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

      table.decimal('price')

      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('products_of_campaigns')
  }
}

module.exports = ProductsOfCampaignsSchema
