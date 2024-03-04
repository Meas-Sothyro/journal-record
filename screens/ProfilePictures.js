import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Styles from '../Styles/Styles';
import colors from '../constants/Colors';
import { useTheme } from '../Styles/ThemeContext';
import { sizes, spacing } from '../constants/measurement';

export default function ProfilePictures({ route, navigation }) {
  const viewRef = React.useRef(null);
  const [bgColor, setBgColor] = useState();
  const { isDarkTheme } = useTheme();

  // create list for user profile easy for scaling
  const userProfile = {
    name: 'Meas Sothyro',
    role: 'Software Developer',
    location: 'Phnom Penh, Cambodia',
    profileImage: require('../assets/images/sothyro.jpg'), // Make sure you have the image in your assets and the path is correct
    backgroundImage: require('../assets/images/Tokyo.jpg'), // Make sure you have the image in your assets and the path is correct
    stats: {
      followers: '122',
      following: '67',
      likes: '77K',
    },
  };

  // dark and white mode conversion effect
  useEffect(() => {
    if (isDarkTheme) {
      setBgColor(colors.dark);
    } else {
      switch (route.name) {
        case 'Account': setBgColor(colors.purple); break;
      }
    }
  }, [isDarkTheme, route.name]);
  

  return (
    <SafeAreaView style={Styles.container}>
      <Animatable.View
        ref={viewRef}
        easing={'ease-in-out'}
        style={[Styles.container, { backgroundColor: bgColor }]}>
        {/* Background Image*/}
        <Image
          source={userProfile.backgroundImage}
          style={styles.backgroundImage}
        />

        <View style={styles.profileContainer}>
          {/* Circle shape, user image */}
          <Image
            source={userProfile.profileImage}
            style={styles.profileImage}
          />
          {/*All of the necessary items in the user list*/}
          <Text style={styles.name}>{userProfile.name}</Text>
          <Text style={styles.role}>{userProfile.role}</Text>
          <Text style={styles.location}>{userProfile.location}</Text>

          {/*Users below texts in the user list*/}
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>{userProfile.stats.followers} Followers</Text>
            <Text style={styles.statsText}>{userProfile.stats.following} Following</Text>
            <Text style={styles.statsText}>{userProfile.stats.likes} Likes</Text>
          </View>
        </View>
      </Animatable.View>
    </SafeAreaView>
  );  
}

const styles = StyleSheet.create({
    backgroundImage: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: sizes.thirdHeight, 
    resizeMode: 'cover',
  },
  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    width: sizes.thirdWidth, 
    height: sizes.thirdWidth, 
    borderRadius: sizes.thirdWidth/2, 
    borderWidth: 4,
    borderColor: colors.white,
    position: 'absolute', 
    top: sizes.thirdHeight - sizes.thirdWidth/2, 
    zIndex: 1, 
  },
  name: {
    fontSize: sizes.width * 0.06, 
    fontWeight: 'bold',
    color: colors.white,
    position: 'absolute',
    top: sizes.thirdHeight + sizes.thirdWidth/2 + 20, 
  },
  role: {
    fontSize: sizes.width * 0.05, 
    color: colors.white,
    position: 'absolute',
    top: sizes.thirdHeight + sizes.thirdWidth/2 + 60,
  },
  location: {
    fontSize: sizes.fortyfiveWidth, 
    color: colors.white,
    position: 'absolute',
    top: sizes.thirdHeight + sizes.thirdWidth/2 + 90, 
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    top: sizes.thirdHeight + sizes.thirdWidth/2 + 120, 
    width: '100%',
  },
  statsText: {
    fontSize: sizes.fortyfiveWidth,
    fontWeight: 'bold',
    color: colors.white,
  },
});
