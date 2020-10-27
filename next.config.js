module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    IMGBB_API_KEY: process.env.IMGBB_API_KEY,
  }, 
}
