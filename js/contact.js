var data =[
        {img:'steve-jobs.jpg',name:'Andy Anderson', mail: 'anderson@mail.ru'},
        {img:'steve-jobs.jpg',name:'Andy2 Anderson', mail: 'anderson@mail.ru'},
        {img:'steve-jobs.jpg',name:'Ben Anderson', mail: 'anderson@mail.ru'}];
function split_sort(data)
{
	var acc = {};
	var lacc = [];
	for(var a in data)
	{
 		if(acc[data[a].name[0]] == undefined)
    {
    	acc[data[a].name[0]] = [];
    	acc[data[a].name[0]].push(data[a]);
    	lacc.push(data[a].name[0])
    }
    else
    {
		acc[data[a].name[0]].push(data[a]);
	}
  }
	return [acc, lacc];
}
c = split_sort(data);
a = c[0];
b = c[1] 
angular.module('protectme', []).controller('contact', function($scope) {
    $scope.data = a;
    $scope.letter = b;
});