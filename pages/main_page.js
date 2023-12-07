import React, {useState, useEffect} from 'react';
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

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    if(startIndex >= database.length) {
      return [];
    }

    return database.slice(startIndex, endIndex);
  }

  useEffect(() => {
    setIsLoadingUserStories(true);

    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderData(getInitialData);

    setIsLoadingUserStories(false);
  }, []);

  return (
    <SafeAreaView>
      <View style={globalStyles.header}>
        <Title title={'Start exploring'}/>
        <TouchableOpacity style={globalStyles.messageIcon}>
          <FontAwesomeIcon icon={faMessage} color={'#898DAE'}/>
        </TouchableOpacity>
      </View>

      <View style={globalStyles.userStoryContainer}>
        <FlatList 
          onEndReachedThreshold={0.5} 
          onEndReached={() => {
            if(isLoadingUserStories){
              return;
            }
            
            setIsLoadingUserStories(true);
            const contentToAppend = pagination(userStories, userStoriesCurrentPage + 1, userStoriesPageSize);

            if(contentToAppend.length > 0){
              setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
              setUserStoriesRenderData(prev => [...prev, ...contentToAppend]);
            }

            setIsLoadingUserStories(false);
          }}
          horizontal={true} 
          showsHorizontalScrollIndicator={false} 
          data={userStoriesRenderData} 
          renderItem={({item}) => <UserStory key = {item.id} firstName={item.firstName} profileImage={item.profileImage}/>}
        />
      </View>
    </SafeAreaView>
  );
}

export default MainPage;