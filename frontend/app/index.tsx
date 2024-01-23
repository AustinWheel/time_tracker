import { ActivityIndicator, View } from 'react-native';
import { green } from '../assets/themes/colors';

const StartPage = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" color={green.green10} />
    </View>
  );
};

export default StartPage;