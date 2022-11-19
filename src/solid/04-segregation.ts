
interface Bird {
    eat(): void;
}

//Segregación de las interfaz para evitar que se uso lo que no se necesite
interface FlyingBird {
    fly(): number; //Sólo se afecta las clases que lo implementan
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}


class Tucan implements Bird, FlyingBird {
    public eat(): void { }
    public fly(): number { return 100; }
}

class Humminbird implements Bird, FlyingBird {
    public eat(): void { }
    public fly(): number {return 150; }
}

//Este es un problema porque esta ave no vuela
class Ostrich implements Bird, RunningBird {
    public eat(): void {};
    public run(): void {};
}

class Penguin implements Bird {
    public eat(): void {};
    public swim(): void {};
}