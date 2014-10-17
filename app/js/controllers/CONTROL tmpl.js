/**
 * Exports controller.
 */

"use strict";

var ControlExample = function($scope, $interval) {
  console.log("yes bruv")
  $scope.testVar = 'We are up and running from a required module!';
  $scope.regularAngular = 'Hello!';
  $scope.name = 'Charlie123pal';
  $scope.monkey = 'Strawberry';

  // Event listeners :::::::::::::::::::::::::::::::::
  // Listens for view Destory / change
  $scope.$on("$destroy", function() {
       $scope.cleanView();
       console.log("destroy...");
  });

  // Angular timer
  var intervalPromise = $interval(function () { myTimer() }, 500);  // Angular interval
  var myTimer = function(action) {
      console.log("angular private tick")
  };
    
  // Public functions :::::::::::::::::::::::::::::::::::
  $scope.hitFunc = function(action) {
      console.log("returning.. ", $scope.monkey + " " + action);
  };

  // Clean all listeners on the view :::::::::::::::::::::
  $scope.cleanView = function(){
    $interval.cancel( intervalPromise );
    console.log("view cleaned");
  };
};

// export module
module.exports = ControlExample;