import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';

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

export default App;
