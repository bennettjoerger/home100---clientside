angular
  .module("home100App")
  .controller("HardwareController", HardwareController);

  HardwareController.$inject = ["$scope", "$firebaseObject"];

  function HardwareController ($scope, $firebaseObject){
    var firebaseLights = new Firebase(
      'https://home100database.firebaseio.com/outlets'
    );
    $firebaseObject(firebaseLights).$bindTo($scope, "data");
    $scope.toggleOutlet = function(num){
      if (num == 1){
        $scope.data.outlet1 = $scope.data.outlet1 == 'on' ? 'off' : 'on';
      } else if (num == 2){
        $scope.data.outlet2 = $scope.data.outlet2 == 'on' ? 'off' : 'on';
      }
        // $scope.data.$save().then(function(){
        //   console.log("saved!");
        // }).catch(function(error){
        //   console.log('error', error);
        // })



    }
  }
