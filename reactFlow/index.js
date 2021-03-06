const baseRules = require('../base-rules');
const reactRules = require('../react/react-rules');
const flowRules = require('./flow-rules');

// clone this so we aren't mutating a module
const eslintrc = JSON.parse(JSON.stringify(baseRules));

// manually merge in React rules
eslintrc.plugins = flowRules.plugins;
Object.keys(reactRules.rules).forEach(function assignRule(ruleId) {
  eslintrc.rules[ruleId] = reactRules.rules[ruleId];
});
Object.keys(flowRules.rules).forEach(function assignRule(ruleId) {
  eslintrc.rules[ruleId] = flowRules.rules[ruleId];
});
eslintrc.settings = flowRules.settings; //only flow need settings
module.exports = eslintrc;
