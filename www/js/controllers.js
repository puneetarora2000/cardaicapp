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

.controller('SurveyCtrl', function($scope, $ionicSlideBoxDelegate, $state, $ionicPlatform, $ionicPopup, $ionicScrollDelegate, $timeout, CardiacStore){

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
  var scores = {};
  $scope.scores = {};

 $scope.ComputeWalkingScore = function() {
    switch($scope.survey.Walking.Time) {
      case  "30-45":
        scores['Walking'] = 0.5 ;// Low/ideal Risk Score
        break;  
      default:
        scores['Walking'] = 10 ;// High  Risk Score
        break;
    }
    console.log(scores['Walking']);
  }

$scope.ComputeFattyScore = function() {
    switch($scope.survey.Fatty) {
      case  "0-2":
         scores['Fatty'] = 0.5 ;       
        break;  
      default:
         scores['Fatty']= 10 ;      
        break;
    }
    console.log(scores['Fatty']);
  }


$scope.ComputeAlcoholScore = function() {
    switch($scope.survey.Alcohol) {
      case  "0-2":
         scores['Alcohol'] = 0.5 ;// No     
        break;  
      default:
        scores['Alcohol'] = 10 ;// Yes     
        break;
    }
    console.log(scores['Alcohol']);
  }


$scope.ComputeSugaryScore = function() {
    switch($scope.survey.Sugary) {
      case  "0-2":
        scores['Sugary'] = 0.5 ;// No     
        break;  
      default:
        scores['Sugary'] = 10 ;// Yes     
        break;
    }
    console.log(scores['Sugary']);
  }





$scope.ComputeYogaScore = function() {
    switch($scope.survey.Yoga.Time) {
      case  "2":
        scores['Yoga'] = 0.5 ;// No     
        break;  
      default:
        scores['Yoga'] = 10 ;// Yes     
        break;
    }
    console.log(scores['Yoga']);
  }

//ComputeCyclingScore

$scope.ComputeCyclingScore = function() {
    switch($scope.survey.Cycling) {
      case  "2":
        scores['Cycling'] = 0.5 ;// No     
        break;  
      default:
        scores['Cycling'] = 10 ;// Yes     
        break;
    }
    console.log(scores['Cycling']);
  }





$scope.ComputePhysicalExerciseScore = function() {
    switch($scope.survey.PhysicalExercise) {
      case  "20-30":
        scores['PhysicalExercise'] = 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['PhysicalExercise']= 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['PhysicalExercise']);
  }


//ComputeSuplimentsScore//ComputeCaffeineConsumers

$scope.ComputeCaffeineConsumers = function() {
    switch($scope.survey.isCaffeineConsumers) {
      case  "0-2":
        scores['isCaffeineConsumers'] = 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['isCaffeineConsumers'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['isCaffeineConsumers']);
  }

$scope.ComputeSuplimentsScore = function() {
    switch($scope.survey.Supliments) {
      case  "0-2":
        scores['Supliments'] = 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['Supliments'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['Supliments']);
  }



$scope.ComputeMeditationScore = function() {
    switch($scope.survey.Meditation.Time) {
      case  "2":
        scores['Meditation'] = 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['Meditation'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['Meditation']);
  }




$scope.ComputeThyroidScore = function() {
    switch($scope.survey.Thyroid) {
      case  "2":
        scores['Thyroid'] = 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['Thyroid']= 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['Thyroid']);
  }

$scope.ComputeOsteoporosisScore = function() {
    switch($scope.survey.Osteoporosis) {
      case  "2":
        scores['Osteoporosis'] = 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['Osteoporosis'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['Osteoporosis']);
  }


//ComputeAdrenalScore
$scope.ComputeAdrenalScore = function() {
    switch($scope.survey.Adrenal) {
      case  "2":
        scores['Adrenal']= 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['Adrenal'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['Adrenal']);
  }

  $scope.ComputeInsomniaScore = function() {
    switch($scope.survey.Insomnia) {
      case  "2":
         scores['Insomnia'] = 0.5 ;// No Heart Problem 
        break;  
      default:
         scores['Insomnia'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['Insomnia']);
  }

$scope.ComputeMoodDisorderScore = function() {
    switch($scope.survey.MoodDisorder) {
      case  "2":
        scores['MoodDisorder']  = 0.5 ;// No Heart Problem 
        break;  
      default:
        scores['MoodDisorder'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['MoodDisorder']);
  }
  

  $scope.ComputeHeartDiseaseScore = function() {
    switch($scope.survey.HeartDisease) {
      case  "2":
        scores['HeartDisease'] = 0.5 ;// No Heart Problem 
        break;  
      default:
       scores['HeartDisease'] = 10 ;// Yes Heart Problem 
        break;
    }
    console.log(scores['HeartDisease']);
  }


  //Called in change in survey.Weight invokes the associated ng-change function 
  //  Note: in templates theres is Weight.BMI present and these isn't a value 40-50 in dropdown
  $scope.ComputeWeightScore = function() {
    switch($scope.survey.Weight.BMI) {
      case  "30-45":
        scores['Weight'] = 0.5 ;// Low/ideal Risk Score
        break;  
      default:
        scores['Weight'] = 10 ;// High  Risk Score
        break;
    }
    console.log(scores['Weight']);
  }
//Called in change in survey.BloodPressure.DiastolicReading invokes the associated ng-change function
 $scope.ComputeDiastolicReading = function() {
   switch($scope.survey.DiastolicReading) {
      case  "70-90":
        scores['DiastolicReading'] = 0.5 ;// Low/ideal Risk Score
     break;  
     default:
        scores['DiastolicReading'] = 10;// High  Risk Score
     break;
   }
   console.log(scores['DiastolicReading']);
 }
 //Called in change in survey.BloodPressure.SystolicReading invokes the associated ng-change function
 $scope.ComputeSystolicReading = function(){
   switch($scope.survey.SystolicReading) {
     case  "140-190":
       scores['SystolicReading'] = 0.5 ;// Low/ideal Risk Score
     break;  
     default:
       scores['SystolicReading'] = 10 ;// High  Risk Score
     break;
   }
   console.log(scores['SystolicReading']);
 }

//ComputeLowDensityLipoProteinScore
  $scope.ComputeLowDensityLipoProteinScore = function(){
   switch($scope.survey.LowDensityLipoProtein) {
     case  "140-190":
       scores['LowDensityLipoProtein']= 0.5 ;// Low/ideal Risk Score
     break;  
     default:
       scores['LowDensityLipoProtein'] = 10 ;// High  Risk Score
     break;
   }
   console.log(scores['LowDensityLipoProtein']);
 }




//ComputeHighDensityLipoProteinScore
  $scope.ComputeHighDensityLipoProteinScore = function(){
   switch($scope.survey.HighDensityLipoProtein) {
     case  "140-190":
       scores['HighDensityLipoProtein'] = 0.5 ;// Low/ideal Risk Score
     break;  
     default:
       scores['HighDensityLipoProtein'] = 10 ;// High  Risk Score
     break;
   }
   console.log(scores['HighDensityLipoProtein']);
 }




//ComputeTotalCholesterolScore
  $scope.ComputeVeryLowDensityLipoProteinScore = function(){
   switch($scope.survey.VeryLowDensityLipoProtein) {
     case  "140-190":
       scores['VeryLowDensityLipoProtein'] = 0.5 ;// Low/ideal Risk Score
     break;  
     default:
       scores['VeryLowDensityLipoProtein'] = 10 ;// High  Risk Score
     break;
   }
   console.log(scores['VeryLowDensityLipoProtein']);
 }


//ComputeTotalCholesterolScore
  $scope.ComputeTotalCholesterolScore = function(){
   switch($scope.survey.TotalCholesterol) {
     case  "140-190":
       scores['TotalCholesterol'] = 0.5 ;// Low/ideal Risk Score
     break;  
     default:
      scores['TotalCholesterol'] = 10 ;// High  Risk Score
     break;
   }
   console.log(scores['TotalCholesterol']);
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
                      scores['AgeScore'] = 0.5;
                    }
                  break;  
                  case "157-172":
                    scores['AgeScore'] = 10;
                  break;  
                  case "157-167":
                    scores['AgeScore'] = 10;
                  break;  
                  default:
                    scores['AgeScore'] = 5;
                  break; 
                }
               switch ($scope.survey.Weight){
                  case "50-60": //1
                   scores['AgeScore']= 10;
                  break;  
                  case "60-70":
                    scores['AgeScore'] = 10;
                  break;  
                  case "65-75":
                    scores['AgeScore'] = 10;
                  break;  
                  case "70-80":
                    scores['AgeScore'] = 10;
                  break;  
                  case "60-72":
                    scores['AgeScore'] = 10;
                  default:
                    scores['AgeScore'] = 10;  
                  break;
               }
           default:
          //  Set value in case of age lower than 20 and higher than 29
            scores['AgeScore'] = 0.5;       
       }   
  }
  console.log(scores['AgeScore']);
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
    
    if($ionicSlideBoxDelegate.currentIndex() == 7){
        scores['Diet'] = (scores['Fatty']+scores['Sugary']+scores['Supliments'])/3;
        scores['Hormonal']= (scores['Thyroid']+scores['Osteoporosis']+scores['Adrenal']+scores['HeartDisease']+scores['MoodDisorder']+scores['Insomnia'])/5; 
         $scope.data = [
        [scores['SystolicReading'], scores['AgeScore'],scores['Diet'], scores['isCaffeineConsumers'], scores['Alcohol'],scores['TotalCholesterol'],scores['Hormonal'],scores['PhysicalExercise'],scores['Weight']] 
            , ['0.5', '0.5', '0.5', '0.5', '0.5', '0.5' , '0.5' , '0.5']     ];                                                                             
    
    }
    console.log($ionicSlideBoxDelegate.currentIndex());
    console.log(scores);
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
  

  $scope.labels = ['BloodPressure', 'AgeScore', 'Diet', 'Smoking', 'Alcohol', 'TotalCholesterol', 'Hormonal Activity', 'Physical Activity' , 'Weight'];
  $scope.series = [ 'Actual Values','Ideal/Desired'];

  
  // var s2 = [scores['Walking'], scores['TotalCholesterol'],scores['Walking'], scores['TotalCholesterol'],scores['Walking'], scores['TotalCholesterol'],scores['Walking'], scores['TotalCholesterol']];
  // console.log(scores['Walking']);
   
  // $scope.data = [
  //   [50, 50, 50, 50, 50, 50, 50 ,50],
  //   [scores['Walking'], scores['TotalCholesterol'],scores['Walking'], scores['TotalCholesterol'],scores['Walking'], scores['TotalCholesterol'],scores['Walking'], scores['TotalCholesterol']]
  // ];
  $scope.save = function(survey) {

      CardiacStore.saveData(JSON.stringify(survey));
      $state.go("app.survey");
  };
})

      
.controller('ChartCtrl', function($scope, $ionicSlideBoxDelegate, $state, $ionicPlatform, $ionicPopup, $ionicScrollDelegate, $timeout){

});
