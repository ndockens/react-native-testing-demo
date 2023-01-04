import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View testID='login'>
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
