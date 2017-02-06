
app.controller('teamController', function($scope, $http) {
  $scope.bgimg = "./assests/images/stadium-at-night.jpg";
    $http.get("ipl2016_json.json")
    .then(function(response) {
        $scope.teams = response.data;
        console.log(response.data);
    });
});

app.controller('playerController', function($scope, $routeParams, $http) {
  $http.get("ipl2016_json.json")
  .then(function(response) {
      var teams = response.data;
<<<<<<< HEAD
      console.log(teams[$stateParams.id]);
      $scope.players=teams[$stateParams.id].team_players;

  });
});
=======
      console.log(teams[$routeParams.id]);
      $scope.players=teams[$routeParams.id].team_players;

  });
});
//     .success(function(response) {
//     $scope.teams = response.data;
//     console.log(response.data);
//      $scope.players = response.data[$routeParams.id].team_players;
//      console.log(response.data[$routeParams.id].team_players);
//         $scope.id = response.data[$routeParams.id].id;
//
//     });
// });
>>>>>>> 60df35d6ae1195ea0c71996faa0da0fdfa0bda85
