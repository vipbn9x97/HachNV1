function pascal(n,k){
	if (k==0|| n>k) {
		return 1;
	}
	else{
		return pascal(n-1,k)+pascal(n-1,k-1);
	}
}
function main(n) {
	for(i=0;i<=n;i++){
		for (var j = 0; j<=i;j++) {
			console.log(pascal(i,j));
		}
		console.log("\n");
	}
}
main(5)