const {
  GAS_PER_TRANSPORTATION_METHODS,
  unitDefaults,
} = require("../constants/index");

/**
 * Returns result calculated for CarbonDioxide emission.
 *
 * @param {string} transportationMethod selected from the list of CarbonDioxide emission transportation-method of choice.
 * @param {number} distance as choice of km/m.
 * @param {string} unitOfDistance selected for distance as unit-of-distance.
 * @param {string} output selected for output unit for unit of gas in kg/g.
 * @return {string} x raised to the n-th power.
 */

exports.Calculator = ({
  transportationMethod,
  distance,
  unitOfDistance,
  output,
}) => {
  // takes default value from unitDefaults for distance if not provided
  unitOfDistance =
    unitOfDistance == null ? unitDefaults.DISTANCE : unitOfDistance;
  // takes default value from unitDefaults for Gas if not providedd
  output = output == null ? unitDefaults.GAS : output;

  // takes gas in gram for selected transportationMethod from the static list of GAS_PER_TRANSPORTATION_METHODS
  const gasPerTransportationMethod =
    GAS_PER_TRANSPORTATION_METHODS[transportationMethod];

  // calculates the distance according to the unit definition
  const _distance =
    unitOfDistance != unitDefaults.DISTANCE ? distance / 1000 : distance;

  // calculates the result of the distance and gasPerTransportationMethod
  const _result = gasPerTransportationMethod * _distance;

  //construct the result text with desired output unit and concate the unit along with the value
  const _resultText =
    output != unitDefaults.GAS
      ? (_result / 1000).toFixed(1) + output
      : _result.toFixed(1) + unitDefaults.GAS;

  return _resultText;
};
