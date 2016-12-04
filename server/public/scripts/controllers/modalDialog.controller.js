// Controller to manage edit modal dialog

myApp.controller('ModalDialogController', ['$scope', function($scope) {
    var self = this;
    $scope.modalShown = false;

    $scope.openModal = function() {
        this.modalShown = true;
    };

}]);
