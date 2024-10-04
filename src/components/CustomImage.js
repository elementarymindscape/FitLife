import {Image} from 'react-native';

const CustomImage = props => {
  const {imageLink = null, width, height} = props;
  return <Image source={imageLink} style={{width: width, height: height}} />;
};

export default CustomImage;
