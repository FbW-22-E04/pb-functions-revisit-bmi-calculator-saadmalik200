function calculateBMI(name, weight, height) {
  const BMI = weight / (height * height);
  return BMI;
}

const markBMI = calculateBMI("Mark", 72.5, 1.65);
const johnBMI = calculateBMI("John", 65, 1.55);

function whoIsBiggest(name1, name2, bmi1, bmi2) {
  if (bmi1 > bmi2) {
    console.log(`${name1} has the higher BMI of ${bmi1}`);
  } else {
    console.log(`${name2} has the higher BMI of ${bmi2}`);
  }
}

whoIsBiggest("Mark", "John", markBMI, johnBMI);

function whoIsBiggest1(name1, name2, weight1, height1, weight2, height2) {
  const markBMI = calculateBMI(name1, weight1, height1);
  const johnBMI = calculateBMI(name2, weight2, height2);

  if (markBMI > johnBMI) {
    console.log(`${name1} has the higher BMI of ${markBMI}`);
  } else {
    console.log(`${name2} has the higher BMI of ${johnBMI}`);
  }
}

whoIsBiggest1("Mark", "John", 72.5, 1.65, 65, 1.55);

// //Q1 Store Mark's and John's mass and height in variables.
// const markHeight = 1.65;
// const markMass = 72.5;
// const johnHeight = 1.55;
// const johnMass = 65;

// //Q2 Calculate both their BMIs and store their BMIs in variables.

// const markBMI = markMass / (markHeight * markHeight);
// const johnBMI = johnMass / (johnHeight * johnHeight);

// console.log(markBMI);
// console.log(johnBMI);
// //Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.
// const markMoreBeefCake = markBMI > johnBMI;
// console.log(markMoreBeefCake);

// //Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is").

// console.log(
//   `Q4: Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`
// );

// //Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI.

// if (markBMI > johnBMI) {
//   console.log("Q5: Mark", markBMI.toFixed(2));
// } else {
//   console.log("Q5: John", johnBMI.toFixed(2));
// }
