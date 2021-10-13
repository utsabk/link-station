'use strict';

const linkStations = [
  [0, 0, 10],
  [20, 20, 5],
  [10, 0, 12],
];

const devicePoints = [
  [0, 0],
  [100, 100],
  [15, 10],
  [18, 18],
];

// From the Pythagorean theorem, given the base length and height length in a right angle traingle
// the lenght of the third side, (hypotenuse)^2 = (base)^2 + (height)^2

const distanceCalculator = (pointA, pointB) => {
  const base = pointA[0] - pointB[0];
  const height = pointA[1] - pointB[1];

  return Math.sqrt(Math.pow(base, 2) + Math.pow(height, 2));
};

const powerCalculator = (devicePoints, linkStation) => {
  const [xCoord, yCoord, reach] = linkStation;
  const linkStationPoints = [xCoord, yCoord];
  const distance = distanceCalculator(devicePoints, linkStationPoints);

  if (distance > reach) return 0;
  else {
    return Math.pow(Math.abs(reach - distance), 2);
  }
};

devicePoints.forEach((points) => {
  let previousPower = 0;
  let bestStation = [0, 0]

  linkStations.forEach((linkStation) => {
    const power = powerCalculator(points, linkStation);
    if (power > previousPower) {
      previousPower = power;
      bestStation = linkStation;
    }
  });
  if (previousPower === 0) {
    console.log(
      `No link station within reach for point ${points[0]}, ${points[1]}`
    );
  }else {
      console.log(`Best link station for point ${points[0]},${points[1]} is ${bestStation[0]},${bestStation[1]} with power ${previousPower}`)
  }
});
