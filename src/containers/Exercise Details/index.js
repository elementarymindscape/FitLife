import {ScrollView, Text, View} from 'react-native';
import CarouselZoomer from '../../components/ImageCarousel';
import Header from '../../components/Header';

const ExerciseDetails = props => {
  const {exerciseData} = props.route.params;
  return (
    <View style={{flex: 1}}>
      <Header navigation={props.navigation} />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingBottom: 30}}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginTop: 20,
          }}>
          {exerciseData?.name}
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'bold',
            marginVertical: 5,
            textTransform: 'capitalize',
          }}>
          Level: {exerciseData?.level}
        </Text>
        <CarouselZoomer data={exerciseData.images} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 5,
            marginTop: 20,
          }}>
          Instructions
        </Text>
        {exerciseData.instructions.map((el, index) => {
          return (
            <Text style={{marginBottom: 10}} key={index}>
              <Text style={{fontWeight: 'bold', marginRight: 5}}>
                {`${index + 1})`}{' '}
              </Text>
              {el}
            </Text>
          );
        })}
        <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 10}}>
          Primary Muscle Group(s)
        </Text>
        <View style={{flexDirection: 'row'}}>
          {exerciseData.primaryMuscles.map((el, index) => {
            return (
              <Text key={index} style={{textTransform: 'capitalize'}}>{`${el}${
                index + 1 == exerciseData.primaryMuscles.length ? '' : ', '
              }`}</Text>
            );
          })}
        </View>
        {exerciseData.secondaryMuscles.length > 0 ? (
          <>
            <Text style={{fontSize: 24, fontWeight: 'bold', marginTop: 10}}>
              Secondary Muscle Group(s)
            </Text>
            <View style={{flexDirection: 'row'}}>
              {exerciseData.secondaryMuscles.map((el, index) => {
                return (
                  <Text
                    key={index}
                    style={{textTransform: 'capitalize'}}>{`${el}${
                    index + 1 == exerciseData.secondaryMuscles.length
                      ? ''
                      : ', '
                  }`}</Text>
                );
              })}
            </View>
          </>
        ) : null}
      </ScrollView>
    </View>
  );
};

export default ExerciseDetails;
