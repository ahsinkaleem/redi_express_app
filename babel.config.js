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
            '@utils': './utils',
            '@hooks': './src/hooks',
            '@store': './store',
            '@actions': './store/actions',
            '@reducers': './store/reducers',
            '@types': './store/types',
            '@screens': './src/screens',
            '@assets': './assets',
            '@styles': './styles',
            '@components': './src/components',
            '@constants': './src/constants',
            '@navigation': './src/navigation',
            '@layouts': './layouts',
            '@stable': './src/components/globals',
          },

          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
        },
      ],
      'nativewind/babel',
      'react-native-reanimated/plugin',
    ],
  };
};
