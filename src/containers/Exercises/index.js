import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import DropdownPicker from '../../components/DropdownPicker';
import {useMemo, useState} from 'react';
import ExerciseJSON from '../../assets/exercises';
import Header from '../../components/Header';
import MatIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const UNIQUE_BODY_PART = [
  {label: 'select', value: ''},
  {label: 'abdominals', value: 'abdominals'},
  {label: 'hamstrings', value: 'hamstrings'},
  {label: 'adductors', value: 'adductors'},
  {label: 'quadriceps', value: 'quadriceps'},
  {label: 'biceps', value: 'biceps'},
  {label: 'shoulders', value: 'shoulders'},
  {label: 'chest', value: 'chest'},
  {label: 'middle back', value: 'middle back'},
  {label: 'calves', value: 'calves'},
  {label: 'glutes', value: 'glutes'},
  {label: 'lower back', value: 'lower back'},
  {label: 'lats', value: 'lats'},
  {label: 'triceps', value: 'triceps'},
  {label: 'traps', value: 'traps'},
  {label: 'forearms', value: 'forearms'},
  {label: 'neck', value: 'neck'},
  {label: 'abductors', value: 'abductors'},
];
const UNIQUE_EXERCISE_LEVEL = [
  {label: 'select', value: ''},
  {label: 'beginner', value: 'beginner'},
  {label: 'intermediate', value: 'intermediate'},
  {label: 'expert', value: 'expert'},
];

const ExercisesScreen = props => {
  const [bodyPart, setBodyPart] = useState('');
  const [exerciseLevel, setExerciseLevel] = useState('');

  const findAndSetSelectecExercise = id => {
    const exercise = ExerciseJSON.find(el => el.id == id);
    props.navigation.navigate('ExerciseDetails', {
      exerciseData: exercise,
    });
  };

  const filteredData = useMemo(() => {
    if (bodyPart && exerciseLevel) {
      return ExerciseJSON.filter(
        el => el.primaryMuscles.includes(bodyPart) && el.level == exerciseLevel,
      );
    } else if (bodyPart) {
      return ExerciseJSON.filter(el => el.primaryMuscles.includes(bodyPart));
    } else if (exerciseLevel) {
      console.log(exerciseLevel);
      return ExerciseJSON.filter(el => el.level == exerciseLevel);
    }
    return ExerciseJSON;
  }, [bodyPart, exerciseLevel]);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Header navigation={props.navigation} />
      <Text
        style={{
          marginTop: 20,
          marginBottom: 10,
          fontSize: 24,
          fontWeight: 'bold',
          paddingHorizontal: 15,
          color: 'black',
        }}>
        Find An Exercise
      </Text>
      <ScrollView
        stickyHeaderIndices={[0]}
        contentContainerStyle={{
          paddingBottom: 20,
          paddingTop: 10,
          paddingHorizontal: 15,
        }}>
        <View style={{backgroundColor: 'white'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{flex: 0.5, marginRight: 15}}>
              <DropdownPicker
                selectedOption={bodyPart}
                onChange={value => setBodyPart(value)}
                pickerCss={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 4,
                  borderColor: '#D5D5D5',
                }}
                placeholder={'Body Part'}
                options={UNIQUE_BODY_PART}
              />
            </View>
            <View style={{flex: 0.5}}>
              <DropdownPicker
                selectedOption={exerciseLevel}
                onChange={value => setExerciseLevel(value)}
                pickerCss={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 4,
                  borderColor: '#D5D5D5',
                }}
                placeholder={'Exercise Level'}
                options={UNIQUE_EXERCISE_LEVEL}
              />
            </View>
          </View>
        </View>
        {filteredData?.length > 0 ? (
          filteredData.map(exercise => {
            return (
              <TouchableOpacity
                key={exercise.id}
                onPress={() => findAndSetSelectecExercise(exercise.id)}
                style={{
                  paddingVertical: 10,
                  borderWidth: 1,
                  borderColor: '#ccc',
                  borderRadius: 4,
                  paddingHorizontal: 10,
                  marginVertical: 10,
                }}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'black',
                    flex: 1,
                  }}>
                  {exercise.name}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      textTransform: 'capitalize',
                      color: 'black',
                    }}>
                    Primary Muscle Group: {exercise?.primaryMuscles?.[0]}
                  </Text>
                  <Text style={{fontWeight: 500, textTransform: 'capitalize'}}>
                    {exercise.level}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Text style={{color: 'blue'}}>Read More</Text>
                  <MatIcon name="chevron-right" size={20} color="blue" />
                </View>
              </TouchableOpacity>
            );
          })
        ) : (
          <View style={{marginTop: 15}}>
            <Text
              style={{
                textTransform: 'capitalize',
                color: 'black',
                fontSize: 16,
              }}>
              No Exercises Found for {bodyPart} at {exerciseLevel} level
            </Text>
            <TouchableOpacity
              onPress={() => {
                setBodyPart('');
                setExerciseLevel('');
              }}
              style={{marginTop: 10}}>
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Reset Selection
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default ExercisesScreen;
