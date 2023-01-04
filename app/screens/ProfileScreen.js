import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';


const ProfileScreen = (props) => {
  return (
    <View testID='profile_screen'>
    <Text style={styles.screenHeader}>Profile</Text>
    <Text>Welcome, {props.user.username}!</Text>
    <Button onPress={props.onLogOut} testID='logout_button' title='Log Out' />
    </View>
  );
};

const styles = StyleSheet.create({
  screenHeader: {
    fontSize: 24,
    textAlign: 'center',
  }
});

export default ProfileScreen;