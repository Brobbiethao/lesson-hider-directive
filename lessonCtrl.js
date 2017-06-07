angular.module("directivePractice")
.controller("lessonController", function($scope) {
  $scope.lessons = lessons;
  $scope.announceDay = function(lesson, day){
      alert(lesson + ' is active on ' + day + '.');
  };
});


var lessons =
['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
