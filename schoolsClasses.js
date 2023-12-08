class School {
  constructor(schname, schlevel, schnumberOfStudents) {
    this._name = schname;
    this._level = schlevel;
    this._numberOfStudents = schnumberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  quickFacts() {
    console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} level.`);
  }

  set numberOfStudents(studentNum) {
   if (typeof studentNum === 'number') {
    this._numberOfStudents = studentNum;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')  
        
    }
  }

  static pickSubstituteTeacher(substituteTeachers) {
    let teacherNum = Math.floor(Math.random() * substituteTeachers.length - 1);
    return substituteTeachers[teacherNum];
  }
}



// //sub class Primary
class Primary extends School {
  constructor(schname, level, numberOfStudents, pickupPolicy) {
    super(schname, level, numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  // get for pickupPolicy
  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//create new instance primary from school class
const woodvale = new Primary('Woodvale', 'Primary', 200, 'Parent or Guardian only');
console.log(School.pickSubstituteTeacher(["Mr Gordon", "Miss Brown", "Professor Plum", "David Placy"]));
console.log(woodvale.name);
console.log(woodvale.level);
console.log(woodvale.numberOfStudents);
woodvale.numberOfStudents = 199;
console.log(woodvale.numberOfStudents);
console.log(woodvale.pickupPolicy);
console.log(woodvale.quickFacts());

//sub class middle
class Middle extends School {
  constructor(schname, level, numberOfStudents) {
    super(schname, level, numberOfStudents);
  }
}

const kidderminster = new Middle('Kidderminster Middle School', 'Middle', 300);
console.log(kidderminster.name);
console.log(kidderminster.level);
console.log(kidderminster.numberOfStudents);
kidderminster.numberOfStudents = 275;
console.log(kidderminster.numberOfStudents);
console.log(kidderminster.quickFacts());


//sub class High
class High extends School {
  constructor(schname, level, numberOfStudents, sportsTeams) {
    super(schname, level, numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

const hagley = new High('West Hagley', 'High', 500, ['Rugby', 'Football', 'Squash', 'Cricket']);
console.log(hagley.name);
console.log(hagley.level);
console.log(hagley.numberOfStudents)
hagley.numberOfStudents = 499;
console.log(hagley.numberOfStudents)
console.log(hagley.sportsTeams.join(', '));
console.log(hagley.quickFacts());
