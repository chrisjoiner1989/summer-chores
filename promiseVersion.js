let energy = 100;

function mowYard(name) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`${name} mowed the yard.`);
      energy -= 20;
      resolve(name);
    }, 2000);
  });
}

function weedEat(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (energy >= 20) {
        console.log(`${name} finished using the weed eater.`);
        energy -= 20;
        resolve(name);
      } else {
        reject(`${name} fell asleep after mowing yard.`);
      }
    }, 1500);
  });
}

function trimHedges(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (energy >= 15) {
        console.log(`${name} finished trimming the hedges.`);
        energy -= 15;
        resolve(name);
      } else {
        reject(`${name} fell asleep after weed eating the yard.`);
      }
    }, 1000);
  });
}

function collectWood(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (energy >= 25) {
        console.log(`${name} finished collecting wood.`);
        energy -= 25;
        resolve(name);
      } else {
        reject(`${name} fell asleep trimming hedges.`);
      }
    }, 2500);
  });
}

function waterGarden(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (energy >= 10) {
        console.log(`${name} finished watering the garden.`);
        energy -= 10;
        resolve(name);
      } else {
        reject(`${name} fell asleep after collecting wood.`);
      }
    }, 500);
  });
}

function doSummerChores(name) {
  mowYard(name)
    .then(weedEat)
    .then(trimHedges)
    .then(collectWood)
    .then(waterGarden)
    .then(() => {
      console.log(`${name} finished all their chores!`);
    })
    .catch((error) => {
      console.log(error);
    });
}
