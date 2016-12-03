myApp.controller('MyCtrl', ['$scope', function($scope) {
  var self = this;
  $scope.modalShown = false;
  $scope.openEditModal = function() {
    // console.log('openEditModal', self, '$scope', $scope);
    this.modalShown = true;

  };

}]);
