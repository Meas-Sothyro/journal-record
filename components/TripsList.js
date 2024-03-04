import React from 'react';
import { Image, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { sizes, spacing } from '../constants/measurement';
import colors from '../constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { SharedElement } from 'react-navigation-shared-element';

const CARD_WIDTH = sizes.width / 2 - (spacing.l + spacing.l / 2);
const CARD_HEIGHT = 220;

const TripsList = ({ list }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {list.map((item, index) => {
        return (
          //navigate to the Trip Details Screen for each of the card clicked
          <TouchableOpacity
            style={styles.cardContainer}
            key={item.id}
            onPress={() => {
              navigation.navigate('TripDetails', { trip: item });
            }}>

            {/*Share element, title and location in the same list*/}
            <View style={[styles.card, styles.shadowStyle]}>
              <SharedElement id={`trip.${item.id}.image`}>
                <View style={styles.imageBox}>
                  <Image style={styles.image} source={item.image} />
                </View>
              </SharedElement>
              <View style={styles.footer}>
                <View style={styles.titleBox}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  shadowStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContainer: {
    marginLeft: spacing.l,
    marginBottom: spacing.l,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: colors.white,
    borderRadius: sizes.radius,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: sizes.radius,
    borderTopRightRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: sizes.body,
    fontWeight: 'bold',
    color: colors.dark,
  },
  location: {
    fontSize: sizes.body,
    color: colors.lightGray,
  },
});

export default TripsList;