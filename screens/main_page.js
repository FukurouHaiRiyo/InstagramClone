import React, {useState, useEffect} from 'react';
import { SafeAreaView, View, TouchableOpacity, FlatList } from 'react-native';

import Title from '../Components/Title/Title';
import UserStory from '../Components/UserStory/UserStory';
import UserPost from '../Components/UserPost/userPost';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import globalStyles from '../assets/styles/globalStyles';
import { NavigationContainer } from '@react-navigation/native';

const MainPage = () => {
  // for testing front end
  const userStories = [
    {
      firstName: 'John',
      username: 'John',
      id: 1,
      profileImage: require('../assets/images/default_profile.png'),
    },
    {
      firstName: 'Andrei P.',
      username: 'Andrei P.',
      id: 2,
      profileImage: require('../assets/images/default_profile.png'),
    },

    {
      firstName: 'Thor',
      username: 'Thor',
      id: 3,
      profileImage: require('../assets/images/default_profile.png'),
    },

    {
      firstName: 'Mihai',
      username: 'Mihai',
      id: 4,
      profileImage: require('../assets/images/default_profile.png'),
    },
    {
      firstName: 'Ion',
      username: 'Ion',
      id: 5,
      profileImage: require('../assets/images/default_profile.png'),
    },

    {
      firstName: 'Iulia',
      username: 'Iulia',
      id: 6,
      profileImage: require('../assets/images/default_profile.png'),
    },
  ];

  const userPosts = [
    {
      firstName: 'John',
      username: 'John',
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
      username: 'Andrei P.',
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
      username: 'Thor',
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
      username: 'Mihai',
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
      username: 'Ion',
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
      username: 'Iulia',
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

  const userPostsPageSize = 2;
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

    setIsLoadingUserPosts(true);
    const getInitialDataPost = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderData(getInitialDataPost);
    setIsLoadingUserPosts(false);
  }, []);

  return (
    <SafeAreaView>
      <View style={globalStyles.userPostContainer}>
        <FlatList ListHeaderComponent={
          <>
          <View style={globalStyles.header}>
          <Title title={'Let’s Explore'} />
          <TouchableOpacity style={globalStyles.messageIcon}>
            <FontAwesomeIcon
              icon={faMessage}
              size={20}
              color={'#898DAE'}
            />
          </TouchableOpacity>
        </View>
        <View style={globalStyles.userStoryContainer}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingUserStories) {
                return;
              }
              setIsLoadingUserStories(true);
              const contentToAppend = pagination(
                userStories,
                userStoriesCurrentPage + 1,
                userStoriesPageSize,
              );
              if (contentToAppend.length > 0) {
                setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                setUserStoriesRenderData(prev => [
                  ...prev,
                  ...contentToAppend,
                ]);
              }
              setIsLoadingUserStories(false);
            }}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={userStoriesRenderData}
            renderItem={({item}) => (
              <UserStory
                key={'userStory' + item.id}
                username={item.username}
                profileImage={item.profileImage}
              />
            )}
          />
        </View>
        </>
        } style={{marginBottom: 1, marginLeft: -10, marginRight: -10}}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if(isLoadingUserPosts){
            return;
          }

          setIsLoadingUserPosts(true);
          console.log(
            'Feching more data for you',           
            userPostsCurrentPage + 1
          );

          const contentToAppend = pagination(
            userPosts,
            userPostsCurrentPage + 1,
            userPostsPageSize,
          );

          if(contentToAppend.length > 0){
            setUserPostsCurrentPage(userPostsCurrentPage + 1);
            setUserPostsRenderData(prev => [...prev, ...contentToAppend]);
          }

          setIsLoadingUserPosts(false);
        }} 
        data={userPostssRenderData}
        renderItem={({item}) => (
          <UserPost
            username={item.username} 
            key={item.id}
            image={item.image} 
            likes={item.likes} 
            comments={item.comments} 
            profileImage={item.profileImage}
            location={item.location}
            bookmarks={item.bookmarks}
          />
        )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

export default MainPage;