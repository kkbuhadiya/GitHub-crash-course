// methord and super

class Myname {
    name = "keshav kumar";
    baseName(){
        return this.name;
    }
}

class subNameClass extends Myname {
    subName() {
        return super.baseName();
    }        
}

const userName = new subNameClass();
console.log( userName.subName());

// comput 
const bar = {
    foo0: function() {
        return 0;
    },
    foo1:()=>{
        return 1;
    },
    ["foo"+2](){
        return 2;
    },
    foo3(){
        return 3;
    }

}

console.log(bar);
console.log(bar.foo0());
console.log(bar.foo1());
console.log(bar.foo2());
console.log(bar.foo3());
