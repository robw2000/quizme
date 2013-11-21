app.controller('NavMenuController', 
  [
    '$scope', 
    '$location', 
    function($scope, $location) {
      
      //getMenuItemClass returns active if the url matches the menu link
      $scope.getMenuItemClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
          return 'active';
        } else {
          return '';
        }
      };
      
      //Profile link: show users name if logged in or sign-in link otherwise
      $scope.profileLink = '/profile';// $meteor.user() ? '/profile' : '/sign-in';
      $scope.profileLinkText = 'xxx';//$meteor.userId().toString();//$meteor.user() ? $meteor.user().username : 'Sign-up/Sign-in';
      
    }
  ]
);
