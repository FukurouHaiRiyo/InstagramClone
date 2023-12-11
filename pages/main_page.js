import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, TouchableOpacity, FlatList } from 'react-native';

import Title from '../Components/Title/Title';
import UserStory from '../Components/UserStory/UserStory';
import UserPost from '../Components/UserPost/userPost';
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

  const userPosts = [
    {
      firstName: 'John',
      location: 'Bucharest',
      likes: 10,
      comments: 5,
      bookmarks: 2,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png'),
      id: 1,
    },

    {
      firstName: 'Andrei P.',
      location: 'Bucharest',
      likes: 10,
      comments: 5,
      bookmarks: 2,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png'),
      id: 2,
    },

    {
      firstName: 'Thor',
      location: 'Bucharest',
      likes: 10,
      comments: 5,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png'),
      bookmarks: 2,
      id: 3,
    },

    {
      firstName: 'Mihai',
      location: 'Bucharest',
      likes: 10,
      comments: 5,
      bookmarks: 2,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Ion',
      location: 'Bucharest',
      likes: 10,
      comments: 5,
      bookmarks: 2,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png'),
      id: 5,
    },

    {
      firstName: 'Iulia',
      location: 'Bucharest',
      likes: 10,
      comments: 5,
      bookmarks: 2,
      image: require('../assets/images/default_post.png'),
      profileImage: require('../assets/images/default_profile.png'),
      id: 6,
    }
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderData, setUserStoriesRenderData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 4;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostssRenderData, setUserPostsRenderData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

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
          renderItem={({item}) => (<UserStory key = {item.id} firstName={item.firstName} profileImage={item.profileImage}/>)}
        />
      </View>

      <View style={globalStyles.userPostContainer}>
        <FlatList data={userPosts} renderItem={({item}) => (
          <UserPost
            firstName={item.firstName} 
            key={item.id}
            image={item.image} 
            likes={item.likes} 
            comments={item.comments} 
            profileImage={item.profileImage}
            location={item.location}
            bookmarks={item.bookmarks}
          />
        )}/>
      </View>
    </SafeAreaView>
  );
}

export default MainPage;