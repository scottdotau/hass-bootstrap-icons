const path = require('path');

module.exports = [
  {
    entry: './js/main.js',
    output: {
      filename: 'custom_components/bootstrap-icons/main.js',
      path: path.resolve(__dirname),
    },
    mode: 'production',
  },
];
