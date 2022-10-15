// Predefined list of values for transporation method in gram as unit of gas
const GAS_PER_TRANSPORTATION_METHODS = {
  //Small cars:
  "diesel-car-small": 152,
  "petrol-car-small": 164,
  "plugin-hybrid-car-small": 83,
  "electric-car-small": 60,
  //Medium cars:
  "diesel-car-medium": 181,
  "petrol-car-medium": 102,
  "plugin-hybrid-car-medium": 120,
  "electric-car-medium": 68,
  //Large cars:
  "diesel-car-large": 219,
  "petrol-car-large": 282,
  "plugin-hybrid-car-large": 136,
  "electric-car-large": 83,
  //Defaults for bus and train
  "bus-default": 28,
  "train-default": 7,
};

// For unit of distance
const UNITS_OF_DISTANCE = {
  KM : "km",
  M : "m"
};

// For unit of mass for Gas
const UNITS_OF_GAS = {
  KG : "kg",
  G : "g"
};

// For default unit configurations
const unitDefaults = {
  DISTANCE : UNITS_OF_DISTANCE.KM,
  GAS: UNITS_OF_GAS.G
}
  

module.exports = {
  GAS_PER_TRANSPORTATION_METHODS,
  UNITS_OF_DISTANCE,
  UNITS_OF_GAS,
  unitDefaults
};
