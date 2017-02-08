angular.module('App.controllers', [
])

.controller('homeController', function($scope) {

		$scope.itens = [];
		$scope.number = -1;
       
       	$scope.adicionaItem = function () {
       		if ($scope.myForm.$valid) {
	        	$scope.itens.push({
	        		nome: $scope.item.nome,
	                telefone: $scope.item.telefone,
	                email: $scope.item.email
	            });
	        	$scope.item.nome = $scope.item.telefone = $scope.item.email = '';
	        	$scope.number = -1;
	        	$scope.send = true;
	        }else{
	        	$scope.send = false
	        }	
    	};
});

;
