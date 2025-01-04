const path = require("path");

module.exports = (on, config) => {
	const options = {
		webpackOptions: {
			resolve: {
				alias: {
					"@": path.resolve(__dirname, "../../para-synapcity/src"),
				},
				extensions: [".ts", ".tsx", ".js", ".jsx"],
			},
			module: {
				rules: [
					{
						test: /\.(ts|tsx)$/,
						use: ["babel-loader", "ts-loader"],
						exclude: /node_modules/,
					},
					{
						test: /\.(js)$/,
						use: ["babel-loader"],
						exclude: /node_modules/,
					},
				],
			},
		},
	};

	on("file:preprocessor", webpack(options));

	return config;
};
