/**
 * Created by Sam on 27/11/2016.
 */
'use strict'

const Todo = use('App/Model/Todo');
const co = use('co');

const server = use('http').createServer()
const io = use('socket.io')(server)

let TodoModel = Todo;
io.on('connection', function (socket) {
  console.log(`connection created >>>`)

  socket.on('disconnect', function (socket) {
    console.log('connection ended <<<')
  })
  socket.on('todo.create', function (message) {
    let todo = co(function*() {
      return yield TodoModel.create({
        user_id: message.userId,
        title: message.title,
        description: message.description,
      });
    }).then(function (response) {
      socket.emit('todo.complete', {message: 'complete', todo: response});
    })

  })
})
io.listen(3000)
