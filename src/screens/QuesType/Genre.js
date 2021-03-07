import React from 'react';
import {View, TouchableOpacity, Text, Alert, StyleSheet} from 'react-native';
import Store from '../../Store';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import styles from '../../styles/GenreStyle';

export default Genre = (props) => {
  return (
    <View style={styles.backgroundColor}>
      <>
        <Text style={styles.Heading}>Selecting the Experience</Text>
      </>
      <View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            Store.genre = 10;
          }}>
          <Icon
            color="#ffffff"
            name="bookshelf"
            size={30}
            style={{marginTop: 6}}
          />
          <Text style={styles.Text}>Books</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            Store.genre = 11;
          }}>
          <Icon
            color="#ffffff"
            name="movie-open-outline"
            size={30}
            style={{marginTop: 6}}
          />
          <Text style={styles.Text}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            Store.genre = 15;
          }}>
          <Icon1
            color="#ffffff"
            name="games"
            size={30}
            style={{marginTop: 6}}
          />
          <Text style={styles.Text}>Video Games</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => {
            Store.genre = 23;
          }}>
          <Icon1
            color="#ffffff"
            name="history-edu"
            size={30}
            style={{marginTop: 6}}
          />
          <Text style={styles.Text}>History</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.NavButton}
        onPress={() => {
          if (Store.genre == 0) {
            Alert.alert(
              'No Genre Selected',
              '',
              [
                {
                  text: 'OK',
                },
              ],
              {cancelable: false},
            );
          } else {
            props.navigation.replace('Quiz');
          }
        }}>
        <Text style={styles.NavText}>Let's Jump In</Text>
      </TouchableOpacity>
    </View>
  );
};
