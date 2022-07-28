import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            
            width: '100%',
            height: getheight,
            marginVertical: 10,
            borderRadius: 5,
            borderColor: getBackgroundColor,
            borderWidth: 1,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            marginVertical: 10,
            borderRadius: 5,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:20
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            bottom:10
          }}>
          <Text style={{textAlign: 'right'}}>{getPercentage}</Text>
        </View>
      </View>
    </View>
  );
};
PercentageBar;


export default function Dashboard() {
    const navigation = useNavigation();
  const onSelectSwitch = index => {
    alert('Selected index: ' + index);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 25, margin: 20, textAlign:'center'}}>
        React native progress bar
      </Text>
      <View style={{width: '80%', justifyContent: 'center'}}>
        <PercentageBar
          height={20}
          backgroundColor={'grey'}
          completedColor={'blue'}
          percentage={'65%'}
        />
      </View>
    </View>
  );
}