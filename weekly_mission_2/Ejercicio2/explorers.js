const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]
/*
class datosExplorer { //forma uno con clase
    getNamesExplorers() {
        explorers.forEach(explorer => console.log(explorer.name))
    }
    getStackExplorers() {
        explorers.forEach(explorer => {
            console.log(`Explorer ${explorer.name}`);
            explorer.stack.forEach(stack => console.log(`stack ${stack}`))
        })
    }
}

const dataExplorer = new datosExplorer();
dataExplorer.getNamesExplorers();
dataExplorer.getStackExplorers();
*/

function getNAmesExplorers() { // forma dos sin clase
    explorers.forEach(explorer => console.log('Nombre explorer: ' + explorer.name))
    return
  }
  
getNAmesExplorers();

function getStackExplorer() {
    explorers.forEach(explorer => {
        explorer.stack.forEach(stack => {
            console.log(`Stack explorer: ${stack}`);
        });
    });
}

getStackExplorer();

function createNewListStack() {
    let stacks = explorers.map((explorer) => {
        return explorer.stack
    });
    console.log(`Stacks list: ${stacks}`);
}

createNewListStack();

function filterForStack() {
    let stackJs = explorers.filter((explorer) => {//Retorna un array
        return explorer.stack.includes('js');
    });
    for (i = 0; i < stackJs.length; i++) {
        console.log(`Stacks list filter: ${JSON.stringify(stackJs[i])}`);
    }
}

filterForStack();

function findForCity(city) {//Retorna un solo elemento
    let explorersCDMX = explorers.find((explorer) => explorer.city = city);
    console.log(`Explorador de la CDMX: ${explorersCDMX.name}`);
}

findForCity('CDMX');

function excercisesComplete() {
    let exCompl = explorers.reduce((act, explorer) => act += explorer.exercises_completed, 0);
    console.log(`Suma de los ejercicion completos: ${exCompl}`);
}

excercisesComplete();

function someExcFinished() {
    console.log(`Es ${explorers.some((explorer) => explorer.missions.frontend.exercisesFinished === true) ? "cierto" : "falso" } que hay ejercicios terminados`);
}

someExcFinished();

function everyExcFinished() {
    console.log(`Es ${explorers.every((explorer) => explorer.missions.onboarding.isFinished === true) ? "cierto" : "falso" } que todos los ejercicios estan terminados`);
}

everyExcFinished();