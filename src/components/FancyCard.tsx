import { StyleSheet, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import MyText from './MyText';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Places</Text>
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1674301927403-870c370ef75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnJlZSUyMGZhY3Rvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <MyText content='Factory' size={22} thisColor='black' />
          <MyText content='Coventry, England' size={14} thisColor='black' />
          <View>
            <MyText
              content='Customer No.: S332456'
              size={14}
              thisColor='black'
            />
          </View>
          <Text style={styles.cardFooter}>Tap Image to play video</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageHeader: {
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 64,
  },
  headingText: {
    fontSize: 28,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 6,
    color: 'skyblue',
  },
  card: {
    backgroundColor: 'whitesmoke',
    marginHorizontal: 10,
  },
  cardElevated: {},
  cardImage: {
    height: 180,
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
  },
  cardTitle: {},
  cardLabel: {},
  cardFooter: {
    color: 'darkblue',
    margin: 5,
  },
  cardHeaderStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  // textStyle: {
  //   fontSize: 22,
  //   fontWeight: 'bold',
  //   paddingHorizontal: 10,
  //   color: 'slategray',
  // },
  // cardStyle: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   textAlignVertical: 'center',
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  //   height: 100,
  //   width: 100,
  //   margin: 5,
  //   borderRadius: 8,
  //   backgroundColor: 'whitesmoke',
  //   shadowOffset: {
  //     width: 1,
  //     height: 1,
  //   },
  //   shadowColor: 'yellow',
  // },
  // flatDisplayStyle: {
  //   flexDirection: 'row',
  //   padding: 5,
  // },

  // cardElevated: {
  //   backgroundColor: 'slategray',
  //   marginHorizontal: 20,
  //   width: 350,
  //   height: 350,
  // },
  // cardImage: {
  //   height: 80,
  //   borderRadius: 8,
  //   marginHorizontal: 10,
  // },
  // cardBody: {},
  // cardFooter: {
  //   color: 'yellowgreen',
  //   fontSize: 10,
  //   margin: 5,
  // },
});
