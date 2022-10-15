const { Calculator } = require("./Calculator");

describe("Validate Calculator.js", () => {
  it("Sample Values", async () => {
    expect(
      Calculator({
        transportationMethod: "train-default",
        distance: 14500,
        unitOfDistance: "m",
        output: "kg",
      })
    ).toEqual("0.1kg");

    expect(
      Calculator({
        transportationMethod: "train-default",
        distance: 14500,
        unitOfDistance: "m",
      })
    ).toEqual("101.5g");

    expect(
        Calculator({
          transportationMethod: "petrol-car-large",
          distance: 1800.5,
        })
      ).toEqual("507741.0g");

      expect(
        Calculator({
          transportationMethod: "diesel-car-medium",
          distance: 1800.5,
        })
      ).toEqual("325890.5g"); 

      expect(
        Calculator({
          transportationMethod: "diesel-car-medium",
          distance: 15,
          unitOfDistance: "km",
        })
      ).toEqual("2715.0g");  
  });
});
