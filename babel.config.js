module.exports = {
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@atoms': './src/components/atoms',
          '@components': './components',
          '@hooks': './src/hooks',
          '@molecules': './src/components/molecules',
          '@navigators': './src/navigators',
          '@objects': './src/components/objects',
          '@organisms': './src/components/organisms',
          '@providers': './src/providers',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@props': './src/types'
        }
      }
    ],
    [
      'module:react-native-dotenv',
      {
        allowUndefined: false,
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        safe: false,
        verbose: true
      }
    ]
  ],
  presets: [
    ['module:metro-react-native-babel-preset'],
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'
  ]
};
