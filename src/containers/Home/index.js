import {
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = props => {
  return (
    <ImageBackground
      style={{flex: 1}}
      source={{
        uri: 'https://img.freepik.com/premium-photo/powerful-fitness-gym-background_849761-28991.jpg',
      }}
      resizeMode="cover">
      <Header fromHome navigation={props.navigation} />
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <Text
          style={{
            fontSize: 40,
            textAlign: 'center',
            color: 'white',
            fontWeight: '600',
            marginTop: 50,
          }}>
          Welcome To
        </Text>
        <Text
          style={{
            fontSize: 42,
            textAlign: 'center',
            color: 'white',
            fontWeight: 'bold',
          }}>
          FitLife <Text style={{fontWeight: 600}}>App</Text>
        </Text>
        {/* <Image
          source={{
            uri: 'https://static.vecteezy.com/system/resources/previews/009/314/343/non_2x/man-character-training-at-the-gym-vector-illustration-free-png.png',
          }}
          style={{alignSelf: 'center'}}
          height={200}
          width={150}
          resizeMode="contain"
        /> */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            flex: 1,
            justifyContent: 'space-between',
            marginHorizontal: 30,
            marginTop: 'auto',
            marginBottom: 100,
          }}>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Survey', {
                isFeedbackSurvey: false,
              })
            }>
            <MatIcon name="qrcode-scan" size={48} color="white" />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 5,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Fitness{'\n'}Survey
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('Survey', {
                isFeedbackSurvey: true,
              })
            }>
            <MatIcon name="qrcode-scan" size={48} color="white" />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 5,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Feedback{'\n'}Form
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Exercises')}>
            <MatIcon name="book-search" size={48} color="white" />
            <Text
              style={{
                textAlign: 'center',
                marginTop: 5,
                color: 'white',
                fontWeight: 'bold',
              }}>
              Find an{'\n'}Exercise
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
