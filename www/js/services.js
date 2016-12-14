angular.module('starter.services',['ngCookies'])
 
 
.factory('CardiacStore', function($http, $q, $cookies, $ionicLoading, $ionicPopup) {
  
  var surveys = [];

  return {
    list: function(surveyId) {
      
      $ionicLoading.show({
        template: '<ion-spinner icon="android" class="light"></ion-spinner><br/>Fetching data.'
      });
     // console.log(userId);
        var promise = $http.get('http://138.197.135.49:8000/cardiacdata/' + surveyId)
        .then(function(response) {
          $ionicLoading.hide();
          return response.data;
        }, function(error) {
            $ionicLoading.hide();
            $ionicPopup.alert({
              title: "No Cardiac Assessment Surveys Done",
              content: "Currently No Cardia Assessment Surveys Done !."
            });
        });
     
      return promise;
    },

    get: function(){

      return promise;
    },

    saveData: function(surveydata) {

      $ionicLoading.show({
        template: '<ion-spinner icon="android" class="light"></ion-spinner><br/>Saving Cardia Data for the selected survey!'
      });

        var headers =                  
             {'Authorization': 'Token de0a07038cc2ec8649377d3e4f9e0a52f10e9462',
               'Accept':'application/json',
               'X-CSRFToken': $cookies['csrftoken'],
           };
     
            console.log(JSON.stringify(surveydata));
            console.log($cookies['csrftoken']);
         var  url= 'http://138.197.135.49:8000/cardiacpost/';
     // var  url= 'http://localhost:8000/cardiacpost/';
      var promise = $http.post(url,surveydata,headers).success(function(response){
        
          console.log(response);
          $ionicLoading.hide();
          // return response.data;
          $ionicPopup.alert({

              title: "Data Saved",
              content: "Save Data , Check Server now."

            });
        }).error(function(err){
            console.log(err.error);
            $ionicLoading.hide();
            $ionicPopup.alert({

              title: "No Data",
              content: "Cannot save  Data. Kindly  try again."

            });
        });
      return promise;
    },

  };
})
 