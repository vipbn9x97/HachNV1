function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}
function getAppleInfo() {
    return this.color + ' ' + this.type + ' apple';
}

