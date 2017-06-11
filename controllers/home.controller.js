(function (angular) {
'use strict';
	
	angular.module('starterApp')
		.controller('homeController', constructor);
		    constructor.$inject = ['$stateParams','SampleService','$scope','$window','$state','$mdMedia'];
		    function constructor($stateParams,SampleService,$scope,$window,$state,$mdMedia) {
		    	var vm = this;
				vm.$mdMedia = $mdMedia;			
			}

})(window.angular);