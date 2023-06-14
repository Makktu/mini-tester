import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
import BasicCard from './src/components/BasicCard';
import ElevatedCards from './src/components/ElevatedCards';
import FancyCard from './src/components/FancyCard';
import MyCustomButton from './src/components/MyCustomButton';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <View style={{ backgroundColor: '#000108', height: '100%' }}>
      <SafeAreaView />
      <StatusBar style='light' />
      <ScrollView>
        <BasicCard />
        <ElevatedCards />
        <FancyCard />
        <MyCustomButton />
      </ScrollView>
    </View>
  );
};

export default App;
