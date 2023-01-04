import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

const LoginScreen = (props) => {
  return (
    <View testID='login_screen'>
      <Text>Login</Text>
      <Button testID='login_button' title='Log In' onPress={() => props.onLogIn({ username: 'joe' })} />
    </View>
  );
};

const ProfileScreen = (props) => {
  return (
    <View testID='profile_screen'>
      <Text>Profile</Text>
    </View>
  );
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userIsLoggedIn = () => currentUser !== undefined && currentUser !== null;

  return (
    <SafeAreaView>
      {userIsLoggedIn()
        ? <ProfileScreen user={currentUser} />
        : <LoginScreen onLogIn={setCurrentUser} />}
    </SafeAreaView>
  );
};

export default App;
