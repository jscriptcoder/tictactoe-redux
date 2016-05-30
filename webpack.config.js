module.exports = {
    entry: './src/index.ts',
    output: {
        path: 'dist',
        filename: 'script.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {test: /\.scss/, loaders: ['style', 'css', 'sass']},
            {test: /\.ts/, loaders: ['ts']}
        ]
    }
};