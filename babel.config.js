// @ts-nocheck
module.exports = api => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          alias: {
            '@src': './src',
            '@store': './store',
            '@utils': './utils',
            '@assets': './assets',
          },

          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
        },
      ],
      'nativewind/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
