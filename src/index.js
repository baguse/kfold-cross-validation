const masterData = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// const masterData = ["a", "b", "c", "d", "e"];

const ratio = {
  dataTest: 40,
  dataTrain: 60
};

const dataTrainTotal = Math.ceil((masterData.length * ratio.dataTrain) / 100);
const dataTestTotal = masterData.length - dataTrainTotal;

console.log({
  dataTestTotal,
  dataTrainTotal
});

const initialData = {
  dataTrain: masterData.slice(0, dataTrainTotal),
  dataTest: masterData.slice(dataTrainTotal, masterData.length)
};

console.log(initialData);

const result = [];

for (let i = 0; i < dataTrainTotal; i++) {
  const previousDataTrain = initialData.dataTrain.slice(0, i);
  const currentDataTrain = initialData.dataTrain[i];
  const afterDataTrain = initialData.dataTrain.slice(i + 1, dataTrainTotal);

  for (let j = 0; j < dataTestTotal; j++) {
    const previousDataTest = initialData.dataTest.slice(0, j);
    const currentDataTest = initialData.dataTest[j];
    const afterDataTest = initialData.dataTest.slice(j + 1, dataTestTotal);

    console.log(
      `${previousDataTrain.join("")}${currentDataTest}${afterDataTrain.join(
        ""
      )} => ${previousDataTest.join("")}${currentDataTrain}${afterDataTest.join(
        ""
      )}`
    );
  }
}

/*
a b c => d e

d b c => a e
e b c => d a
a d c => b e
a e c => d b
a b d => c e
a b e => d c

*/
