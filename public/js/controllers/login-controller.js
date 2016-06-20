angular.module('timer')
.controller('loginCtrl', function ($state, authentication) {
  var vm = this;

  vm.credentials = {
    email : "",
    password : ""
  };

  vm.onSubmit = function () {
    authentication
    .login(vm.credentials)
    .error(function(err){
      alert(err);
    })
    .then(function(){
      $state.go('new');
    });
  };
});