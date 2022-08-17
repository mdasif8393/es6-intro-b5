class TeamMember{
    name;
    
    address;
    constructor(name, address){
        this.name = name;
        this.address = address;  
    }
}

class Support extends TeamMember{
    groupSupportTime;
    designation = 'Support Web Developer';
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a support session');
    }
}

class StudentCare extends TeamMember{
    designation = 'Care Web Developer';
    buildARoutine(student){
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember{
    codeEditor;
    designation = 'Neptune App Developer';
    constructor(name, address, codeEditor){
        super(name, address);
        this.codeEditor = codeEditor;
    }
    releaseApp(version){
        console.log(this.name, 'release app', version);
    }
}

const aamir = new Support('Aami Khan', 'BD', 11);
const salman = new Support('Salman Khan', 'Dubai', 4)

const alia = new StudentCare('Alia Bhatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'India', 'Android Studio');
ash.releaseApp('1.2.1');
// console.log(ash)

