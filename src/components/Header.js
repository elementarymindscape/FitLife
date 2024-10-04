import {Image, Text, TouchableOpacity, View} from 'react-native';

const Header = props => {
  const {fromHome = false} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        height: 60,
        backgroundColor: 'white',
        elevation: 10,
      }}>
      <TouchableOpacity
        disabled={fromHome}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={() => props.navigation.navigate('Home')}>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          FitLife
        </Text>
        {/* <Image
          source={{
            uri: 'https://i.pinimg.com/736x/f2/22/88/f222889e048a8057e8c43e942ec98e04.jpg',
          }}
          width={50}
          height={50}
          resizeMode="contain"
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
