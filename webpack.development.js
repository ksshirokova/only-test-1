module.exports = {
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    mode: "development",
    entry: "./src/dev.tsx",
    devServer: {
        static: "./development",
    },
    module: {
        rules: [
            {
                test: /.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                }
            }
        ]
    }
}