import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => {
  const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
  };
  // switch app configuration based on environment
  if (process.env.APP_ENV === 'dev') {
    return {
      ...config,
      slug: `DEV - ${config.slug}`,
      name: `DEV - ${config.name}`,
      updates: {
        url: 'https://u.expo.dev/YOUR-DEV-PROJECT-ID',
      },
      ios: {
        ...config.ios,
        bundleIdentifier: 'com.yourcompany.yourappname-dev',
        buildNumber: '1.0.0',
      },
      android: {
        ...config.android,
        package: 'com.yourcompany.yourappname.dev',
        versionCode: 1,
      },
      extra: {
        ...config.extra,
        eas: { projectId: 'YOUR-DEV-PROJECT-ID' },
        env: process.env.APP_ENV,
        firebaseConfig,
        // add more env variables...
      },
    };
  }

  return {
    ...config,
    slug: config.slug ?? '',
    name: config.name ?? '',
    ios: {
      ...config.ios,
      bundleIdentifier: 'com.yourcompany.yourappname',
      buildNumber: '1.0.0',
    },
    android: {
      ...config.android,
      package: 'com.yourcompany.yourappname',
      versionCode: 1,
    },
    extra: {
      ...config.extra,
      env: 'prod',
      firebaseConfig,
    },
  };
};
