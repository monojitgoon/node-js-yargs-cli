const { exitProcess } = require("yargs");
const yargs = require("yargs");
const {
  GAS_PER_TRANSPORTATION_METHODS,
  UNITS_OF_DISTANCE,
  UNITS_OF_GAS,
  unitDefaults,
} = require("../constants/index");

/**
 * Parses the provided args.
 *
 * @param {string[]} args The args to parse.
 * @returns {Objects[]} The parsed args.
 */
function parseArgs(args) {
  return yargs
    .options({
      t: {
        alias: "transportation-method",
        coerce: (arg) => {
          const transportationOptions = Object.keys(
            GAS_PER_TRANSPORTATION_METHODS
          );
          if (Array.isArray(arg)) {
            // Check if transportation-method is provided multiple times
            throw new Error(
              "Invalid argument: transportation-method must be declared once"
            );
          } else if (!transportationOptions.includes(arg)) {
            // Check if transportation-method is valid
            throw new Error("Invalid value for: transportation-method");
          }
          return arg;
        },
        describe: "transportation-method to check for",
        type: "string",
        nargs: 1,
        array: false,
        choices: Object.keys(GAS_PER_TRANSPORTATION_METHODS), // avaliable choices for TRANSPORTATION_METHODS
      },
      d: {
        alias: "distance",
        coerce: (arg) => {
          const parsed = parseFloat(arg);
          if (Number.isNaN(parsed)) {
            // check if distance is number
            throw new Error("Invalid value: distance must be a number");
          } else if (parsed < 0) {
            // check if distance is non-negative number
            throw new Error(
              "Invalid value: distance must be a non-negative number"
            );
          }
          return parsed;
        },
        describe: "distance in km/m",
        type: "number",
        nargs: 1,
      },
      u: {
        alias: "unit-of-distance",
        coerce: (arg) => {
          const distanceOptions = Object.values(UNITS_OF_DISTANCE);

          if (Array.isArray(arg)) {
            // check if unit-of-distance is provided multiple times
            throw new Error(
              "Invalid value: unit-of-distance must be declared once"
            );
          } else if (!distanceOptions.includes(arg)) {
            // check if unit-of-distance is valid
            throw new Error("Invalid value for: unit of distance");
          }
          return arg;
        },
        describe: "unit-of-distance of the distance",
        type: "string",
        nargs: 1,
        choices: Object.values(UNITS_OF_DISTANCE), // avaliable choices for unit-of-distance
        default: unitDefaults.DISTANCE,
      },
      o: {
        alias: "output",
        coerce: (arg) => {
          const outputOptions = Object.values(UNITS_OF_GAS);
          if (Array.isArray(arg)) {
            // check if unit-of-output is provided multiple times
            throw new Error("Invalid value: output must be declared once");
          } else if (!outputOptions.includes(arg)) {
            // check if provided output is valid
            throw new Error("Invalid value for: output");
          }

          return arg;
        },
        describe: "unit-of-output of the CarbonDioxide-equiponderant in kg/g",
        type: "string",
        nargs: 1,
        choices: Object.values(UNITS_OF_GAS), // avaliable choices for output
        default: unitDefaults.GAS,
      },
    })
    .strict()
    .showHelpOnFail(false)
    .demandOption(
      ["distance", "transportation-method"],
      "Please provide both transportation-method and distance arguments"
    )
    .check((argv, options) => {
      const { transportationMethod, distance, unitOfDistance, output } = argv;
      if (transportationMethod == null) {
        throw new Error("Missing required argument: transportation-method");
      } else if (distance == null) {
        throw new Error("Missing required argument: distance");
      } else if (argv._.length > 0) {
        throw new Error("Unknown argument");
      } else {
        return true; // tell Yargs that the arguments passed the check
      }
    })
    .fail(function (msg, err, yargs) {
      if (err) {
        throw err.message; // throw error message for any validation errors
      }
    })
    .parse(args);
}

module.exports = parseArgs;
