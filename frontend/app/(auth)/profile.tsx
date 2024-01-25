import { SafeAreaView, StyleSheet } from 'react-native';
import { YStack } from 'tamagui';
import { ProfileUtils } from '../../src/components/ProfileUtils';
import { UserDetails } from '../../src/components/UserDetails';
import { ProfileHeader } from '../../src/components/ProfileHeader';

const Profile = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <YStack space="$3" style={styles.container} >
            <ProfileHeader />
            <UserDetails />
            <ProfileUtils />
        </YStack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default Profile;