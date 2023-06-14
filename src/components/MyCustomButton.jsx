import { StyleSheet, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import MyText from './MyText';

export default function MyCustomButton() {
  const [pressColor, setPressColor] = useState('yellow');
  const [pressText, setPressText] = useState('PRESS?');
  return (
    <View>
      <Pressable
        onPressIn={() => {
          setPressColor('green');
          setPressText('PRESSED!');
        }}
        onPressOut={() => {
          setPressColor('yellow');
          setPressText('PRESS?');
        }}
      >
        <MyText content={pressText} size={28} thisColor={pressColor} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
