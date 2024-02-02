import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './stylesPhotos';

const Photos = ({photos}) => {
  return (
    <View style={styles.container}>
      <View style={styles.photosContainer}>
        {!photos
          ? new Array(12).fill(0).map((_, i) => (
              <Text>Loading...</Text>
          ))
          : photos.length > 0 ? photos.map((photo) => (
              <View key={photo.docId} style={styles.photosWrapper}>
                
              </View>
          )): null
        }
      </View>
    </View>
  )
}

export default Photos;