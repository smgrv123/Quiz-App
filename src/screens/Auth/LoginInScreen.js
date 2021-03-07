import React, {useEffect, useState} from 'react';
import {View, Text, Alert, StyleSheet} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import auth from '@react-native-firebase/auth';
import styles from '../../styles/AuthStyle';
import Store from '../../Store';

export default LoginScreen = (props) => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  function createUser() {
    auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(() => {
        Alert.alert('User account created & signed in!');
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  }

  function logout() {
    props.navigation.replace('HomeScreen');
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  }

  if (initializing) return null;

  if (!user) {
    return (
      <View style={styles.background}>
        <View style={styles.logo}>
          <Text style={styles.textLogo}>Quizzer</Text>
        </View>
        <View style={styles.upv}>
          <Text style={styles.text}>Username</Text>
          <TextInput
            style={styles.userInput}
            keyboardType="email-address"
            placeholder="john.doe@123.com"
            underlineColorAndroid="#3F3C9E"
            onChangeText={(text) => {
              setEmail(text);
            }}
          />
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.userPass}
            secureTextEntry={true}
            multiline={false}
            keyboardType="ascii-capable"
            placeholder="********"
            underlineColorAndroid="#3F3C9E"
            onChangeText={(text) => {
              setPass(text);
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            if (email == '' || email == null || pass == '' || pass == null) {
              Alert.alert('Please enter email and password');
            } else {
              {
                createUser();
              }
            }
          }}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.background}>
      <View style={styles.logo}>
        <Text style={styles.textLogo}>Quizzer</Text>
      </View>
      <View style={styles.emailV}>
        <Text style={styles.textEmail}>{'Welcome ' + user.email}</Text>
      </View>
      <TouchableOpacity
        style={styles.nextBut}
        onPress={() => {
          Store.email = user.email;
          props.navigation.navigate('Type');
        }}>
        <Text style={styles.textAfter}>Journey to be a Quiz Masterrr!!</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logout}
        onPress={() => {
          {
            logout();
          }
        }}>
        <Text style={styles.textAfter}>Log-Out</Text>
      </TouchableOpacity>
    </View>
  );
};
