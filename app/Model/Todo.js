'use strict'

const Lucid = use('Lucid')

class Todo extends Lucid {

  static get createTimestamp() {
    return 'created_at'
  }

  static get updateTimestamp() {
    return 'updated_at'
  }

}

module.exports = Todo
