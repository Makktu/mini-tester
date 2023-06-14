import { Linking, StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openWebsite = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <Text style={styles.headingText}>Previous Orders</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Last Orders</Text>
        </View>
        <Image
          style={styles.imageStyle}
          source={{
            uri: 'https://images.unsplash.com/photo-1523705480679-b5d0cc17a656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: 'limegreen',
    fontSize: 22,
    marginHorizontal: 5,
  },
  card: {
    marginHorizontal: 10,
  },
  elevatedCard: {},
  headerContainer: {},
  headerText: {
    color: 'yellow',
  },
  imageStyle: {
    width: '100%',
    height: 200,
  },
});
