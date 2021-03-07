import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import Store from '../../Store';
import firestore from '@react-native-firebase/firestore';
import ActivityInd from '../ActivityInd';
import styles from '../../styles/LeaderStyle'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default LeaderBoard = (props) => {
  const [leader, setLeader] = useState('');
  const [load, setLoad] = useState(true);

  setTimeout(() => {
    setLoad(false);
  }, 1500);

  useEffect(() => {
    var temp = [];
    firestore()
      .collection('LeaderBoard')
      .where('Genre', '==', Store.genre)
      .where('Questions', '==', Store.num)
      .where('Difficulty', '==', Store.dif)
      .orderBy('Score', 'desc')
      .get()
      .then((snap) => {
        snap.docs.forEach((doc) => {
          temp.push(doc.data());
          setLeader(temp);
        });
      });
  }, []);
  
  if (load) {
    return (
      <View style={styles.aBack}>
        <ActivityInd />
      </View>
    );
  } else {
    return (
      <View style={styles.background}>
        <FlatList
          data={leader}
          ListHeaderComponent={() => (
            <Text style={styles.leader}>LeaderBoard</Text>
          )}
          renderItem={({item}) => (
            <View style={styles.fView}>
              <>
                <Text style={styles.email}>{item.Email}</Text>
                <Text style={styles.score}>
                  {item.Score + '/' + item.Questions}
                </Text>
              </>
            </View>
          )}
          ListFooterComponent={()=>(
            <View>
              <TouchableOpacity
              style={{
                backgroundColor:"#3F3C9E",
                marginTop:"15%",
                marginLeft:"20%",
                marginRight:"20%",
                borderRadius:10
              }}
              onPress={()=>{
                props.navigation.replace("Type")
              }}
              >
                <Text
                style={{
                  color:"#ffffff",
                  fontSize:25,
                  textAlign:"center",
                  padding:5
                }}
                >
                  Lets Go Again
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    );
  }
};


