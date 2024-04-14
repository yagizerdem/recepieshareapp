const { init } = require("./initilizedb.js");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");
module.exports = (phase, { defaultConfig }) => {
  if (phase == PHASE_DEVELOPMENT_SERVER || phase == PHASE_PRODUCTION_BUILD) {
    init();
  }

  // config options
  const nextConfig = {};
  return nextConfig;
};
