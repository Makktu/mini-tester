import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import MyText from './MyText';

export default function BasicCard() {
  // *
  const color1 = 'red';
  const color2 = 'green';
  const color3 = 'yellow';
  // *
  return (
    <>
      <View style={{ marginTop: 40 }}>
        <MyText content='Base Materials' size={28} thisColor='skyblue' />
        <ScrollView horizontal={true}>
          <View style={styles.flatDisplayStyle}>
            <View style={[styles.cardStyle]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1676802540678-2dceb1820113?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Timber</Text>
            </View>
            <View style={[styles.cardStyle]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1512331327491-d03cb97d92b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Tiles</Text>
            </View>
            <View style={[styles.cardStyle]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1613945831677-383c19ad7721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=675&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Screws</Text>
            </View>
            <View style={[styles.cardStyle]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1529255848089-c4e456d166e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Nails</Text>
            </View>
            <View style={[styles.cardStyle]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1661746785480-439c1a4b8254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Slate</Text>
            </View>
            <View style={[styles.cardStyle]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1529255848089-c4e456d166e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Nails</Text>
            </View>
            <View style={[styles.cardStyle]}>
              <Image
                source={{
                  uri: 'https://images.unsplash.com/photo-1529255848089-c4e456d166e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
                }}
                style={styles.cardImage}
              />
              <Text style={styles.cardText}>Nails</Text>
            </View>

            <Text style={[styles.cardStyle, { backgroundColor: color3 }]}>
              Place holder
            </Text>
            <Text style={[styles.cardStyle, { backgroundColor: color3 }]}>
              Place holder
            </Text>
            <Text style={[styles.cardStyle, { backgroundColor: color3 }]}>
              Place holder
            </Text>
            <Text style={[styles.cardStyle, { backgroundColor: color3 }]}>
              Place holder
            </Text>
          </View>
        </ScrollView>
      </View>
      {/* </ScrollView> */}
    </>
  );
}

const styles = StyleSheet.create({
  cardText: {
    color: 'yellow',
  },
  cardImage: {
    height: 100,
    width: 100,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    color: 'white',
  },
  cardStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    height: 100,
    width: 100,
    margin: 5,
    borderRadius: 8,
  },
  flatDisplayStyle: {
    flexDirection: 'row',
    padding: 5,
  },
});
