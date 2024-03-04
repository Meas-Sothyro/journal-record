import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {sizes, spacing} from '../constants/measurement';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SharedElement} from 'react-navigation-shared-element';
import TripDetailsCard from '../components/TripDetailsCard';
import * as Animatable from 'react-native-animatable';
import Colors from '../constants/Colors';

const TripDetailsScreen = ({navigation, route}) => {
  const insets = useSafeAreaInsets();
  const {trip} = route.params;

  return (
    <View style={styles.container}>
      {/* pop up button appear in the image screen*/}
      <Animatable.View
        style={[styles.backButton, {marginTop: insets.top}]}
        animation="fadeIn"
        delay={500}
        duration={400}
        easing="ease-in-out">
        <Icon name="keyboard-double-arrow-left" size={20} onPress={navigation.goBack} color={Colors.white}/>
      </Animatable.View>

        {/* Fill the Screen with the image inside the imagebox */}
        <View style={[StyleSheet.absoluteFillObject, styles.imageBox]}>
          <Image
            source={trip.image}
            style={[StyleSheet.absoluteFillObject, styles.image]}
          />
        </View>
      <TripDetailsCard trip={trip} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBox: {
    borderRadius: sizes.radius,
    overflow: 'hidden',
  },
  image: {
    width: sizes.width,
    height: sizes.height,
    resizeMode: 'cover',
  },
  backButton: {
    position: 'absolute',
    left: spacing.l,
    zIndex: 1,
    paddingTop: spacing.l
    
  },
});

export default TripDetailsScreen;