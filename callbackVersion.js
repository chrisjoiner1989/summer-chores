let energy = 100;
let name = "Chris";
function mowYard(name, callback) {
  setTimeout(() => {
    console.log(`${name} mowed the yard.`);
    energy -= 20;
    callback();
  }, 2000);
}

function weedEat(name, callback) {
  setTimeout(() => {
    if (energy >= 20) {
      console.log(`${name} finished using the weed eater.`);
      energy -= 20;
      callback();
    } else {
      console.log(`${name} fell asleep after mowing the yard.`);
    }
  }, 1500);
}

function trimHedges(name, callback) {
  setTimeout(() => {
    if (energy >= 25) {
      console.log(`${name} finished trimming the hedges.`);
      energy -= 25;
      callback();
    } else {
      console.log(`${name} fell asleep after weed eating the yard.`);
    }
  }, 1000);
}

function collectWood(name, callback) {
  setTimeout(() => {
    if (energy >= 10) {
      console.log(`${name} finished collecting wood.`);
      energy -= 25;
      callback();
    } else {
      console.log(`${name} fell asleep after trimming the hedges.`);
    }
  }, 500);
}

function waterGarden(name, callback) {
  setTimeout(() => {
    if (energy >= 10) {
      console.log(`${name} finished watering the garden.`);
      energy -= 10;
      callback();
    } else {
      console.log(`${name} fell asleep after collecting wood.`);
    }
  }, 500);
}

function doSummerChores(name) {
  mowYard(name, () => {
    weedEat(name, () => {
      trimHedges(name, () => {
        collectWood(name, () => {
          waterGarden(name, () => {
            console.log(`${name} finished all their chores!`);
          });
        });
      });
    });
  });
}

doSummerChores("Chris");
