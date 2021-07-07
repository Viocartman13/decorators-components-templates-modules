import {classDecorator} from './class-decorator';

@classDecorator
class Person {
  firstName;
  lastName;

  constructor(firstName: any, lastName: any) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let asim = new Person("Asim", "Hussain");
// @ts-ignore
console.log(asim.customAddedProperty());
