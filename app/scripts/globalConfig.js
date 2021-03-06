(function(angular) {
  'use strict';

  angular
      .module('mobifixApp')
      .constant('globalConfig', {})
      .constant('credentials', [{"username":"admin","password":"Password1!"},{"username":"test","password":"#pa$$w0rd!"}])
      .constant('apiUrls', {"login":"https://mobfix.co.in/api/user/UserNameStatus","getallusers":"https://mobfix.co.in/api/user/GetAllUsers","register":"https://mobfix.co.in/api/User/InsertUserRegistrationDetails","userProfile":"https://mobfix.co.in/api/User/UpdateUserStatus","vendorRegister":"https://mobfix.co.in/api/Vendor/InsertVendorRegistrationDetails","vendorLogin":"https://mobfix.co.in/api/Vendor/VendorNameStatus","model":"https://mobfix.co.in/api/MobileVersion/GetMobileVersion","issueprice":"https://mobfix.co.in/api/IssuePrice/GetIssueprice","getallorders":"https://mobfix.co.in/api/Order/GetAllOrders","checkout":"http://www.instamojo.com/api/1.1/payment-requests/","allOrders":"https://mobfix.co.in/api/Order/GetAllOrders","allusers":"https://mobfix.co.in/api/user/GetAllUsers","allmobiletypes":"https://mobfix.co.in/api/MobileTypes/GetAllMobileTypes","myorders":"https://mobfix.co.in/api/Order/GetemailOrder","insertorder":"https://mobfix.co.in/api/Order/InsertOrderDetails","getuserDetails":"https://mobfix.co.in/api/user/getuserDetails","status":"https://mobfix.co.in/api/OrderStatus/GetOrderStatus","contactformDetails":"https://mobfix.co.in/zmailer.php","resetPassword":"https://mobfix.co.in/api/user/resetPassword","passwordresetsendEmail":"https://mobfix.co.in/passwordresetEmail.php"})

})(angular);