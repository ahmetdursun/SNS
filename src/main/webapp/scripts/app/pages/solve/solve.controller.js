'use strict';
	 
	angular.module('solveandshareApp')
	  .controller('SolveController', function ($scope, $http) {
	 
		$http.get('/assets/data/questions.json').then(function(data){
			$scope.questions = data.data;
			$scope.currentQuestion = $scope.questions[0];
		});
		
		$http.get('/assets/data/comments.json').then(function(data){
			$scope.comments = data.data;
		});
	 
	    // initial image index
	    $scope._Index = 0;
	 
	    // if a current image is the same as requested image
	    $scope.isActive = function (index) {
	        return $scope._Index === index;
	    };
	 
	    // show prev image
	    $scope.showPrev = function () {
	        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.questions.length - 1;
	        $scope.currentQuestion = $scope.questions[$scope._Index];
	    };
	 
	    // show next image
	    $scope.showNext = function () {
	        $scope._Index = ($scope._Index < $scope.questions.length - 1) ? ++$scope._Index : 0;
	        $scope.currentQuestion = $scope.questions[$scope._Index];
	    };
	 
	    // show a certain image
	    $scope.showPhoto = function (index) {
	        $scope._Index = index;
	    };
        
    	$scope.courses = [
        {
          "courseId": 0,
          "courseName": "Matematik"
        },
        {
          "courseId": 1,
          "courseName": "Fizik"
        },
        {
          "courseId": 2,
          "courseName": "Felsefe"
        },
        {
          "courseId": 3,
          "courseName": "Kimya"
        },
        {
          "courseId": 4,
          "courseName": "Türkçe"
        },
        {
          "courseId": 5,
          "courseName": "Tarih"
        },
        {
          "courseId": 6,
          "courseName": "Biyoloji"
        },
        {
          "courseId": 7,
          "courseName": "Coğrafya"
        },
        {
          "courseId": 8,
          "courseName": "Geometri"
        }
      ];
  });
    