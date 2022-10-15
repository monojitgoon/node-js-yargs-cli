const parseArgs = require("./ArgumentsParser");
const {
  unitDefaults
} = require("../constants/index");

describe("Validate ArgumentsParser.js", () => {
  it("Throw Error when there is more than one arguement is provided for transportation-method", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "--distance",
        "15",
        "--transportation-method",
        "diesel-car-medium",
      ])
    ).toThrowError(
      Error("Invalid argument: transportation-method must be declared once")
    );
  });

  it("Throw Error when transportation-method is not provided", () => {
    expect(() => parseArgs(["--distance", "15"])).toThrowError(
      Error("Missing required argument: transportation-method")
    );
  });

  it("Throw Error when transportation-method is not valid", () => {
    expect(() =>
      parseArgs(["--transportation-method", "testvalue", "--distance", "15"])
    ).toThrowError(Error("Invalid value for: transportation-method"));
  });

  it("Throw Error when distance is not provided", () => {
    expect(() =>
      parseArgs(["--transportation-method", "diesel-car-medium"])
    ).toThrowError(Error("Missing required argument: distance"));
  });

  it("Throw Error when distance is not number", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "--distance",
        "test",
      ])
    ).toThrowError(Error("Invalid value: distance must be a number"));
  });
  it("Throw Error when distance is a non-negative number", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "--distance",
        "-15",
      ])
    ).toThrowError(
      Error("Invalid value: distance must be a non-negative number")
    );
  });

  it("Throw Error when unit-of-distance is  declared more than once", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "--distance",
        "15",
        "--unit-of-distance",
        "km",
        "--unit-of-distance",
        "km",
      ])
    ).toThrowError(
      Error("Invalid value: unit-of-distance must be declared once")
    );
  });

  it("Throw Error when value is invalid for unit-of-distance", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "--distance",
        "15",
        "--unit-of-distance",
        "k",
      ])
    ).toThrowError(
      Error("Invalid value for: unit of distance")
    );
  });
  it("Throw Error when unit-of-output is  declared more than once", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "--distance",
        "15",
        "--output",
        "kg",
        "--output",
        "kg",
      ])
    ).toThrowError(
      Error("Invalid value: output must be declared once")
    );
  });

  it("Throw Error when value is invalid for output", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "--distance",
        "15",
        "--output",
        "k",
      ])
    ).toThrowError(
      Error("Invalid value for: output")
    );
  });
  it("Throw Error when additional arguement provided that is not valid", () => {
    expect(() =>
      parseArgs([
        "--transportation-method",
        "diesel-car-medium",
        "testarg",
        "--distance",
        "15",
      ])
    ).toThrowError(Error("Unknown argument"));
  });

  it("should return the expected list of values if unitOfDistance and output is not provided", () => {
    const actual = parseArgs([
      "--transportation-method",
      "diesel-car-medium",
      "--distance",
      "15",
    ]);
    const expected = {
      transportationMethod: "diesel-car-medium",
      distance: 15,
      unitOfDistance:  unitDefaults.DISTANCE,
      output: unitDefaults.GAS,
    };
    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty("unitOfDistance");
    expect(actual).toHaveProperty("output");
  });

  it("should return the expected  list of values  if only one argument:unitOfDistance is not provided", () => {
    const actual = parseArgs([
      "--transportation-method",
      "diesel-car-medium",
      "--distance",
      "15",
      "--output",
      "kg",
    ]);
    const expected = {
      transportationMethod: "diesel-car-medium",
      distance: 15,
      unitOfDistance: unitDefaults.DISTANCE,
      output: "kg",
    };
    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty("unitOfDistance");
  });

  it("should return the expected list of values if only one argument:output is not provided", () => {
    const actual = parseArgs([
      "--transportation-method",
      "diesel-car-medium",
      "--distance",
      "15",
      "--unit-of-distance",
      "km",
    ]);
    const expected = {
      transportationMethod: "diesel-car-medium",
      distance: 15,
      unitOfDistance: "km",
      output:  unitDefaults.GAS,
    };
    expect(actual).toMatchObject(expected);
    expect(actual).toHaveProperty("output");
  });
});
