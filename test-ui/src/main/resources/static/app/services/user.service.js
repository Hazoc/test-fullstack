'use strict';

angular.module('test').service('UserService', ['$http', function ($http) {
    
    var service = {};

    const API_URI = 'http://localhost:5000/api'

    service.findAll = function () {        
        return $http.get(`${API_URI}/user`);        
    }

    service.saveNewUser = function (user) {
        return $http.post(`${API_URI}/user`,user);
    }
    
    service.removeUser = function(userId) {
    	return $http.delete(`${API_URI}/user/${userId}`);
    }
    
    service.findById = function (userId) {
    	return $http.get(`${API_URI}/user/${userId}`);
    }
    
    service.updateUser = function (user) {
    	return $http.put(`${API_URI}/user/${user.id}`, user);
    }

    return service;
}])