import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { Slot, useRouter, useSegments } from 'expo-router';
import { useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { config } from '@tamagui/config/v2';
import { TamaguiProvider, createTamagui } from 'tamagui'
import { useFonts } from 'expo-font';
import { TimerProvider } from '../src/context/TimerContext';

const CLERK_PUBLISHABLE_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

const InitialLayout = () => {
    const [loaded] = useFonts({
        Munro: require('../assets/fonts/Munro.ttf'),
        MunroNarrow: require('../assets/fonts/MunroNarrow.ttf'),
        MunroSmall: require('../assets/fonts/MunroSmall.ttf'),
        Inter: require('../assets/fonts/MunroSmall.ttf'),
    })
    const { isLoaded, isSignedIn } = useAuth();
    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded || !loaded) return;

        const inTabsGroup = segments[0] === '(auth)';

        console.log('User changed: ', isSignedIn);

        if (isSignedIn && !inTabsGroup) {
        router.replace('/home');
        } else if (!isSignedIn) {
        router.replace('/login');
        }
    }, [isSignedIn]);

    return <Slot />;
};

const tokenCache = {
  async getToken(key: string) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key: string, value: string) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

const queryClient = new QueryClient();
const tamaguiConfig = createTamagui(config);

type Conf = typeof tamaguiConfig
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}

const RootLayout = () => {
  return (
    <TimerProvider>
        <TamaguiProvider config={tamaguiConfig}>
            <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY} tokenCache={tokenCache}>
                <QueryClientProvider client={queryClient}>
                    <InitialLayout />
                </QueryClientProvider>
            </ClerkProvider>
        </TamaguiProvider>
    </TimerProvider>
  );
};

export default RootLayout;