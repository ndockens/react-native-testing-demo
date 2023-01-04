import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const ProfileScreen = (props) => {
  return (
    <View style={styles.container} testID='profile_screen'>
      <Text style={styles.screenTitle}>Profile</Text>
      <Text style={styles.welcomeMessage}>Welcome, {props.user.username}!</Text>
      <Button
        color={styles.logOutButton.color}
        onPress={props.onLogOut}
        testID='logout_button'
        title='Log Out'
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  logOutButton: {
    color: 'darkred',
  },
  screenTitle: {
    fontSize: 24,
    textAlign: 'center',
  },
  welcomeMessage: {
    fontSize: 30,
    marginTop: 40,
    textAlign: 'center',
  },
});

export default ProfileScreen;