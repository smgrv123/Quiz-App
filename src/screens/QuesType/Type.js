import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import RadioForm from 'react-native-simple-radio-button';
import Store from '../../Store';
import styles from '../../styles/TypeStyle';

var diff = [
  {value: 'easy', label: 'Easy'},
  {value: 'medium', label: 'Medium'},
  {value: 'hard', label: 'Hard'},
];

export default page2 = (props) => {
  const [num, setNum] = useState(0);
  const [dif, setDif] = useState();

  return (
    <View style={styles.background}>
      <Text style={styles.numText}>Enter the Number of Questions</Text>
      <View style={styles.inView}>
        <TextInput
          style={styles.input}
          keyboardType="decimal-pad"
          underlineColorAndroid="#3F3C9E"
          onChangeText={(val) => {
            setNum(val);
            Store.num = val;
          }}
          placeholder="5"
        />
      </View>
      <Text style={styles.text}>Let's see Your Skillz</Text>
      <View
        style={{
          marginTop: '5%',
          marginLeft: '5%',
        }}>
        <RadioForm
          labelStyle={{marginRight: 10}}
          radio_props={diff}
          labelColor="#FFFFFF"
          selectedLabelColor="#FFFFFF"
          formHorizontal={true}
          buttonColor="#FFFFFF"
          selectedButtonColor="#FFFFFF"
          onPress={(qwe) => {
            setDif(qwe);
            Store.dif = qwe;
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => {
          if (num < 5) {
            Alert.alert(
              'Number of questions',
              'Please enter number of questions',
              [
                {
                  text: 'OK',
                },
              ],
              {cancelable: false},
            );
          } else if (num <= 20) {
            props.navigation.navigate('Genre');
          } else {
            Alert.alert(
              'Number of questions',
              'Number of questions crossing limit',
              [
                {
                  text: 'OK',
                },
              ],
              {cancelable: false},
            );
          }
        }}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
