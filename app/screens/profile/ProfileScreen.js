import React from 'react';
import { Button, Text, View } from 'react-native';

import { styles } from './ProfileScreen.styles';

const ProfileScreen = (props) => {
  return (
    <View style={styles.container} testID='profile_screen'>
      <Text style={styles.screenTitle}>Profile</Text>
      <Text style={styles.welcomeMessage}>
        Welcome, {props.user.username}!
      </Text>
      <Button
        color={styles.logOutButton.color}
        onPress={props.onLogOut}
        testID='logout_button'
        title='Log Out'
        />
    </View>
  );
};

export default ProfileScreen;