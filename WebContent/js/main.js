(function() {

	// angular module
	var myApp = angular.module('myApp', [ 'angularTreeview', 'ui.bootstrap' ]);

	myApp
			.controller(
					'myController',
					function($scope, $http) {

						$scope.placeList = null;
						$http.get('data/places.json').success(function(data) {
							$scope.placeList = data;
						}).error(function(data, status, error, config) {
							$scope.placeList = [ {
								heading : "Error",
								description : "Could not load data."
							} ];
						});

						$http
								.get("data/atmWithdrawlCharges.json")
								.success(
										function(response) {
											$scope.withdrawlCharges = response.charges;
										});

						$http
								.get("data/visaFreeCountries.json")
								.success(
										function(response) {
											$scope.visaFreeCountries = response.visaFreeCountries;
										});

						$http
								.get("data/visaOnArrivalCountries.json")
								.success(
										function(response) {
											$scope.visaOnArrivalCountries = response.visaOnArrivalCountries;
										});

						$http
								.get("data/schengenCountries.json")
								.success(
										function(response) {
											$scope.schengenCountries = response.schengenCountries;
										});

						$http.get("data/mainLinks.json").success(
								function(response) {
									$scope.mainLinks = response.mainLinks;
								});
						
					});

})();