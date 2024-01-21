module.exports = {
    name: 'expo-timer',
    version: '1.0.0',
    extra: {
      clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
    },
    plugins: [
        "expo-router"
    ]
  };