import {Image, Text, useWindowDimensions, View} from 'react-native';
import Header from '../../components/Header';

const SurveyScreen = props => {
  const {isFeedbackSurvey} = props?.route?.params;
  const {width: deviceWidth} = useWindowDimensions();
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={props.navigation} />
      <View style={{flex: 1, alignItems: 'center', marginTop: 50}}>
        <Image
          resizeMode="contain"
          width={deviceWidth}
          height={deviceWidth}
          source={
            isFeedbackSurvey
              ? require('../../assets/images/feedback_form.png')
              : require('../../assets/images/fitness_survey.png')
          }
        />
        <Text
          style={{
            fontSize: 24,
            color: 'black',
            fontWeight: 'bold',
            marginTop: 100,
            textAlign: 'center',
          }}>
          {isFeedbackSurvey
            ? 'Please Provide Your Valuable Feedback'
            : 'Take The Fitness Survey'}
        </Text>
      </View>
    </View>
  );
};

export default SurveyScreen;
