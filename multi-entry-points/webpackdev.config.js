const path = require('path');

module.exports = {
    entry: {
       home: path.resolve(__dirname, '../src/js/index.js'),
       prices: path.resolve(__dirname, '../src/js/prices.js'),
       contact: path.resolve(__dirname, '../src/js/contact.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist-dev'),
        filename: 'js/[name].js'
    }
}