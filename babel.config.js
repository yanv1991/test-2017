/**
 * Custom Next.js babel configuration,
 * to disable SWC because it not compatible with tvapp
 * @param {Object} api -  object exposes everything Babel itself
 * exposes from its index module, along with config-file specific APIs
 * @returns {Object} extended babel config
 */
function babelConfig(api) {
    const { ENVIRONMENT } = process.env;
    api.cache(() => ENVIRONMENT !== 'production');
  
    return {
      presets: ['next/babel'],
    };
  };
  
  module.exports = babelConfig;