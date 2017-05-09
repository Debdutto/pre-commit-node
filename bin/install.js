var Validate = require('git-validate');

var overwrite = true

Validate.copy('../eslintrc.js', '.eslintrc.js', overwrite);
Validate.copy('../eslintignore', '.eslintignore', overwrite);
Validate.installScript('lint', 'eslint .');
Validate.configureHook('pre-commit', ['lint'], overwrite);