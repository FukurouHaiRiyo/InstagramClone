import React from 'react';
import MainNavigation from './navigation/main_nav';
// import FirebaseContext from './context/firebase';
// import { firebase, FieldValue } from './lib/firebase';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    // <Routes/>
    <MainPage/>

    // <FirebaseContext.Provider value = {{firebase, FieldValue}}>
    //   <NavigationContainer>
    //     <MainNavigation/>
    //   </NavigationContainer>
    // </FirebaseContext.Provider>
  );
}

export default App;
