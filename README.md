## Run the following commands after cloning first time

```bash
npm install
```

#### Initial Setup with `nodejs`
```bash
node setup.js
```

#### For the first time run
```bash
npm run start
```

#### To run on Android Emulator
```bash
APP_ENV=local npx react-native run-android
```

#### To build Android APK
```bash
cd android && ./gradlew assembleRelease; cd ..
```

#### To rename the app
- Make sure not to use spaces in new app name
- Manually modify the following files to new name if you need spaces
    - `app.json`
    - `android/app/src/main/res/values/strings.xml`
```bash
npx react-native-rename "ReactNativeProject" -b com.ferdousanam.app
```
