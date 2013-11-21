app.directive('ngNavMenu', function() {
  return {
    restrict: 'AE'
    //, require: '^ngModel'
    , templateUrl: 'partials/nav.html'
    , controller: 'NavMenuController'
  }
});
