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
      <Text style={styles.screenHeader}>Login</Text>
      <View style={styles.loginForm}>
        <TextInput placeholder='Username' style={styles.textInput} />
        <TextInput placeholder='Password' style={styles.textInput} />
        <Pressable
          onPress={() => props.onLogIn({ username: 'joe' })}
          style={styles.primaryButton}
          testID='login_button'>
          <Text style={styles.primaryButtonText}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

const ProfileScreen = (props) => {
  return (
    <View testID='profile_screen'>
      <Text style={styles.screenHeader}>Profile</Text>
      <Button onPress={props.onLogOut} testID='logout_button' title='Log Out' />
    </View>
  );
};

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userIsLoggedIn = () => currentUser !== undefined && currentUser !== null;

  return (
    <SafeAreaView>
      {userIsLoggedIn()
        ? <ProfileScreen onLogOut={() => setCurrentUser(null)} user={currentUser} />
        : <LoginScreen onLogIn={setCurrentUser} />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginForm: {
    marginTop: '50%',
  },
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
  },
  screenHeader: {
    fontSize: 24,
    textAlign: 'center',
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
