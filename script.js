function firstNonRepeatedChar(str) {
	let t=0;
	for(let a=0; a<str.length; a++){
		let count=0;
		for(let b=0; b<str.length; b++){
			if(a==b){
				continue;
			}
			if(str[a]==str[b]){
				count++;
			}
		}
		if(count==0){
			return str[a];
		}
	}
	if(count==0){
			t++;
	}
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input));
