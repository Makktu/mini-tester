import { ScrollView, StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
    {
      personName: 'John',
      personStatus: 'front room, coding',
      personImage: '',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView scrollEnabled={false}>
        <FlatList data={contacts}></FlatList>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'white',
    fontSize: 24,
  },
});
