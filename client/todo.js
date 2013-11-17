app.controller('TodoCtrl', [
  '$scope', '$location', '$routeParams', '$meteor', 'filterFilter', function($scope, $location, $routeParams, $meteor, filterFilter) {
    var statusFilters, todos;
    statusFilters = {
      active: {
        completed: false
      },
      completed: {
        completed: true
      }
    };
    $scope.statusFilter = statusFilters[$routeParams.filter];
    todos = $scope.todos = $meteor('todos').find({});
    $scope.newTodo = '';
    $scope.location = $location;

    $scope.$watch('todos', function(newValue, oldValue) {
      var changed;
      $scope.remainingCount = filterFilter(todos, {
        completed: false
      }).length;
      $scope.completedCount = todos.length - $scope.remainingCount;
      $scope.allChecked = !$scope.remainingCount;

      changed = _.filter(newValue, function(todo, index) {
        return !_.isEqual(todo, oldValue[index]);
      });

      return _.each(changed, function(todo) {
        return $meteor('todos').update(todo._id, todo);
      });
    }, true);

    $scope.addTodo = function() {
      var newTodo;
      newTodo = $scope.newTodo.trim();
      if (!newTodo.length) {
        return;
      }
      $meteor('todos').insert({
        title: newTodo,
        completed: false
      });
      return $scope.newTodo = '';
    };

    $scope.removeTodo = function(todo) {
      return $meteor('todos').remove(todo._id);
    };

    $scope.clearCompletedTodos = function() {
      var completed;
      completed = filterFilter(todos, {
        completed: true
      });
      return _.each(completed, function(todo) {
        return $scope.removeTodo(todo);
      });
    };
    return $scope.markAll = function(completed) {
      return _.each(todos, function(todo) {
        return todo.completed = completed;
      });
    };
  }
]);
