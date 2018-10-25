module.exports = {
    "parser": "babel-eslint",
    "plugins": [
      "react"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
          "arrowFunctions": true,
          "blockBindings": true,
          "classes": true,
          "defaultParams": true,
          "destructuring": true,
          "forOf": true,
          "generators": false,
          "modules": true,
          "objectLiteralComputedProperties": true,
          "objectLiteralDuplicateProperties": false,
          "objectLiteralShorthandMethods": true,
          "objectLiteralShorthandProperties": true,
          "spread": true,
          "superInFunctions": true,
          "templateStrings": true,
          "restParams": true,
          "jsx": true
        }
    },
    "globals": {
      "SyntheticEvent": true,
      "SyntheticInputEvent": true
    },
    "extends": [
      "airbnb"
    ],
    "settings": {
      "react": {
        "createClass": "createReactClass", // Regex for Component Factory to use,
                                           // default to "createReactClass"
        "pragma": "React",  // Pragma to use, default to "React"
        "version": "15.0", // React version, default to the latest React stable release
        "flowVersion": "0.53" // Flow version
      },
      "propWrapperFunctions": [ "forbidExtraProps" ] // The names of any functions used to wrap the
                                                   // propTypes object, e.g. `forbidExtraProps`.
                                                   // If this isn't set, any propTypes wrapped in
                                                   // a function will be skipped.
  },
  "rules": {
    "no-console": 0,
    "max-len": ["error", { "code": 80 }]
  }
};
