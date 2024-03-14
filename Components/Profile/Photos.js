import React from 'react';
import {View, Text, Image} from 'react-native';

import styles from './stylesPhotos';
import PropTypes from 'prop-types';

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
                <Image source={{uri:photo.imageSrc}} style={{width: 320, height: 400}}/>

                <View style={{position: 'absolute', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: 'white', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center'}}>
                    <SvgIcon name='heart' fill='currentColor' width={8} height={8} />
                    {photo.likes.length}
                  </Text>

                  <Text style={{color: 'white', fontWeight: 'bold', flexDirection: 'row', alignItems: 'center'}}>
                    <SvgIcon name='comment' fill='currentColor' width={8} height={8} />
                    {photo.comments.length}
                  </Text>
                </View>
              </View>
          )): null
        }
      </View>

      {!photos || (photos.length == 0 && <Text style={{textAlign: 'center', fontSize: 20}}>No posts yet</Text>)}
    </View>
  )
}

Photos.propTypes = {
  photos: PropTypes.array
}

export default Photos;