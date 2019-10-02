## Alter Table
step-1
adonis make:migration 'migration-name'
step-2
choose 'select table'
step-3
```
class AlterUserSchema extends Schema {
  up () {
    this.table('NOME-DA-TABELA', (table) => {
      // alter table
      table.foreign('tenant_id').references('tenants.id').onDelete('cascade')
    })
  }

  down () {
    this.table('NOME-DA-TABELA', (table) => {
      // reverse alternations
    })
  }
}
```

### Tenant is mandatory
###use this when the table previously exist
``` table.foreign('tenant_id').references('tenants.id').onDelete('cascade')```

###use this in new model
```
table.integer('tenant_id')
        .unsigned()
        .references('id')
        .inTable('tenants')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
```