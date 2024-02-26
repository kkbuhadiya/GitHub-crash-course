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
