(function(){
    'use strict';

    angular
        .module('test')
        .controller('UserListController', UserListController)

    /** @ngInject */
    function UserListController($scope, $location, UserService){
        var vm = this;
        vm.findAll = findAll;
        
       
        function findAll() {
        	 return UserService.findAll().then((response) => {                
                $scope.users = response.data;
             },
             error => {
                 console.log(error);
             });
        }
        
        $scope.removeUser = function(userId){
        	UserService.removeUser(userId).then(response => {
        		vm.findAll();        		
        		alert('Usuario excluido com sucesso')
        	},
        	error => {
        		alert(error);
        	});
        }

        $scope.editUser = function(userId){
            $location.path(`/user/${userId}`);
        }
        
        init();
        
        function init(){
            vm.findAll();            
         }
         

    }

}());