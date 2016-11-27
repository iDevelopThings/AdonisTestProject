'use strict'

const Schema = use('Schema')

class TodosTableSchema extends Schema {

  up() {
    TestClass.create('todos', (table) => {
      table.increments();
      table.text('title');
      table.text('description', 'longtext');
      table.timestamps();
    })
  }

  down() {
    this.drop('todos');
  }

}

module.exports = TodosTableSchema
