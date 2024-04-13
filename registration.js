class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getInfo(){
        console.log(`This is ${this.name} with the email ${this.email}.`);
    }
}
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    getInfo(){
        console.log(`This is ${this.name} for the ${this.level} Bootcamp.`);
    }
    registerStudent(studentToRegister) {
        if ((studentToRegister.name === undefined) || (studentToRegister.email === undefined)) {
            return false;
        }
        for (const s of this.students) {
                if (s === studentToRegister) {
                    console.log(`The name: ${studentToRegister.name} has already registered.`);
                    return false;
                }
            }
            console.log(`${studentToRegister.name} has now been registered for the ${this.level} bootcamp.`)
            this.students.push(studentToRegister);
            return true;
    }
    removeStudent(studentEmail){
        for (let index = 0; index < this.students.length; index++) {
            if(studentEmail === this.students[index].email){
                this.students.splice(index, 1);
            }
        }
    }
    listStudents(){
        if(this.students.length > 0){
            console.log(`The students registered in ${this.name} are: `);
            for (const s of this.students) {
                console.log(`${s.name} ${s.email}`);
            }
            return true;
        }else{
            console.log(`No students are registered to the ${this.name} bootcamp.`);
            return false;
        }
    }
}
testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }
    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }    
    bootcamp.removeStudent('babs@bunny.com');
    bootcamp.listStudents();
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }

};
runTest(reactBootcamp, testStudent);