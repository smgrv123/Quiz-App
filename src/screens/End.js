import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../styles/EndStyle';

export default End = (props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.background}>
      <Text style={styles.text}>You have Finish the Quiz...</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.replace('page3');
        }}>
        <Text style={styles.btnText}>To view your score CLICK ME!</Text>
      </TouchableOpacity>
    </View>
  );
};
