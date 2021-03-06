/**
 * @ngdoc function
 * @name mobifixApp.controller:registerCtrl
 * @description
 * # registerCtrl
 * Controller of the mobifixApp
 */
(function(angular, lodash) {
    'use strict';

  function registerControllerConstructor($location, $state, $rootScope, $uibModalInstance, credentials, httpDataService, commonModal) {

        var vm = this;
      vm.$state = $state;
      
      
       

    function openloginModal() {
      $uibModalInstance.close()

           $('#registerModal').hide();

            var commonResolves = commonModal.commonResolves({});
            var resolveAttributes = {
                resolve: angular.extend(commonResolves.accountData)
            };
            var modalCallBack = function () {
            
            };
            var modalDismissCallBack = function () {
            };
            commonModal.openModal('loginModal', resolveAttributes, modalCallBack, modalDismissCallBack);
        }
  
      function register() {
        vm.registerCred = {
          UserType: 1,
          LoginId: vm.username,
          Password: vm.password,
          NoOfAttempts: "",
          UserStatus: "",
          CrearedBy: 1,
          LastUpdateBy: 1,
          ContactPhoneID: "",
          ContactNumber: vm.ContactNumber,
          ContactStatus: "",
          AddByUserID: "",
          ChangedByID: "",
          LastLoginDate: "",
          CreatedDate: "",
          LastUpdateDate: "",
          FirstName: "",
          LastName: "",
          FullName: "",
          NamePrefix: "",
          Gender: "",
          AddDate: "",
          AddedByUserID: "",
          ChangedDate: "",
          ChangedByID: "",
          ContactAddrID: "",
          AddressLine1: "",
          AddressLine2: "",
          City: "",
          State: "",
          Country: "",
          ZIPCode: "",
          ContactStatusCD: "",
          ContactPhoneID: "10",
          CustID: 3,
          AddedDate: "NOW()",
          ChangeDate: "NOW()",
          ChangeByID: "1"
        }

        httpDataService.register(vm.registerCred).then(function (resposeObj) {
          if (resposeObj.status == 200) {
            $('#registerSuccess').css("display","block");
            $('#registrationForm')[0].reset();
                    } else if (resposeObj.status == 404) {
            // Error Scenarios
            $rootScope.$broadcast("registerbroadcast", { status: 404 });
           $('#registerFailure').css("display","block");
            $rootScope.userData = resposeObj.data;
          }
          else if (resposeObj.status == 500) {
            $('#registerFailuremsg').css("display","block").html(resposeObj.data.ExceptionMessage);
          }
        });
      }
      vm.register = register;
        vm.openloginModal = openloginModal;
    }
    angular.module('mobifixApp')
      .controller('registerCtrl', registerControllerConstructor);
  
})(window.angular, window._);
