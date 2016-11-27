'use strict'

const Todo = use('App/Model/Todo');

const server = use('http').createServer()
const io = use('socket.io')(server)

class TodoController {

  * createTodo(message) {
    const todo = yield Todo.create({
      title: 'sdfadfas',
      description: 'fsdfasdfas'
    });
    console.log(todo);
  }

  * view(request, response) {
    const todos = yield Todo.all()

    io.on('connection', function (socket) {
      console.log('connection created >>>')
      socket.on('disconnect', function (socket) {
        console.log('connection ended <<<')
      })
      socket.on('todo.create', function (message) {
        const todo = createTodo(message);

        socket.emit('todo.complete', {message: 'complete', todo: todo})
      })

    })
    io.listen(3000)

    yield response.sendView('todo', {
      todos: todos.toJSON()
    })
  }

  * create(request, response) {
    const todo = yield TestClass.create({
      title: request.input('title'),
      description: request.input('description'),
    });

    yield response.redirect('back');
  }

  * delete(request, response) {
    const id = request.param('id');
    const post = yield Todo.findBy('id', id);
    yield post.delete();

    yield response.redirect('back');
  }

}

module.exports = TodoController
