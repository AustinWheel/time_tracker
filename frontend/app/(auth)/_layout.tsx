import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';
import { green } from '../../assets/themes/colors';
import { router } from 'expo-router';
import { ChevronLeft } from '@tamagui/lucide-icons';

export const LogoutButton = () => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <Pressable onPress={doLogout} style={{ marginRight: 10 }}>
      <Ionicons name="log-out-outline" size={24} color={'#000'} />
    </Pressable>
  );
};

export const BackButton = () => {
    const doBackPage = () => {
        if (router.canGoBack()) router.back();
    };
  
    return (
            <Pressable onPress={doBackPage} style={{ marginRight: 10 }}>
                <ChevronLeft size={24} color={'#000'} />
            </Pressable>
    );
  };

const TabsPage = () => {
  const { isSignedIn } = useAuth();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: green.green11,
        headerStyle: {
          backgroundColor: '#fff',
        },
        headerTintColor: '#000',
      }}>
      <Tabs.Screen
        name="home"
        options={{
          headerTitle: '',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" size={size} color={color} />,
          tabBarLabel: 'Home',
        }}
        redirect={!isSignedIn}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: 'My Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" size={size} color={color} />,
          tabBarLabel: 'My Profile',
          headerRight: () => <LogoutButton />,
          headerShown: false,
        }}
        redirect={!isSignedIn}
      />
    </Tabs>
  );
};

export default TabsPage;