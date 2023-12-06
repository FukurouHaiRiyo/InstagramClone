import React from 'react';
import { SafeAreaView, View, TouchableOpacity, FlatList } from 'react-native';

import Title from '../Components/Title/Title';
import UserStory from '../Components/UserStory/UserStory';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import globalStyles from '../assets/styles/globalStyles';

const MainPage = () => {
  // for testing front end
  const userStories = [
    {
      firstName: 'John',
      id: 1,
      profileImage: require('../assets/images/default_profile.png'),
    },
    {
      firstName: 'Andrei P.',
      id: 2,
      profileImage: require('../assets/images/default_profile.png'),
    },

    {
      firstName: 'Thor',
      id: 3,
      profileImage: require('../assets/images/default_profile.png'),
    },

    {
      firstName: 'Mihai',
      id: 4,
      profileImage: require('../assets/images/default_profile.png'),
    },
    {
      firstName: 'Ion',
      id: 5,
      profileImage: require('../assets/images/default_profile.png'),
    },

    {
      firstName: 'Iulia',
      id: 6,
      profileImage: require('../assets/images/default_profile.png'),
    },
  ];

  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title={'Start exploring'}/>
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faMessage} color={'#898DAE'}/>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.userStoryContainer}>
        <FlatList horizontal={true} showsHorizontalScrollIndicator={false} data={userStories} renderItem={({item}) => <UserStory firstName={item.firstName} profileImage={item.profileImage}/>}/>

      </View>
    </SafeAreaView>
  );
}

export default MainPage;