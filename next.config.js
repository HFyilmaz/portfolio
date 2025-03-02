// next.config.js

const isProduction = process.env.NODE_ENV === 'production';
const repository = 'portfolio'; // Your repository name

module.exports = {
    compiler: {
      styledComponents: true,
    },
    basePath: isProduction ? `/${repository}` : '',
    assetPrefix: isProduction ? `/${repository}/` : '',
    images: {
      unoptimized: true,
    },
    output: 'export',
    trailingSlash: true,
    // This ensures that static assets in the public folder are correctly referenced
    publicRuntimeConfig: {
      basePath: isProduction ? `/${repository}` : '',
    },
  };
  