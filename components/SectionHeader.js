import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {sizes, spacing} from '../constants/measurement';
import { useTheme } from '../Styles/ThemeContext';

// Text fields for the trip lists
const SectionHeader = ({title}) => {
  const { isDarkTheme }= useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: isDarkTheme ? 'white' : 'black' }]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: spacing.l,
    marginRight: spacing.m,
    marginTop: spacing.l,
    marginBottom: 10,
  },
  title: {
    fontSize: sizes.h3,
    fontWeight: 'bold',
  },
});

export default SectionHeader;