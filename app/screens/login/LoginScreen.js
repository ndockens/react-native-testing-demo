import React, { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';

import { styles } from './LoginScreen.styles';

const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container} testID='login_screen'>
      <Text style={styles.screenTitle}>Login</Text>
      <View style={styles.loginForm}>
        <TextInput
          autoCapitalize={false}
          onChangeText={(text) => setUsername(text)}
          placeholder='Username'
          style={styles.textInput}
          testID='username_input'
          value={username}
          />
        <TextInput
          onChangeText={(text) => setPassword(text)}
          placeholder='Password' 
          secureTextEntry={true}
          style={styles.textInput}
          testID='password_input'
          value={password}
          />
        <Pressable
          onPress={() => props.onLogIn({ username })}
          style={styles.primaryButton}
          testID='login_button'
          >
          <Text style={styles.primaryButtonText}>Log In</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginScreen;