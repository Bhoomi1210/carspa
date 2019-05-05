var app=angular.module("myApp",[]);
app.controller("Controller1",function($scope,$http){

  $http.get("http://localhost:3000/account").then(function(response){
    console.log(response.data);
    $scope.acc=response.data;
});
});
app.controller("Controller2",function($scope,$http){

    $http.get("http://localhost:3000/offer").then(function(response){
      console.log(response.data);
      $scope.applist=response.data;

    });
});
app.controller("Controller3",function($scope,$http){
  console.log("entered submit offer");
  $scope.submitOffer=function(){
    var data={offer:$scope.offerenter};
    console.log(data);
    $http.post("http://localhost:3000/offeradd",data).then(function(response){
});
}
});

app.controller("Controller4",function($scope,$http){

    $http.get("http://localhost:3000/review").then(function(response){
      console.log(response.data);
      $scope.r=response.data;
      console.log($scope.r);

    });
});
app.controller("Controller5",function($scope,$http){
  console.log("entered review");
  $scope.submitreview=function(){
    var data1={review:$scope.reviewenter};
    console.log(data1);
    $http.post("http://localhost:3000/reviewadd",data1).then(function(response){
});
}
});

app.controller("Controller6",function($scope,$http){
console.log("controller 6 called");
    //$http.get("http://localhost:3000/book").then(function(response){
      // console.log(response.data);
       //$scope.book=response.data;
    //
    // });

//     $scope.submitappointment=function(){
//       var data2={appointname:$scope.appointname,
//         appointphno:$scope.appointphno,
//         appointemail:$scope.appointemail,
//         appointadress:$scope.appointadress,
//         appointcarregno:$scope.appointcarregno,
//         appointservice:$scope.appointservice};
//       console.log(data2);
//     $http.post("http://localhost:3000/Appointment",data2).then(function(response){
//
//
//   });
//
// }

$scope.findAppointment=function(){
console.log($scope.appointmentId);
  let data1={
    appId:$scope.appointmentId,
  }
  console.log(data1);
  $http.post("http://localhost:3000/fetchAppointment",data1).then(function(response){
    $scope.appointname=response.data[0].name;
    $scope.appointphno=response.data[0].number;
    $scope.appointemail=response.data[0].email;
    $scope.appointcarregno=response.data[0].carReg;
    $scope.appointadress=response.data[0].address;
     $scope.appointservice=response.data[0].service;
    //console.log($scope.appointData[0].name);
});
}
});



app.controller("Controller7",function($scope,$http){
  console.log("entered book");
  $scope.submitbook=function(){
    var data2={nameenter:$scope.nameenter,
      phnoenter:$scope.phnoenter,
      enteremail:$scope.enteremail,
      entercarreg:$scope.entercarreg,
      enteraddress:$scope.enteraddress,
      enterservice:$scope.enterservice,
      enterid:$scope.enterid,
      mrngslotid:$scope.mrngslotid,
      noonslotid:$scope.noonslotid
    };
    $scope.msg="submitted success";

    $http.post("http://localhost:3000/bookadd",data2).then(function(response){
      $scope.msg="submitted success";
      console.log(response.data);
});
}
});

app.controller("Controller8",function($scope,$http){

    $http.get("http://localhost:3000/parts").then(function(response){
      console.log(response.data);
      $scope.parts=response.data;

    });
});
app.controller("Controller9",function($scope,$http){
  console.log("entered parts");
  $scope.subitpartsreplaced=function(){
    var data3={partsenter1:$scope. partsenter1,
    partsenter2:$scope. partsenter2,
  partsenter3:$scope. partsenter3,
partsenter4:$scope. partsenter4,
partsenter5:$scope. partsenter5,
partsenter6:$scope. partsenter6,
 partsenter7:$scope. partsenter7,
partsenter8:$scope. partsenter8};
    console.log(data3);
    $http.post("http://localhost:3000/partsadd",data3).then(function(response){
});
}
});
app.controller("Controller10",function($scope,$http){

    $http.get("http://localhost:3000/userlogin").then(function(response){
      console.log(response.data);
      $scope.userlog=response.data;

    });
});


