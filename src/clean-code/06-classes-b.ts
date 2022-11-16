(() => {

    //No aplicando principio de responsabilidad única

    type Gender = 'M' | 'F';

    interface PersonProps {
        name: string;
        gender: Gender;
        birthdate: Date;
    }

    class Person {

        public name: string;
        public gender: Gender;
        public birthdate: Date;

        constructor({ name, gender, birthdate }: PersonProps) {
            this.name = name;
            this.gender = gender;
            this.birthdate = birthdate;
        }

    }

    interface UserProps {
        persona: Person;
        email: string;
        role: string;
        lastAcces: Date;
    }

    class User extends Person {

        public email: string;
        public role: string;
        private lastAcces: Date;

        constructor({ persona, email, role }: UserProps) {
            super(persona);
            this.email = email;
            this.role = role;
            this.lastAcces = new Date;
        }

        checkCredentials() {
            return true;
        }

    }

    // class UserSettings extends User {
    //     constructor(
    //         public workingDirectory: string,
    //         public lastOpenFolder: string,
    //         email: string,
    //         role: string,
    //         name: string,
    //         gender: Gender,
    //         birthdate: Date
    //     ) {
    //         super(email, role, name, gender, birthdate);
    //     }
    // }

    // const userSettings = new UserSettings(
    //     '/usr/home',
    //     '/home',
    //     'julianguerra92@gmail.com',
    //     'Admin',
    //     'Fernando',
    //     'M',
    //     new Date('1985-10-21')
    // )

    // console.log({ userSettings });

})()