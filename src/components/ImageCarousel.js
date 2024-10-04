import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Text,
  useWindowDimensions,
} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

const CarouselZoomer = props => {
  const {data: imgData} = props;
  const {width: deviceWidth} = useWindowDimensions();

  const _renderBottom = () => {
    return imgData.map((item, index) => (
      <View key={index}>
        <Image
          source={item}
          style={{
            width: deviceWidth * 0.8,
            height: deviceWidth * 0.8,
            marginTop: 10,
          }}
          resizeMode="contain"
        />
      </View>
    ));
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View>{_renderBottom()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  TopCatImgWrap: {backgroundColor: '#fff'},
  TopCatWrap: {
    alignItems: 'center',
    marginLeft: 10,
    backgroundColor: '#fff',
    alignContent: 'center',
    padding: 10,
    borderRadius: 8,
  },
  ActiveTopCatWrap: {
    alignItems: 'center',
    backgroundColor: '#fff',
    alignContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 8,
  },
});

export default CarouselZoomer;
