# React Native Skeleton

This repository template can be used to bootstrap react native project with few essential packages.

## Presets List
- [React Native@0.62.2](https://reactnative.dev/docs/environment-setup)
- [React Native Async Storage](https://react-native-async-storage.github.io/async-storage/docs/install)
- [React Navigation@5.x](https://reactnavigation.org/docs/5.x/getting-started)
  - [Stack Navigation](https://reactnavigation.org/docs/5.x/hello-react-navigation)
  - [Tab Navigation](https://reactnavigation.org/docs/5.x/tab-based-navigation)
  - [Drawer Navigation](https://reactnavigation.org/docs/5.x/drawer-based-navigation)
- [React Native Paper](https://callstack.github.io/react-native-paper/getting-started.html)
- [React Native Firebase](https://rnfirebase.io)
  - [Cloud Messaging](https://rnfirebase.io/messaging/usage)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Axios](https://axios-http.com/docs/intro)
- [Redux](https://redux.js.org/introduction/installation)
  - [React Redux](https://react-redux.js.org/tutorials/quick-start)
  - [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [react-native-flash-message](https://github.com/lucasferreira/react-native-flash-message)
- [react-native-dotenv](https://github.com/goatandsheep/react-native-dotenv)
- [babel-plugin-module-resolver](https://github.com/tleunen/babel-plugin-module-resolver/blob/master/DOCS.md)


## Installation

#### You can install the project via `npm`
```bash
npm install
```

#### Initial Setup with `nodejs`
```bash
node setup.js
```

#### Place `google-services.json` file to `./android/app` directory
This is required to use `Firebase Cloud Messaging`.

#### For the first time run
```bash
npm run start
```

#### To reset cache if needed
```bash
npm run start -- --reset-cache
```

#### To run on Android Emulator
Here `.env` is our environment variable file
```bash
npx react-native run-android
```

#### To run on Android Emulator using different environment variable
Here `.env.local` is our environment variable file
```bash
APP_ENV=local npx react-native run-android
```

#### To build Android APK
```bash
cd android && ./gradlew assembleRelease; cd ..
```

#### Rename the Android APK
```bash
mv ./android/app/build/outputs/apk/release/app-release.apk ./android/app/build/outputs/apk/release/react-native-skeleton.apk
```

#### To rename the app
- Make sure not to use spaces in new app name
- Manually modify the following files to new name if you need spaces
    - `app.json`
    - `android/app/src/main/res/values/strings.xml`
```bash
npx react-native-rename <newName> -b <bundleIdentifier>
```
> Example:
```bash
npx react-native-rename "ReactNativeProject" -b com.ferdousanam.app
```
> Documentation: [react-native-rename](https://github.com/junedomingo/react-native-rename)


## Credits

- [Ferdous Anam](https://github.com/ferdousanam)
- [All Contributors](../../contributors)


## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
