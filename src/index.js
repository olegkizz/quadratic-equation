module.exports = function solveEquation(equation) {
	var regex = /(-?[0-9]+)\s\*\sx\^2\s([\+\-])\s([0-9]+)\s\*\sx\s([\+\-])\s([0-9]+)/;
	var array = equation.match(regex);
	array.shift();
	if(array[1] == '-') array[2] *= -1;
	if(array[3] == '-') array[4] *= -1;
	var D = Math.pow(array[2],2) - 4*array[0]*array[4];
	var newarray = [Math.round((-array[2]+Math.sqrt(D))/(2*array[0])),
	Math.round((-array[2]-Math.sqrt(D))/(2*array[0]))]
	return newarray.sort(function(a,b){return a -b});
}
