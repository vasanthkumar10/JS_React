function getName() {
  return `vasanthkumar`;
}

let result = getName();

let expectedResult = "vasanth kumar";

if (result === expectedResult) {
  console.log("test passed");
} else {
  throw new Error("Test failed: name is not matching");
}
