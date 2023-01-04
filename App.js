import React, { useState } from 'react';
import {
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const LoginScreen = (props) => {
  return (
    <View style={styles.loginScreen} testID='login_screen'>
      <Text>Login</Text>
      <TextInput style={styles.textInput} placeholder='Username' />
      <TextInput style={styles.textInput} placeholder='Password' />
      {/* <Button
        testID='login_button'
        title='Log In'
        color={styles.primaryButton.color}
        onPress={() => props.onLogIn({ username: 'joe' })}
        /> */}
      <Pressable
        onPress={() => props.onLogIn({ username: 'joe' })}
        style={styles.primaryButton}
        testID='login_button'>
        <Text style={styles.primaryButtonText}>Log In</Text>
      </Pressable>
    </View>
  );
};

const ProfileScreen = (props) => {
  return (
    <View testID='profile_screen'>
      <Text>Profile</Text>
      <Button testID='logout_button' title='Log Out' onPress={props.onLogOut} />
    </View>
  );
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userIsLoggedIn = () => currentUser !== undefined && currentUser !== null;

  return (
    <SafeAreaView>
      {userIsLoggedIn()
        ? <ProfileScreen user={currentUser} onLogOut={() => setCurrentUser(null)} />
        : <LoginScreen onLogIn={setCurrentUser} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginScreen: {
    padding: 20,
  },
  primaryButton: {
    backgroundColor: 'darkred',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginTop: 30,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  textInput: {
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    fontSize: 20,
    marginVertical: 6,
    padding: 10,
  }
});

export default App;
