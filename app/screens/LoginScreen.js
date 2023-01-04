import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const LoginScreen = (props) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

return (
  <View style={styles.container} testID='login_screen'>
    <Text style={styles.screenTitle}>Login</Text>
    <View style={styles.loginForm}>
      <TextInput autoCapitalize={false} onChangeText={(text) => setUsername(text)} placeholder='Username' style={styles.textInput} testID='username_input' value={username} />
      <TextInput onChangeText={(text) => setPassword(text)} placeholder='Password' secureTextEntry={true} style={styles.textInput} testID='password_input' value={password} />
      <Pressable
        onPress={() => props.onLogIn({ username, password })}
        style={styles.primaryButton}
        testID='login_button'
        >
        <Text style={styles.primaryButtonText}>Log In</Text>
      </Pressable>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  loginForm: {
    marginTop: '50%',
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
  screenTitle: {
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

export default LoginScreen;