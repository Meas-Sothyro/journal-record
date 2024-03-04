import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/Styles';
import CheckBox from 'expo-checkbox';

// Checkbox to return the output to the submit button
const SocialPostCheckbox = ({ label, isChecked, onToggle }) => (
  <View style={styles.checkboxContainer}>
    <CheckBox value={isChecked} onValueChange={onToggle} />
    <Text style={styles.checkboxLabel}>{label}</Text>
  </View>
);

export default SocialPostCheckbox;
