module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 14,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "unused-imports",
    ],
    "rules": {
        "react/no-unknown-property": ["error", { ignore: ["css"] }],
        "react/prop-types": "off",
        "indent": ["error", 2],
        "linebreak-style": ["error", "windows"],
        "quotes": ["error", "double"],
        "semi": ["error", "always"],
        "no-duplicate-imports": "error",
        "react/react-in-jsx-scope": "off",
        "unused-imports/no-unused-imports": "error",
        "prefer-template": "error",
        "no-useless-concat": "error",
        "no-console": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "comma-dangle": ["error", {
            "arrays": "always-multiline",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "func-call-spacing": ["error", "never"],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true, }],
        "eqeqeq": ["error", "always"],
        "object-curly-spacing": ["error", "always"],
        "one-var": ["error", "never"],
        "no-var": ["error"],
        "array-element-newline": ["error", {
            "ArrayExpression": "consistent",
            "ArrayPattern": { "minItems": 3 },
        }],
        "array-bracket-newline": ["error", {
            "minItems": 3,
        }],
        "arrow-parens": ["error", "always"],
        "arrow-body-style": ["error", "as-needed"],
        "@typescript-eslint/no-this-alias": "off",
        "object-curly-newline": ["error", {
            "ObjectExpression": "always",
            "ObjectPattern": { "multiline": true },
            "ImportDeclaration": "never",
        }],
        "object-property-newline": ["error"],
        "@typescript-eslint/no-non-null-assertion": "off",
        "prefer-arrow-callback": "error",
        "func-style": [
            "error",
            "expression",
            { "allowArrowFunctions": true }
        ]
    }
};
