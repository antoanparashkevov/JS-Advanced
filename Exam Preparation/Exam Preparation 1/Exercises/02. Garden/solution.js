// class Garden {
//   constructor(spaceAvailable) {
//     this.spaceAvailable = spaceAvailable;
//     this.plants = [];
//     this.storage = [];
//   }
//
//   addPlant(plantName, spaceRequired) {
//     if (this.spaceAvailable < spaceRequired) {
//       throw new Error("Not enough space in the garden.");
//     }
//
//     this.spaceAvailable -= spaceRequired;
//     this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
//     return `The ${plantName} has been successfully planted in the garden.`;
//   }
//
//   ripenPlant(plantName, quantity) {
//     let plant = this.plants.find((x) => x.plantName == plantName);
//
//     if (!plant) {
//       throw new Error(`There is no ${plantName} in the garden.`);
//     }
//
//     if (plant.ripe == true) {
//       throw new Error(`The ${plantName} is already ripe.`);
//     }
//
//     if (quantity <= 0) {
//       throw new Error(`The quantity cannot be zero or negative.`);
//     }
//
//     plant.ripe = true;
//     plant.quantity += quantity;
//
//     if (quantity == 1) {
//       return `${quantity} ${plantName} has successfully ripened.`;
//     } else {
//       return `${quantity} ${plantName}s have successfully ripened.`;
//     }
//   }
//
//   harvestPlant(plantName) {
//     let plant = this.plants.find((x) => x.plantName == plantName);
//
//     if (!plant) {
//       throw new Error(`There is no ${plantName} in the garden.`);
//     }
//
//     if (plant.ripe == false) {
//       throw new Error(
//         `The ${plantName} cannot be harvested before it is ripe.`
//       );
//     }
//
//     this.plants = this.plants.filter((x) => x.plantName != plantName);
//     this.storage.push({ plantName, quantity: plant.quantity });
//     this.spaceAvailable += plant.spaceRequired;
//     return `The ${plantName} has been successfully harvested.`;
//   }
//
//   generateReport() {
//     let toReturn = `The garden has ${this.spaceAvailable} free space left.\n`;
//     toReturn += `Plants in the garden: ${this.plants
//       .sort((a, b) => a.plantName.localeCompare(b.plantName))
//       .map((x) => x.plantName)
//       .join(", ")}\n`;
//
//     toReturn += `Plants in storage: `;
//     if (this.storage.length === 0) {
//       toReturn += "The storage is empty.";
//     } else {
//       let stringsToAdd = [];
//       for (let p of this.storage) {
//         stringsToAdd.push(`${p.plantName} (${p.quantity})`);
//       }
//       toReturn += stringsToAdd.join(", ");
//     }
//     return toReturn;
//   }
// }

class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.')
        } else {
            this.plants.push({plantName, spaceRequired, ripe: false, quantity: 0})
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        if (quantity <= 0) {
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        const plant = this.plants.find(obj => obj.plantName === plantName);//returns the whole obj with the same plantName
        if (plant === undefined) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } else if (plant.ripe === true) {
            throw new Error(`The ${plantName} is already ripe.`)
        } else {
            plant.ripe = true;
            plant.quantity += quantity;
            if (quantity === 1) {
                return `${quantity} ${plantName} has successfully ripened.`
            } else {
                return `${quantity} ${plantName}s have successfully ripened.`
            }
        }
    }

    harvestPlant(plantName) {
        const indexOfPlant = this.plants.findIndex(obj => obj.plantName === plantName)
        if (indexOfPlant === -1) {
            throw new Error(`There is no ${plantName} in the garden.`)
        } else if (this.plants[indexOfPlant].ripe === false) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        this.spaceAvailable += this.plants[indexOfPlant].spaceRequired;
        this.storage.push({plantName, quantity: this.plants[indexOfPlant].quantity})
        this.plants.splice(indexOfPlant, 1);
        return `The ${plantName} has been successfully harvested.`

    }

    generateReport() {
        const allPlantNames = this.plants.map(obj=>obj.plantName).sort((a,b)=>a.localeCompare(b))
        const allStoragePlants = this.storage.map(obj=> `${obj.plantName} (${obj.quantity})`)
        const plantsRow1 = `Plants in the garden: ${allPlantNames.join(', ')}`
        const plantsRow2 = `Plants in storage: ${allStoragePlants.join(', ')}`
        return [`The garden has ${this.spaceAvailable} free space left.`,
            `${plantsRow1}`,
            this.storage.length === 0 ? 'Plants in storage: The storage is empty.' : plantsRow2
        ].join('\n')
    }
}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());

