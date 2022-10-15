const parseArgs = require("./ArgumentsParser");
const { Calculator } = require("./Calculator");
const { hideBin } = require("yargs/helpers");

if (require.main === module) {
  const argv = parseArgs(hideBin(process.argv)); // Takes argument from console and passes it to ArgumentsParser
  main(argv);
}

function main(argv) {
  try {
    const result = Calculator({
      transportationMethod: argv.transportationMethod,
      distance: argv.distance,
      unitOfDistance: argv.unitOfDistance,
      output: argv.output,
    }); // Passes the argument into the calculator
    console.log(`Your trip caused ${result} of CarbonDioxide-equiponderant.`); // Prints the desired results
  } catch (error) {
    console.error(error);
  }
};
