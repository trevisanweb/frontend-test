angular.module('App.directives', [])
	
	//Confirm Password
	.directive("passwordVerify", function() {
		   return {
		      require: "ngModel",
		      scope: {
		        passwordVerify: '='
		      },
		      link: function(scope, element, attrs, ctrl) {
		        scope.$watch(function() {
		            var combined;

		            if (scope.passwordVerify || ctrl.$viewValue) {
		               combined = scope.passwordVerify + '_' + ctrl.$viewValue; 
		            }                    
		            return combined;
		        }, function(value) {
		            if (value) {
		                ctrl.$parsers.unshift(function(viewValue) {
		                    var origin = scope.passwordVerify;
		                    if (origin !== viewValue) {
		                        ctrl.$setValidity("passwordConfirmation", false);
		                        return undefined;
		                    } else {
		                        ctrl.$setValidity("passwordConfirmation", true);
		                        return viewValue;
		                    }
		                });
		            }
		        });
		     }
		   };
		});
;
