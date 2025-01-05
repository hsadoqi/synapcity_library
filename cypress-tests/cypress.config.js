import webpack from '@cypress/webpack-preprocessor'

module.exports = {
    component: {
        devServer: {
            framework: 'react',
            bundler: 'webpack',
        },
        setupNodeEvents(on, config) {
            return config
        },
    },
    e2e: {
        screenshotsFolder: 'cypress-tests/cypress/screenshots',
        videosFolder: 'cypress-tests/cypress/videos',
        video: true,
        setupNodeEvents(on, config) {
            const options = {
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.jsx'],
                },
                module: {
                    rules: [
                        {
                            test: /\.(ts|tsx)$/,
                            use: ['babel-loader', 'ts-loader'],
                            exclude: /node_modules/,
                        },
                        {
                            test: /\.(js)$/,
                            use: ['babel-loader'],
                            exclude: /node_modules/,
                        },
                    ],
                },
            }
            on('file:preprocessor', webpack({ webpackOptions: options }))

            return config
        },
        supportFile: 'cypress/support/e2e.js',
        specPattern: 'cypress/e2e/**/*.cy.js',
    },
}
