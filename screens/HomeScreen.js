import React from 'react';
import {View, StyleSheet, ScrollView, Platform, StatusBar} from 'react-native';
import colors from '../constants/Colors';
import ScreenHeader from '../components/ScreenHeader';
import TopPlacesCarousel from '../components/TopPlacesCarousel';
import {PLACES, TOP_PLACES} from '../data';
import SectionHeader from '../components/SectionHeader';
import TripsList from '../components/TripsList';
import { useTheme } from '../Styles/ThemeContext';

const HomeScreen = () => {
  const { isDarkTheme } = useTheme();
  return (
    <View style={[styles.container, { paddingBottom: StatusBar.currentHeight ? StatusBar.currentHeight + 70 : 70, backgroundColor: isDarkTheme ? 'black' : 'white' }]}>
      <ScreenHeader mainTitle="Find Your" secondTitle="Favorite Moment" />

      <ScrollView showsVerticalScrollIndicator={false}>

        <TopPlacesCarousel list={TOP_PLACES} />

        <SectionHeader title="My Journey Photos" />
        <TripsList list={PLACES} />
        
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
});

export default HomeScreen;
