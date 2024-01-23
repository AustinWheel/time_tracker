import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { green } from '../../assets/themes/colors';

const Profile = () => {
  const { user } = useUser();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSaveUser = async () => {
    try {
      const result = await user.update({
        firstName: firstName,
        lastName: lastName,
      });
      setFirstName('');
      setLastName('');
    } catch (e) {
      console.log('🚀 ~ file: profile.tsx:18 ~ onSaveUser ~ e', JSON.stringify(e));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>
        Good morning {user.firstName} {user.lastName}!
      </Text>

      <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.inputField} />
      <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={styles.inputField} />
      <Button onPress={onSaveUser} title="Update account" color={green.green10}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: green.green10,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});

export default Profile;