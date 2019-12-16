(function(){
    'use strict';

    angular
        .module('test')
        .controller('UserNewController', UserNewController)

    /** @ngInject */
    function UserNewController($scope, UserService, $location){
        var vm = this;
        
        $scope.user = {
        		name: "",
        		email: "",
        		phone: "",
        		sex: ""
        };

        init();

        function init(){
        }

        $scope.saveUser = function(newUser){            
            UserService.saveNewUser(newUser).then(response => {
                $location.path('/user');
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