import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, SafeAreaView, ScrollView } from 'react-native';
import Styles from '../Styles/Styles';
import Colors from '../constants/Colors';
import { useTheme } from '../Styles/ThemeContext';
import TripsList from '../components/TripsList';
import { PLACES } from '../data/index';
import { sizes, spacing } from '../constants/measurement';

export default function SearchScreen({ route }) {
  const [bgColor, setBgColor] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTrips, setFilteredTrips] = useState(PLACES);
  const { isDarkTheme } = useTheme();

  // dark theme conversion between white and dark
  useEffect(() => {
    if (isDarkTheme) {
      setBgColor(Colors.dark);
    } else {
      switch (route.name) {
        case 'Add': setBgColor(Colors.white); break;
      }
    }
  }, [isDarkTheme, route.name]);

  //filter function on the place title 
  useEffect(() => {
    const results = PLACES.filter(place =>
      place.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTrips(results);
  }, [searchQuery]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[Styles.container, { paddingBottom: 60 }]}>

          {/* Search bar input */}
          <TextInput
            style={styles.searchInput}
            placeholder="  Look for pictures..."
            placeholderTextColor={Colors.white}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* result filter below */}
          <ScrollView style={{ flex: 1 }}>
            <TripsList list={filteredTrips} />
          </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchInput: {
    height: sizes.h2 *2,
    marginTop: spacing.m,
    marginBottom: spacing.m,
    marginLeft: spacing.l, 
    marginRight: spacing.l,
    padding: 10,
    borderRadius: 20,
    backgroundColor: Colors.red,
    color: Colors.white,
  },
});
