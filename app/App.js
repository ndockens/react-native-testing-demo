import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import LoginScreen from './screens/login/LoginScreen';
import ProfileScreen from './screens/profile/ProfileScreen';
import TodoScreen from './screens/todo/Todo';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const userIsLoggedIn = () => currentUser !== undefined && currentUser !== null;

  return (
    <SafeAreaView>
      {userIsLoggedIn()
        // ? <ProfileScreen onLogOut={() => setCurrentUser(null)} user={currentUser} />
        ? <TodoScreen />
        : <LoginScreen onLogIn={setCurrentUser} />}
    </SafeAreaView>
  );
};

export default App;
