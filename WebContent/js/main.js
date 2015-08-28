(function() {

	// angular module
	var myApp = angular.module('myApp', [ 'angularTreeview' ]);

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
								.get("../data/atmWithdrawlCharges.json")
								.success(
										function(response) {
											$scope.atmWithdrawlCharges = response.records;
										});

						$http
								.get("../data/visaFreeCountries.json")
								.success(
										function(response) {
											$scope.visaFreeCountries = response.visaFreeCountries;
										});

						$http
								.get("../data/visaOnArrivalCountries.json")
								.success(
										function(response) {
											$scope.visaOnArrivalCountries = response.visaOnArrivalCountries;
										});

						$http
								.get("../data/schengenCountries.json")
								.success(
										function(response) {
											$scope.schengenCountries = response.schengenCountries;
										});

						$scope.mainLinks = [ {
							"Label" : "Ticket Booking",
							"Name" : "ticketBooking"
						}, {
							"Label" : "Hotel Booking",
							"Name" : "hotelBooking"
						}, {
							"Label" : "Visa",
							"Name" : "visa"
						}, {
							"Label" : "Tour Booking",
							"Name" : "tourBooking"
						}, {
							"Label" : "Cloths",
							"Name" : "cloths"
						}, {
							"Label" : "Currency",
							"Name" : "currency"
						}, {
							"Label" : "Restaurant",
							"Name" : "restaurant"
						}, {
							"Label" : "Airport Transfer",
							"Name" : "airportTransfer"
						}, {
							"Label" : "Local Transport",
							"Name" : "localTransport"
						}, ];

					});

})();