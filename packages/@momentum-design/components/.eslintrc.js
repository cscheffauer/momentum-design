const config = require('../../../.eslintrc.js');

module.exports = {
    ...config,
    extends: [
        ...config.extends,
        'plugin:lit/recommended',
    ],
    rules: {
        ...config.rules,
        "@typescript-eslint/no-floating-promises": "error"
    }
};
