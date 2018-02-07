function toBin(number){
	var current = ''
	while (number > 0){
        if (number % 2 === 1){
            number = parseInt(number/2);
            current += '1';
        } else {
            number = number / 2;
            current += '0';
        }
    }
    return current.split("").reverse().join("");
}
