const faktorial = (n) => {
	if (n == 0) {
		return 1;
	}else {
		return n * faktorial(n-1)
	}
}

console.log(faktorial(5)); 
console.log(faktorial(7)); 