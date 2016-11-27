/**
 * Created by Sam on 27/11/2016.
 */

MyApp.controller('TodoController', function ($scope, $http) {
  "use strict";
  $scope.newTodo = {
    title: "",
    description: ""
  };
  $scope.todos = [];

  var socket = io('http://localhost:3000');

  socket.on('todo.complete', function (message) {
    $scope.todos.push(message.todo);
    console.log(message);
  });

  $scope.init = function () {

    socket.emit('my other event', 'hi');
  }

  $scope.createTodo = function () {
    socket.emit('todo.create', $scope.newTodo);
  }

});
