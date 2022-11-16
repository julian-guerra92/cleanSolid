(() => {


    // Resolver sin la triple condicional dentro del if
    // includes? arrays?

    const redFruits: string[] = ['manzana', 'cereza', 'ciruela']

    function isRedFruit(fruit: string): boolean {
        return redFruits.includes(fruit)
    }

    // Simplificar esta función
    // switch? Object literal? validar posibles colores

    type FruitColor = 'red'|'yellow'|'purple';

    const fruitsByColor = {
        red: ['manzana', 'fresa'],
        yellow: ['piña', 'banana'],
        purple: ['moras', 'uvas']
    }

    function getFruitsByColor(color: FruitColor): string[] {
        if(!Object.keys(fruitsByColor).includes(color)){
            throw Error('The color must be: red, yellow, purple');
        }
        return fruitsByColor[color];
    }

    // Simplificar esta función
    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        return (!isFirstStepWorking) ? 
            'First step broken.'  : (!isSecondStepWorking) ? 
            'Second step broken.' : (!isThirdStepWorking) ? 
            'Third step broken.'  : (!isFourthStepWorking) ? 
            'Fourth step broken.' : 'Working properly!';

    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();




