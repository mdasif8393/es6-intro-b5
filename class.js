class Support {
    name;
    designation = 'Support Web Developer';
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;  
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

const aamir = new Support('Aami Khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai')

aamir.startSession(); 
// console.log(aamir);
// console.log(salman);