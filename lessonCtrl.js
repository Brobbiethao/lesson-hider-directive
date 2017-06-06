angular.module("directivePractice")
.controller("lessonController", function($scope) {
  $scope.lessons = lessons;

  $scope.announceDay = function(lesson, day) {
    if (day) {
      alert(lesson + ' is active on ' + day + '.');
    } else {
      alert('Lesson is not on schedule');
    }
  };
});

var lessons =
['Services', 'Routing', 'Directives', 'Review', 'Firebase', 'No server project', 'Node', 'Express', 'Mongo'];
