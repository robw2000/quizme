window.app = angular.module('meteorapp', ['meteor'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      //.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'})
      .when('/quizzes/create', {templateUrl: 'partials/createQuiz.html', controller: 'CreateController'})
      .when('/quizzes', {templateUrl: 'partials/listQuizzes.html', controller: 'ListController'})
      .when('/quizzes/:quiz_url_name', {templateUrl: 'partials/quiz.html', controller: 'QuizController'})
      .when('/quizzes/:quiz_url_name/leaderboard', {templatseUrl: 'partials/leaderboard.html', conroller: 'LeaderboardController'})
      .otherwise({redirectTo: '/quizzes'});

    $locationProvider.html5Mode(true);
  }]);
