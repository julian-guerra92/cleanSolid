(() => {

    //No aplicando principio de responsabilidad única

    type Gender = 'M' | 'F';

    //Forma larga
    class Person {
        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor(name: string, gender: Gender, birthdate: Date) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }
    }

    //Forma corta
    class Person2 {
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date) { }
    }

    const newPerson = new Person('Julián Rodríguez', 'M', new Date('1992-11-10'));
    const newPerson2 = new Person2('Julián Rodríguez', 'M', new Date('1992-11-10'));

    console.log({ newPerson });
    console.log({ newPerson2 });

    class User extends Person {

        private lastAcces: Date;

        constructor(
            public email: string,
            public role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(name, gender, birthdate);
            this.lastAcces = new Date;
        }

        checkCredentials(){
            return true;
        }

    }

    class UserSettings extends User {
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ){
            super(email, role, name, gender, birthdate);
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'julianguerra92@gmail.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
    )

    console.log({userSettings});

})()