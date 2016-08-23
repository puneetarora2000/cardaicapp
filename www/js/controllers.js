angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('SurveyCtrl', function($scope, $ionicSlideBoxDelegate, $state, $ionicPlatform, $ionicPopup, $ionicScrollDelegate, $timeout){

  // $scope.LowBloodPressureSys = [];
  // for(var i=70; i<200; i+=20){
  //   val = i+'-';
  //   inc = i + 20;
  //   push = val + inc;
  //   $scope.LowBloodPressureSys.push(push);
  // }

  // $scope.LowBloodPressureDia = [];
  // for(var i=40; i<200; i+=20){
  //   val = i+'-';
  //   inc = i + 20;
  //   push = val + inc;
  //   $scope.LowBloodPressureDia.push(push);
  // }


   $scope.sfrequencies = [];
  for(var i=0; i<10; i+=2){
    val = i+'-';
    inc = i + 2;
    push = val + inc;
    $scope.sfrequencies.push(push);
  }


  //Slides functionalities
  $scope.frequencies = [];
  for(var i=0; i<100; i+=10){
    val = i+'-';
    inc = i + 10;
    push = val + inc;
    $scope.frequencies.push(push);
  }

  console.log($scope.frequencies);

  $scope.ages = [];
  for(var i=20; i<80; i+=10){
    val = i+'-';
    inc = i + 10;
    push = val + inc;
    $scope.ages.push(push);
  }


  function resizeElementHeight(element) {
    div2 = document.getElementById(element);
    console.log(div2.parentNode.offsetHeight);
    div2.style.height = div2.parentNode.offsetHeight+"px";
  }

  $scope.slideChanged = function() {
    $ionicScrollDelegate.scrollTop();
  
    $timeout( function() {
      $ionicScrollDelegate.resize();
    }, 50);
  };

  $scope.leftSwipe = function(index) {
    if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount() - 1) {
      $scope.submitButton = true;
      $scope.nextButton = true;
    } else {
      $scope.submitButton = false;
    }
    if($ionicSlideBoxDelegate.currentIndex() != 0){
      $scope.prevButton = false;
    }
  }
  $scope.rightSwipe = function(index) {
    $scope.submitButton = false; 
    $scope.nextButton = false;
    if($ionicSlideBoxDelegate.currentIndex() == 0){
      $scope.prevButton = true;
    }
  }

  $scope.prevButton = true;
  $scope.submitButton = false;
  $scope.next = function() {
    $ionicSlideBoxDelegate.next();
    //resizeElementHeight("slide" + $ionicSlideBoxDelegate.currentIndex());
    if($ionicSlideBoxDelegate.currentIndex() == $ionicSlideBoxDelegate.slidesCount() - 1) {
      $scope.submitButton = true;
      $scope.nextButton = true;
    } else {
      $scope.submitButton = false;
    }
    if($ionicSlideBoxDelegate.currentIndex() != 0){
      $scope.prevButton = false;
    }
  }
  $scope.previous = function() {
    $ionicSlideBoxDelegate.previous();
    console.log("slide" + $ionicSlideBoxDelegate.currentIndex());
    // resizeElementHeight("slide" + $ionicSlideBoxDelegate.currentIndex());
    $scope.submitButton = false; 
    $scope.nextButton = false;
    if($ionicSlideBoxDelegate.currentIndex() == 0){
      $scope.prevButton = true;
    }

  }
  function sync(SurveyData) {
    console.log(SurveyData);
  }
  $scope.save = function(SurveyData) {
      SurveyData.submitted_by = $scope.user_id;
      SurveyData.age_of_vehicle = calculate_age(SurveyData.date_of_regn);
      
      //console.log(SurveyData.age_of_vehicle);
      SurveyStore.update(SurveyData);
      $state.go("surveys.spot");
  };

});
