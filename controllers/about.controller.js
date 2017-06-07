(function (angular) {
'use strict';

	angular.module('starterApp')
	    .controller('aboutController', constructor);
	    	constructor.$inject = ['SampleService','$scope','$timeout','$document'];
	    	function constructor(SampleService,$scope,$timeout,$document) {
	    		var vm = this;
	    		vm.teamList = SampleService.getTeams();
	    		console.log(vm.teamList); 
	    	}

})(window.angular);