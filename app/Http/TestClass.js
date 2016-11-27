/**
 * Created by Sam on 27/11/2016.
 */
'use strict'

const Todo = use('App/Model/Todo');

class TestClass {

  * create() {

    const todo = Todo.create({
      title: 'sdfadfas',
      description: 'fsdfasdfas'
    });

    return todo;
  }

}
