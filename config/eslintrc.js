module.exports = {
    "extends": "eslint:recommended",
    "env": {
        "node": true,
        "es6": true
    },
    "rules": {
        "no-inner-declarations": "off",
        "complexity": ["error", 15],
        "eqeqeq": ["error", "always"],
        "no-fallthrough": "off",
        "radix": 2,
        "no-shadow": ["error", {
            "builtinGlobals": true,
            "hoist": "all",
            "allow": []
        }],
        "handle-callback-err": [2, "^.*(e|E)rr"],
        "array-bracket-spacing": 2,
        "strict": [2, "global"],
        "no-unused-vars": ["error", { "vars": "local", "args": "none", "ignoreRestSiblings": false }]
    }
}