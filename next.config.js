module.exports = {
    basePath:process.env.NEXT_PUBLIC_BASE_PATH || '',
    assetPrefix:process.env.NEXT_PUBLIC_BASE_PATH || '',
    compress: true,
    mode: 'production',
    future: {
      webpack5: true,
    },
  }