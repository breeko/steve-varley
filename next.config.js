const withSass = require('@zeit/next-sass')
// const withCSS = require("@zeit/next-css")

// module.exports = withCSS({});
module.exports = withSass({});

module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  }
}

