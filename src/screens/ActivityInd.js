import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ActivityInd = () => {
  return (
    <View style={{backgroundColor: '#ffffff', flex: 1}}>
      <View style={styles.logoBack}>
        <Text style={styles.logoText}>Quizzer</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoBack: {
    backgroundColor: '#3F3C9E',
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '50%',
    height: '25%',
    justifyContent: 'center',
    borderRadius: 50,
  },
  logoText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 35,
    textAlign: 'center',
  },
});
