function countBs(str){
var arr = str.split("");
var B = arr.filter(count=>count==='B')
return B.length;
}
console.log(countBs('BBBssss'));
function countChar(char, str) {
    var count = 0;
    for (var i = 0; i < char.length; i++) {
        if (char[i] === str)
            count++;
    }
    return count;
};
console.log(countChar("kakkerlak", "k"));