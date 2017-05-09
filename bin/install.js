var Validate = require('git-validate');

var overwrite = true

Validate.copy('../config/eslintrc.js', '.eslintrc.js', overwrite);
Validate.copy('../config/eslintignore', '.eslintignore', overwrite);
Validate.installScript('lint', 'eslint .');
Validate.configureHook('pre-commit', ['lint'], overwrite);