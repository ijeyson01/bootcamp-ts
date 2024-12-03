

export class MyClassPerson {

    //private name: string;
    //private lastName: string;
    //private birthdate?: string;

    // const objectMyClassPerson: MyClassPerson = new MyClassPerson('Jeyson', 'Jaramillo', '2000-00-00');
    /*constructor(name: string, lastName: string, birthdate: string){ 
        this.name = name;
        this.lastName = lastName;
        this.birthdate = birthdate
    }*/

    /*constructor(name: string, lastName: string){
        this.name = name;
        this.lastName = lastName
    }*/

    /* const objectMyClassPerson: MyClassPerson = new MyClassPerson('Jeyson', 'Jaramillo', '2000-00-00')
     constructor(
         private name: string, 
         private lastName: string, 
         private birthDate?: string) {} */

    // const objectMyClassPerson: MyClassPerson = new MyClassPerson('Jeyson', 'Jaramillo')
    constructor(
        private name: string,
        private lastName: string,
        private birthDate?: string) { }

    getName() { 
        return this.name; 
    }

    setName(name: string) { 
        this.name = name;
    }

    getLastName(){
        return this.lastName;
    }

    setLastName(lastName: string) {
        this.lastName = lastName;
    }

    getBirthDate(){
        return this.birthDate;
    }

    setBirthDate(birthDate: string) {
        this.birthDate = birthDate;
    }
   
}




