class Group{
    constructor(){
        this.store = [];
    };
    static from(arr){
        let group = new Group;
        for(let i of arr){
            group.add(i);
        }
        return group;
    };
    add(element){
        if(!this.has(element)){
            this.store.push(element);
        }
    }
    delete(element){
        this.store = this.store.filter(ele => ele !== element );
    }
    has(element){
        return this.store.includes(element);
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
console.log(group.has(10));