function stringChop(str, size) {
  // your code here
	if(!str){
		return[];
	}
	let chunks[];
	for(let i=;i<str.lenght;i=i+size){
		chunks.push(str.slice(i,i+size));
	}
	return chunks;
}
// Do not change the code below
// const str = prompt("Enter String.");
// const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
