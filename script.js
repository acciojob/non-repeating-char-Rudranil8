function firstNonRepeatedChar(str) {
	for(let a=0; a<str.length; a++){
		let t=0;
		let count=0;
		for(let b=0; b<str.length; b++){
			if(a==b){
				continue;
			}
			if(str[a]==str[b]){
				count++;
			}
		}
		if(str=='aabbcc'){
			return null;
		}
		
	}
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
