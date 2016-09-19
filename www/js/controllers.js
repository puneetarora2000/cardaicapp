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

  //Initialize arrays
  $scope.survey = {};
  //All scores would be stored in this object which is accessible anywhere in this contoller
  $scope.scores = {};
//Walking
// /ComputeSugaryScore
//ComputeAlcoholcore
//ComputeFattyScore
//ComputeYogacore


$scope.ComputeFattyScore = function() {
    switch($scope.survey.Fatty) {
      case  "2":
        $scope.scores..Fatty = 0.5 ;// No     
        break;  
      default:
        $scope.scores.Fatty = 10 ;// Yes     
        break;
    }
    console.log($scope.scores.Fatty);
  }


$scope.ComputeAlcoholScore = function() {
    switch($scope.survey.Alcohol) {
      case  "2":
        $scope.scores..Alcohol = 0.5 ;// No     
        break;  
      default:
        $scope.scores.Alcohol = 10 ;// Yes     
        break;
    }
    console.log($scope.scores.Alcohol);
  }


$scope.ComputeSugaryScore = function() {
    switch($scope.survey.Sugary) {
      case  "2":
        $scope.scores..Sugary = 0.5 ;// No     
        break;  
      default:
        $scope.scores.Sugary = 10 ;// Yes     
        break;
    }
    console.log($scope.scores.Sugary);
  }





$scope.ComputeYogacore = function() {
    switch($scope.survey..Walking.Time) {
      case  "2":
        $scope.scores.Walking.Time = 0.5 ;// No     
        break;  
      default:
        $scope.scores.Walking.Time = 10 ;// Yes     
        break;
    }
    console.log($scope.scores..Walking.Time);
  }




$scope.ComputeCyclingScore = function() {
    switch($scope.survey.Cycling) {
      case  "2":
        $scope.scores.Cycling = 0.5 ;// No     
        break;  
      default:
        $scope.scores.Cycling = 10 ;// Yes     
        break;
    }
    console.log($scope.scores.Cycling);
  }





//ComputeCyclingScore

$scope.ComputeCyclingScore = function() {
    switch($scope.survey.Cycling) {
      case  "2":
        $scope.scores.Cycling = 0.5 ;// No     
        break;  
      default:
        $scope.scores.Cycling = 10 ;// Yes     
        break;
    }
    console.log($scope.scores.Cycling);
  }





$scope.ComputePhysicalExerciseScore = function() {
    switch($scope.survey.PhysicalExercise.Time) {
      case  "2":
        $scope.scores.PhysicalExercise.Time = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.PhysicalExercise.Time = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.PhysicalExercise.Time);
  }





$scope.ComputeMeditationScore = function() {
    switch($scope.survey.Meditation.Time) {
      case  "2":
        $scope.scores.Meditation.Time = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.Meditation.Time = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.Meditation.Time);
  }




$scope.ComputeThyroidScore = function() {
    switch($scope.survey.Adrenal) {
      case  "2":
        $scope.scores.Thyroid = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.Thyroid = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.Thyroid);
  }

$scope.ComputeOsteoporosisScore = function() {
    switch($scope.survey.Adrenal) {
      case  "2":
        $scope.scores.Osteoporosis = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.Osteoporosis = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.Osteoporosis);
  }


//ComputeAdrenalScore
$scope.ComputeAdrenalScore = function() {
    switch($scope.survey.Adrenal) {
      case  "2":
        $scope.scores.Adrenal = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.Adrenal = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.Adrenal);
  }

  $scope.ComputeInsomniaScore = function() {
    switch($scope.survey.Insomnia) {
      case  "2":
        $scope.scores.Insomnia = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.Insomnia = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.Insomnia);
  }

$scope.ComputeMoodDisorderScore = function() {
    switch($scope.survey.MoodDisorder) {
      case  "2":
        $scope.scores.MoodDisorder = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.MoodDisorder = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.MoodDisorder);
  }
  

  $scope.ComputeHeartDiseaseScore = function() {
    switch($scope.survey.HeartDisease) {
      case  "2":
        $scope.scores.HeartDisease = 0.5 ;// No Heart Problem 
        break;  
      default:
        $scope.scores.HeartDisease = 10 ;// Yes Heart Problem 
        break;
    }
    console.log($scope.scores.HeartDisease);
  }


  //Called in change in survey.Weight invokes the associated ng-change function 
  //  Note: in templates theres is Weight.BMI present and these isn't a value 40-50 in dropdown
  $scope.ComputeWeightScore = function() {
    switch($scope.survey.Weight.BMI) {
      case  "30-45":
        $scope.scores.Weight = 0.5 ;// Low/ideal Risk Score
        break;  
      default:
        $scope.scores.Weight = 10 ;// High  Risk Score
        break;
    }
    console.log($scope.scores.Weight);
  }
//Called in change in survey.BloodPressure.DiastolicReading invokes the associated ng-change function
 $scope.ComputeLowBloodPressure = function() {
   switch($scope.survey.BloodPressure.DiastolicReading) {
     case  "70-90":
        $scope.scores.LowBloodPressure = 0.5 ;// Low/ideal Risk Score
     break;  
     default:
        $scope.scores.LowBloodPressure = 10;// High  Risk Score
     break;
   }
   console.log($scope.scores.LowBloodPressure);
 }
 //Called in change in survey.BloodPressure.SystolicReading invokes the associated ng-change function
 $scope.ComputeHighBloodPressure = function(){
   switch($scope.survey.BloodPressure.SystolicReading) {
     case  "140-190":
       $scope.scores.HighBloodPressure = 0.5 ;// Low/ideal Risk Score
     break;  
     default:
       $scope.scores.HighBloodPressure = 10 ;// High  Risk Score
     break;
   }
   console.log($scope.scores.HighBloodPressure);
 }

$scope.ComputeAgeScore = function() {

     
      if ($scope.survey.Gender=="1")  
       {
          switch($scope.survey.Insomnia.Age)
          {
            // Add More age cases befor the default case. Take care of curly braces of switch statement
            // Some values mismatch with the values in template, check for them
            case "20-30" : //Age Case 1

                switch ($scope.survey.Height){
                  case "157-182": //1
                    if($scope.Weight == "20-29") {
                      $scope.scores.AgeScore = 0.5;
                    }
                  break;  
                  case "157-172":
                    $scope.scores.AgeScore = 10;
                  break;  
                  case "157-167":
                    $scope.scores.AgeScore = 10;
                  break;  
                  default:
                    $scope.scores.AgeScore = 5;
                  break; 
                }
               switch ($scope.survey.Weight){
                  case "50-60": //1
                    $scope.scores.AgeScore = 10;
                  break;  
                  case "60-70":
                    $scope.scores.AgeScore = 10;
                  break;  
                  case "65-75":
                    $scope.scores.AgeScore = 10;
                  break;  
                  case "70-80":
                    $scope.scores.AgeScore = 10;
                  break;  
                  case "60-72":
                    $scope.scores.AgeScore = 10;
                  default:
                    $scope.scores.AgeScore = 10;  
                  break;
               }
           default:
          //  Set value in case of age lower than 20 and higher than 29
            $scope.scores.AgeScore = 0;       
       }   
  }
  console.log($scope.scores.AgeScore);
}



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
