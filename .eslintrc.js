module.exports = {
  "parser": "babel-eslint",
  "env": {
    "es6": true
  },

  "ecmaFeatures": {
    "jsx": true
  },

  "extends": "airbnb",

  "plugins": [
    "react"
  ],

  "globals": {
    // flow
    "React$Element": false
  },

  "rules": {
    // resets
    "no-underscore-dangle": 0,
    "arrow-parens": 0,
    "no-use-before-define": 0,
    "react/sort-comp": 0,
    "react/jsx-filename-extension": 0,
  }
};
