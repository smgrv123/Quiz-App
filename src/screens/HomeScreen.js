import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from '../styles/HomeStyles'

export default HomeScreen = (props) => {
  return (
    <View style={styles.background}>
      <View style={styles.logoBack}>
        <Text style={styles.logoText}>Quizzer</Text>
      </View>
      <TouchableOpacity
        style={styles.signup}
        onPress={() => {
          props.navigation.replace('LoginScreen');
        }}>
        <Text style={styles.tSignUp}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.login}
        onPress={() => {
          props.navigation.replace('SignInScreen');
        }}>
        <Text
          style={styles.tLogin}>
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

