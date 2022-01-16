module.exports = {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
        'react-native-reanimated/plugin',
        [
            'module:react-native-dotenv',
            {
                envName: 'APP_ENV',
                moduleName: '@env',
                path: '.env',
                blocklist: null,
                allowlist: null,
                blacklist: null, // DEPRECATED
                whitelist: null, // DEPRECATED
                safe: false,
                allowUndefined: true,
                verbose: false,
            },
        ],
        [
            'module-resolver',
            {
                root: ['.'],
                alias: {
                    '@': './src',
                    '@constants': './src/constants',
                    '@assets': './src/assets',
                    '@config': './src/config',
                    '@components': './src/components',
                    '@hooks': './src/hooks',
                    '@actions': './src/store/actions',
                    '@reducers': './src/store/reducers',
                    '@screens': './src/screens',
                    '@styles': './src/styles',
                },
            },
        ],
    ],
};
