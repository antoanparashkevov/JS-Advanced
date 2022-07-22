function factory(lib, list) {
    //let result = []
    // for (let order of list) {
    //     //because Object.assign copies all properties from one object to another, we can set it in this case
    //     //and because Object.assign returns the result, we set it in our variable object
    //     let object = Object.assign({}, order.template)
    //     //or
    //     // Object.assign(object,order.template)
    //     //or
    //     // let object = {};
    //     // const template = order.template
    //     // for (let prop in template) {
    //     //     object[prop] = template[prop]
    //     // }
    //
    //     const parts = order.parts
    //     for (let part of parts) {
    //         // console.log(lib[part])
    //         object[part] = lib[part]
    //     }
    //     result.push(object)
    // }
    // return result;

    //OR

    // return list.map(order => {
    //     let object = Object.assign({}, order.template)
    //
    //     for (let part of order.parts) {
    //         object[part] = lib[part]
    //     }
    //
    //     return object
    // })

    //OR

    return list.map(order => Object.assign({}, order.template, Object.fromEntries(order.parts.map(part => [part, lib[part]]))))
    //we can transform the array of parts (order.parts) to the array of functions
    // console.log(order.parts.map(part => [part, lib[part]]))
    //now we transform the array of parts to the array of tuples.
    //Object.entries makes FROM object TO array of tuples(pairs)
    //Object.fromEntries makes the opposite. It makes FROM Array of tuples TO object
    // console.log(Object.fromEntries(order.parts.map(part => [part, lib[part]])))

    // console.log(object)

}

const library = {
    print: function () {
        console.log(`${this.name} is printing a page`);
    },
    scan: function () {
        console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
        console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
        template: {name: 'ACME Printer'},
        parts: ['print']
    },
    {
        template: {name: 'Initech Scanner'},
        parts: ['scan']
    },
    {
        template: {name: 'ComTron Copier'},
        parts: ['scan', 'print']
    },
    {
        template: {name: 'BoomBox Stereo'},
        parts: ['play']
    }
];
const products = factory(library, orders);


// console.log(products);
// products[3].play('Na egipet faraona', 'Galin')
