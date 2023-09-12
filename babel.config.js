module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@navigation': './src/navigation',
          '@src': './src',
          '@redux': './src/redux',
          '@screens': './src/screens',
          '@services': './src/services',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