app.controller("Controller11",function($scope,$http){
  console.log("entered login");
  $scope.submituserlogin=function(){

    var data4={emailenter:$scope.emailenter,
    passwordenter:$scope.passwordenter,
    confirmpasswordenter:$scope.confirmpasswordenter};
    console.log(data4);
    $http.post("http://localhost:3000/userloginadd",data4).then(function(response){
});
  }
});
app.controller("LoginController",function($scope,$http,$window){
  $scope.validateUser=function(){
    var data={
      emailenter:$scope.emailenter,
      passwordenter:$scope.passwordenter
    }
    $http.post("http://localhost:3000/userlogin",data).then(function(response){
        if(response.data){
          $window.location.href="appoint.html"
        }
    });
  }
});


app.controller("Controller12",function($scope,$http){

    $http.get("http://localhost:3000/storelogin").then(function(response){
      console.log(response.data);
      $scope.storelog=response.data;

    });
});


app.controller("Controller13",function($scope,$http){
  console.log("entered storelogin");
  $scope.submitstorelogin=function(){
    var data5={emailenter1:$scope.emailenter1,
    passwordenter1:$scope.passwordenter1,
    confirmpasswordenter1:$scope.confirmpasswordenter1};
    console.log(data5);
    $http.post("http://localhost:3000/storeloginadd",data5).then(function(response){
});
}
});

app.controller("storeLoginController",function($scope,$http,$window){
  $scope.storevalidateUser=function(){
    var data={
      emailenter1:$scope.emailenter1,
      passwordenter1:$scope.passwordenter1
    }
    console.log("login for hr");
    console.log(data);
    $http.post("http://localhost:3000/storelogin",data).then(function(response){
        if(response.data){
          $window.location.href="hr.html"
        }
    });
  }
});


app.controller("Controller14",function($scope,$http){

    $http.get("http://localhost:3000/accountlogin").then(function(response){
      console.log(response.data);
      $scope.accountlog=response.data;

    });
});


app.controller("Controller15",function($scope,$http){
  console.log("entered accountlogin");
  $scope.submitaccountlogin=function(){
    var data6={emailenter2:$scope.emailenter2,
    passwordenter2:$scope.passwordenter2,
    confirmpasswordenter2:$scope.confirmpasswordenter2};
    console.log(data6);
    $http.post("http://localhost:3000/accountloginadd",data6).then(function(response){
});
}
});

app.controller("accountLoginController",function($scope,$http,$window){
  $scope.accountvalidateUser=function(){
    var data={
      emailenter2:$scope.emailenter2,
      passwordenter2:$scope.passwordenter2
    }
    console.log("login for hr");
    console.log(data);
    $http.post("http://localhost:3000/accountlogin",data).then(function(response){
        if(response.data){
          $window.location.href="accountant.html"
        }
    });
  }
});


app.controller("Controller16",function($scope,$http){

    $http.get("http://localhost:3000/teamleaderlogin").then(function(response){
      console.log(response.data);
      $scope.teamleaderlog=response.data;

    });
});


app.controller("Controller17",function($scope,$http){
  console.log("entered teamleaderlogin");
  $scope.submitteamleaderlogin=function(){
    var data7={emailenter3:$scope.emailenter3,
    passwordenter3:$scope.passwordenter3,
    confirmpasswordenter3:$scope.confirmpasswordenter3};
    console.log(data7);
    $http.post("http://localhost:3000/teamleaderloginadd",data7).then(function(response){
});
}
});

app.controller("teamleaderLoginController",function($scope,$http,$window){
  $scope.teamleadervalidateUser=function(){
    var data={
      emailenter3:$scope.emailenter3,
      passwordenter3:$scope.passwordenter3
    }
    console.log("login for teamleader");
    console.log(data);
    $http.post("http://localhost:3000/teamleaderlogin",data).then(function(response){
        if(response.data){
          $window.location.href="tl.html"
        }
    });
  }
});
