
var app = angular.module('value_app',[]);
app.controller('value_controller', function($scope){


    $scope.show_value = function () {
        alert($scope.my_name);
        $scope.name=$scope.my_name;

    }
});
