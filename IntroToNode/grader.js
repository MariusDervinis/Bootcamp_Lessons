var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores); //should be 94

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2); //should be 68

function average(arr){
var sum = 0;
	//add up all scores
	for(i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	//get average score
	sum = sum / arr.length;
	//return and make round
return Math.round(sum) ;
}


console.log(average(scores));
console.log(average(scores2));