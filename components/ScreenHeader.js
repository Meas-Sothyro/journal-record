import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {sizes, spacing} from '../constants/measurement';
import { useTheme } from '../Styles/ThemeContext';

// Screen page header component
const ScreenHeader = ({mainTitle, secondTitle}) => {
  const { isDarkTheme } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={[styles.mainTitle, { color: isDarkTheme ? 'white' : 'black' }]}>{mainTitle}</Text>
      <Text style={[styles.secondTitle, { color: isDarkTheme ? 'white' : 'black' }]}>{secondTitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:spacing.l,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.l,
  },
  mainTitle: {
    fontSize: sizes.title,
    fontWeight: 'bold',
  },
  secondTitle: {
    fontSize: sizes.title,
  },
});

export default ScreenHeader;