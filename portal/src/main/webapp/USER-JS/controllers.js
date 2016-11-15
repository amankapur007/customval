/**
 * 
 */
var loginCTRL=mymailApp.controller('loginCTRL',function($scope,$http){
	$scope.risk=true;
	$scope.Login=function(){
	
	$http({
		method:'GET',
		url:'/portal/Login',
		data:angular.toJson($scope.Loginform),
		contentType:'application/json'		
	})
	.then(function(response){
		if(response.status == 200)
			{
				 console.log("cool");
				 $scope.text="entered"
			}
		else
			{
				console.log("Bad");
			}
	})
	}
	
	$scope.check=function(){
		var startscore=$scope.Loginform.startscore;
		var endscore=$scope.Loginform.endscore;
		console.log(startscore+","+endscore)
		if((typeof startscore!='undefined' && typeof endscore!='undefined') && (startscore!=null && endscore!=null))
			{
		if(startscore>endscore)
			{
			
				$scope.aman='form-control ng-valid-min ng-dirty ng-valid-number ng-touched ng-empty ng-invalid ng-invalid-required';
				$scope.myForm.$invalid=true;
				$scope.myForm.endscore.$invalid=true;
				$scope.myForm.endscore.$touched=true;
				$scope.risk=false;
				$scope.myForm.$valid=false;
			}
		else
			{
			$scope.risk=true;
			}
			}
		else
			{
			console.log("to be submitted");
			$scope.risk=true;
			}
	};
	
});
mymailApp.directive('myDirective', function() {
	  return {
	    require: 'ngModel',
	    link: function(scope, element, attr, mCtrl) {
	      function myValidation(value) {
	    
	        if (scope.startscore>scope.endscore) {
	          mCtrl.$setValidity('charE', true);
	        } else {
	          mCtrl.$setValidity('charE', false);
	        }
	        return value;
	      }
	      mCtrl.$parsers.push(myValidation);
	    }
	  };
});