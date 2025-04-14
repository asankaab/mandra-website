module.exports = {
  images: {
        remotePatterns: [new URL('https://images.ctfassets.net/**')],
        loader: 'custom',
        loaderFile: './src/lib/imageloader.ts'
  }
}