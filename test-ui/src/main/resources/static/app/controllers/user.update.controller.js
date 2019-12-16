(function(){
    'use strict';

    angular
        .module('test')
        .controller('UserUpdateController', UserUpdateController)

    /** @ngInject */
    function UserUpdateController($scope, $location, UserService){
        var vm = this;
        var path = $location.path().split('/');
        var currentId = path[path.length - 1];        

        $scope.user = {};

        init();

        function init(){
            UserService.findById(currentId).then(response => {
                $scope.user = response.data;                
            },
            error => {
                alert(error);
            });
        }

        $scope.saveUser = function(user){
            UserService.updateUser(user).then(response => {
                alert('Usuario atualizado com sucesso!');
            },
            error => {
            	alert(`Erro: ${error.data.error} \n ${validationError(error)}`);
            })
        }
        
        function validationError(error) {
        	var errors = "";
        	error.data.errors.forEach(error => {
        		errors =errors + `\nCampo: ${error.fieldName} - ${error.message}`;
        	})        	
        	return errors;
        }

    }

}());