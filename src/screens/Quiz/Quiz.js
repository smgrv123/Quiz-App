import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import Axios from 'axios';
import End from './End';
import ActivityInd from '../ActivityInd';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Store from '../../Store';
import styles from '../../styles/QuizStyle';

export default page1 = (props) => {
  const [m, setM] = useState(true);
  const [quiz, setQuiz] = useState();
  const [ans, setAns] = useState();
  const [refresh, setRefresh] = useState(0);

  function getData() {
    var tempArray = [];
    Axios.get(
      'https://opentdb.com/api.php?amount=' +
        Store.num +
        '&category=' +
        Store.genre +
        '&difficulty=' +
        Store.dif +
        '&type=multiple',
    ).then((res) => {
      res.data.results.forEach((value) => {
        var tempObj = {};
        var tempOptions = value['incorrect_answers'];
        tempOptions = [...tempOptions, value['correct_answer']];
        tempObj['correctAns'] = value['correct_answer'];
        tempObj['options'] = tempOptions;
        tempObj['ques'] = value['question'];
        tempArray.push(tempObj);
      });
      setQuiz(tempArray);
      Store.quiz = tempArray;
      setM(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  if (m) {
    return <ActivityInd />;
  } else if (refresh != Store.num) {
    return (
      <View style={{flex: 1, backgroundColor: '#3F3C9E'}}>
        <Text style={styles.text}>{quiz[refresh].ques}</Text>
        <TouchableOpacity
          style={styles.options}
          onPress={(val) => {
            setAns(0);
          }}>
          <Text style={styles.TextOpt}>{quiz[refresh].options[0]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => {
            setAns(1);
          }}>
          <Text style={styles.TextOpt}>{quiz[refresh].options[1]} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => {
            setAns(2);
          }}>
          <Text style={styles.TextOpt}>{quiz[refresh].options[2]} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.options}
          onPress={() => {
            setAns(3);
          }}>
          <Text style={styles.TextOpt}>{quiz[refresh].options[3]}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.nBtn}
          onPress={() => {
            if (quiz[refresh].options[ans] == quiz[refresh].correctAns) {
              Store.ans = Store.ans + 1;
              setAns(0);
            }
            setRefresh(refresh + 1);
          }}>
          <Text style={styles.nTxt}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return <End />;
  }
};
