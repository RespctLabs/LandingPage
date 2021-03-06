// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require("@layer0/next/config");

// This file was automatically added by layer0 init.
// You should commit this file to source control.

const _preLayer0Export = (phase, config) => ({
	reactStrictMode: true,
	images: {
		minimumCacheTTL: 60,
		domains: ["dweb.link", "ipfs.io", "res.cloudinary.com"],
	},
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
});

module.exports = (phase, config) =>
	withLayer0(
		withServiceWorker({
			// Output sourcemaps so that stack traces have original source filenames and line numbers when tailing
			// the logs in the Layer0 developer console.
			layer0SourceMaps: true,

			..._preLayer0Export(phase, config),
		})
	);
