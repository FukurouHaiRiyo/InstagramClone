import React from 'react';
import { Image, SafeAreaView, ScrollView, Text, Touchable, TouchableOpacity, View} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import styles from './style';
import globalStyles from '/Users/andrei-stefanpanait/Desktop/LeetCode/reacttutorial/assets/styles/globalStyles.js'

const Profile = () => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
        {/* back arrow to send the user back to main_page */}
        <TouchableOpacity style={styles.backArrow}>
            {/* <FontAwesomeIcon icon='fa-arrow-left' />    */}
        </TouchableOpacity>

        <Text> Profile </Text>

        <ScrollView contentContainerStyle={globalStyles.flexGrow}>
            <View style={styles.profileImageContainer}>
                
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Profile;