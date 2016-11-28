/**
 * Created by Sam on 27/11/2016.
 */

MyApp.controller('TodoController', function ($scope, $http) {
  "use strict";

  $scope.newTodo = {
    userId: user.id,
    title: "",
    description: ""
  };
  $scope.todosList = [];

  $scope.init = function () {
    socket.on('todo.complete', function (message) {
      $scope.todosList.push(message.todo);
      $scope.$apply();
    });
    $scope.getTodos();

  }

  $scope.$watch('todosList', function (newVal, oldVal) {
    $scope.todosList = newVal;
  }, false);

  $scope.createTodo = function () {
    socket.emit(`todo.create`, $scope.newTodo);

  }

  $scope.getTodos = function () {
    $http({
      method: 'GET',
      url: '/todo/get'
    }).then(
      function (response) {
        $scope.todosList = response.data;
      },
      function (response) {
        console.log(response);
      }
    )
  }

});
