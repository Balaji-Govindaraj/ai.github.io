(function() {
  angular.module('test', ['ngAria', 'ngAnimate', 'ngMaterial']).controller('testController', function($scope, $mdDialog) {
    return $scope.showDialog = function(evt) {
      return $mdDialog.show({
        controller: function($scope) {
          return angular.extend($scope, {
            user: {
              Name: '',
              email: '',
              owner: '',
              state: '',
              visibility: ''
            },
            closeDialog: function() {
              return $mdDialog.hide();
            }
          });
        },
        templateUrl: 'file:///C:/Users/RA358745/Downloads/Swagger%20project%20back%20up/views/portal.ejs',
        targetEvent: evt
      });
    };
  });

}).call(this);
