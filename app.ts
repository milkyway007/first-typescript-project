const num1Input = document.getElementById('num1')  as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button')!;

// class User {
//     name: string;
//     private age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
// }

interface Greetable {
    name: string;
}

interface Printable {
    print(): void;
}

class User implements Greetable, Printable {
    constructor(public name: string, private age: number) {}

    print() {
        console.log(this.name);
    }
}

class Admin extends User {
    constructor(name: string, age: number, private permissions: string[]) {
        super(name, age);
    }
}

interface CalculationContainer {
    res: number;
    print(): void;
}
type CalculationResults = CalculationContainer[];
type PrintMode = 'console' | 'alert';
enum OutputMode { CONSOLE , ALERT };

const results: CalculationResults = [];

function add(a: number,b: number) {
    return a + b;
}

function printResult(result: any, printMode: OutputMode) : void {
    if (printMode === OutputMode.CONSOLE) {
        console.log(result);
    }

    if (printMode === OutputMode.ALERT) {
        alert(result);
    }    
}

buttonElement.addEventListener('click', () => {
    const num1 = +num1Input.value;
    const num2 = +num2Input.value;

    const result = add(num1, num2);
    const resultContainer = {
        res: result,
        print() {
            console.log(this.res);
        }
    };

    results.push(resultContainer);

    printResult(result, OutputMode.CONSOLE);
    printResult(result, OutputMode.ALERT);
});

function logAndEcho<T>(val: T) {
    console.log(val);
    return val;
}

logAndEcho<string>('Hi there').split(' ');