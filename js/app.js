var app = angular.module('myApp', []); 
app.controller('taskCtrl', function($scope) {
	$scope.txtmsrno = 3; 
	$scope.txtmname = 'next'; 
	var self = this;
	$scope.todos  = [
				      	{id:'1', name:'true'},
				      	{id:'2', name:'false'}
	      			  ];
	$scope.addTask = function(){
		if (!$scope.validateAdd()) {
			$scope.todos.push({
				id:$scope.txtmsrno, name:$scope.txtmname
			});
			$scope.reset();
		}
	};
	$scope.validateAdd = function(){
		var error = false;
		if($scope.txtmsrno == ''){
			alert("Srno can't be Empty");
			error = true;
		}
		if($scope.txtmname == ''){
			alert("Name can't be Empty");	
			error = true;
		}
		return error;
	}
	$scope.reset = function(){
		$scope.txtmsrno = ''; 
		$scope.txtmname = ''; 
	}
	$scope.editTask = function(task){
		console.log(task.id);
		var index = $scope.todos.indexOf(task);
		$scope.txtmsrno = task.id; 
		$scope.txtmname = task.name; 
		$scope.todos.splice(index, 1);
	}
	$scope.removeTask = function(task){
		var index = $scope.todos.indexOf(task);
		 $scope.todos.splice(index, 1);    
	}
    
});