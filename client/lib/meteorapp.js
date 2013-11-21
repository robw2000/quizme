window.app = angular.module('meteorapp', ['ngRoute'])
  .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      //.when('/sign-in', {templateUrl: 'partials/sign-in.html', controller: 'SignInController'})
      //.when('/', {templateUrl: 'partials/home.html', controller: 'HomeController'})
      //.when('/quizzes/create', {templateUrl: 'partials/createQuiz.html', controller: 'CreateQuizController'})
      .when('/quizzes', {templateUrl: 'partials/listQuizzes.html', controller: 'ListQuizzesController'})
      //.when('/quizzes/:quiz_url_name', {templateUrl: 'partials/quiz.html', controller: 'QuizController'})
      //.when('/quizzes/:quiz_url_name/leaderboard', {templatseUrl: 'partials/leaderboard.html', conroller: 'LeaderboardController'})
      .otherwise({redirectTo: '/quizzes'});

    $locationProvider.html5Mode(true);
  }]);
