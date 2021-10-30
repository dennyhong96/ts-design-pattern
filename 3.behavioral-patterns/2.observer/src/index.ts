import { Car } from "./Car";

async function sleep(duration: number = 500) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

function reportCurrentSpeed(newValue: number, oldValue: number) {
  console.log(`New current speed: ${newValue}; Old current speed: ${oldValue}`);
}

function checkSpeedLimit(newValue: number, oldValue: number) {
  const speedLimit = 100;
  if (newValue === speedLimit) {
    console.log("You are at speed limit.");
  }
  if (newValue - speedLimit > 10) {
    console.log("You are way over speed limit, slow down.");
  }
  if (speedLimit - newValue > 10) {
    console.log("You are way under speed limit, speed up.");
  }
}

async function main() {
  const car = new Car(160);
  car.registerCurrentSpeedObserver(reportCurrentSpeed);
  car.registerCurrentSpeedObserver(checkSpeedLimit);
  car.currentSpeed = 60;
  await sleep();
  car.currentSpeed = 70;
  await sleep();
  car.currentSpeed = 80;
  await sleep();
  car.currentSpeed = 90;
  await sleep();
  car.currentSpeed = 100;
  await sleep();
  car.currentSpeed = 110;
  await sleep();
  car.currentSpeed = 120;
}
main();
