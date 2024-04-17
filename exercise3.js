function townPop(input) {

    let townObj = {}
    for (let towns of input) {
        let [name, population] = towns.split(` <-> `);
        population = Number(population);
        townObj[name] = population;
    }
    for (let town in townObj) {
        console.log((`${town} : ${townObj[town]}`));
    }
}

townPop(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);