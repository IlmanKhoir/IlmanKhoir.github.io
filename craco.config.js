module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        webpackConfig.module.rules.push({
          enforce: 'pre',
          test: /\.mjs$/,
          loader: require.resolve('source-map-loader'),
          exclude: /node_modules/,
          options: {
            filterSourceMappingUrl: (url, resourcePath) => {
              if (/node_modules/.test(resourcePath)) {
                return false;
              }
              return true;
            },
          },
        });
  
        return webpackConfig;
      },
      ignoreWarnings: [/Failed to parse source map/],
    },
  };
  