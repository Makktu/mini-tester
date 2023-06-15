import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import BasicCard from './src/components/BasicCard';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCard from './src/components/FancyCard';
import MyCustomButton from './src/components/MyCustomButton';
import ActionCard from './src/components/ActionCard';
import ContactList from './src/components/ContactList';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <View style={{ backgroundColor: '#212147', height: '100%' }}>
      <SafeAreaView />
      <StatusBar style='light' />
      <ScrollView>
        <BasicCard />
        <ElevatedCards />
        <FancyCard />
        <MyCustomButton />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </View>
  );
};

export default App;
