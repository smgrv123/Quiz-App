import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Store from '../Store';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles/FinalStyle';
import firestore from '@react-native-firebase/firestore';

export default page3 = (props) => {
  console.log('heelo', Store.email);
  const usersCollection = firestore().collection('LeaderBoard');

  const upload = () => {
    usersCollection
      .add({
        Email: Store.email,
        Score: Store.ans,
        Questions: Store.num,
        Genre: Store.genre,
        Difficulty: Store.dif,
      })
      .then(() => {
        Alert.alert(
          'LeaderBoard updated....',
          'Your Score has been added',
          [
            {
              text: 'Ok',
              onPress: () => props.navigation.navigate('LeaderBoard'),
            },
          ],
          {cancelable: false},
        );
        console.log('User added!');
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.background}>
      <Icon name="score" size={100} style={styles.Icon} color="#3F3C9E" />
      <Text style={styles.Score}>{Store.ans + '/' + Store.num}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Store.ans = 0;
          props.navigation.replace('page1');
        }}>
        <Text style={styles.btntext}>Want Try Again </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.leaderboard}
        onPress={() => {
          upload();
        }}>
        <Text style={styles.leaderText}>Go to LeaderBoard</Text>
      </TouchableOpacity>
    </View>
  );
};
