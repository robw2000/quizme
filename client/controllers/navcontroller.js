app.controller('NavMenuController', 
  [
    '$scope', 
    '$location', 
    '$meteor', 
    function($scope, $location, $meteor) {
      
      //getMenuItemClass returns active if the url matches the menu link
      $scope.getMenuItemClass = function(path) {
        if ($location.path().substr(0, path.length) == path) {
          return 'active';
        } else {
          return '';
        }
      };
      
      //Profile link: show users name if logged in or sign-in link otherwise
      $scope.profileLink = {
        text: 'Logged In Name',
        href: '/profile'
      };
      
    }
  ]
);
