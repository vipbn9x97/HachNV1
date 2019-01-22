class Vecto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    };
    get getX(){return this.x};
    get getY(){return this.y};
    set setX(x){this.x = x};
    set setY(y){this.y = y};
}

Vecto.prototype.plus = function(vect){
    return new Vecto(this.x + vect.x, this.y + vect.y);
};

Vecto.prototype.minus = function(vect){
    return new Vecto(this.x - vect.x, this.y - vect.y);
};

Vecto.prototype.length = function(){
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
};

console.log(new Vecto(1, 2).plus(new Vecto(2, 3)));
console.log(new Vecto(1, 2).minus(new Vecto(2, 3)));
console.log(new Vecto(3, 4).length());