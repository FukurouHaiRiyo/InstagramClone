import React from 'react';
import { SafeAreaView, Text, View, TouchableOpacity } from 'react-native';

import Title from './Components/Title/Title';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import globalStyles from './assets/styles/globalStyles';

const App = () => {

  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title={'Start exploring'}/>
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faMessage} color={'#898DAE'}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default App;
