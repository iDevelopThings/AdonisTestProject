'use strict'

const Todo = use('App/Model/Todo');
const co = use('co');

const server = use('http').createServer()
const io = use('socket.io')(server)

class TodoController {

  * view(request, response) {
    const todos = yield Todo.all()

    yield response.sendView('todo', {
      todos: todos.toJSON()
    })
  }

  * create(request, response) {
    const todo = yield Todo.create({
      title: request.input('title'),
      description: request.input('description'),
    });
    yield response.redirect('back');
  }

  *
  delete(request, response) {
    const id = request.param('id');
    const post = yield Todo.findBy('id', id);
    yield post.delete();

    yield response.redirect('back');
  }

}

module.exports = TodoController
