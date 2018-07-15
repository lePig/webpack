module.exports = {
    entry: './main.js',
    output: {
        filename: 'bundle.js',

    },
    module: {
        loaders: [
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=52000'}
        ]
    }
}