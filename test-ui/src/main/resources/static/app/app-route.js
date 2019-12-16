'use strict';

angular.module('test').config(['$stateProvider', function ($stateProvider) {

	$stateProvider.state('app', {
		url: '/home',
		templateUrl: '/app/app-template.html',
		controller: 'AppController'
	}).state('listUser', {
		url: '/user',
		templateUrl: '/app/partials/app-user-list.html',
		controller: 'UserListController'
	}).state('newUser', {
		url: '/user/add',
		templateUrl: '/app/partials/app-user.html',
		controller: 'UserNewController'
	}).state('updateUser', {
		url: '/user/:id',
		templateUrl: '/app/partials/app-user.html',
		controller: 'UserUpdateController'
	});

}]);