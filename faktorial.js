const faktorial = (n) => {
	
	//factorial recursive example
	// if (n == 0) {
	// 	return 1;
	// }else{
	// 	return n * faktorial(n-1)
	// }

	//using ternary operator
	return((n == 0) ? (1): n * faktorial(n - 1));

}

console.log(faktorial(5)); 
console.log(faktorial(7)); 