function carFactory(object) {
    let engines = [{power: 90, volume: 1800}, {power: 120, volume: 2400}, {power: 200, volume: 3500}]
    let carriages = [{type: 'hatchback', color: object.color}, {type: 'coupe', color: object.color}]
    let wheelSize = object.wheelsize % 2 !== 0 ? object.wheelsize : object.wheelsize - 1;

    return {
        model: object.model,
        engine: engines.filter(engine => engine.power >= object.power)[0],
        //filter method always returns an array of the desired state. Our desired state was to
        //filter the engine power only with this values which is bigger or equal to the power that our client want.
        //on the 0 index, the power will be our desired.
        carriage:
            carriages.filter(carriage => carriage.type === object.carriage)[0],//because filter always returns an array
        wheels: [wheelSize, wheelSize, wheelSize,wheelSize]
    }
}

console.log(carFactory({
        model: 'VW Golf II',
        power: 90,
        color: 'blue',
        carriage: 'hatchback',
        wheelsize: 14
    }
));
