import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/Styles'

const JournalEntry = ({ entry, onPress, isExpanded }) => (
  <View style={styles.entryContainer}>
    {/* The button in each of the Post page*/}
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.titleText}>{entry.title}</Text>
    </TouchableOpacity>
    
    {/* When each of the button is clicked, it'll show the the detail*/}
    {isExpanded && (
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>Date: {entry.date}</Text>
        <Text style={styles.detailText}>Description: {entry.description}</Text>
        <Text style={styles.detailText}>Happiness: {entry.happiness}</Text>
        <Text style={styles.detailText}>Posted on:</Text>
        {entry.socialPosts.facebook && <Text style={styles.detailText}>- Facebook</Text>}
        {entry.socialPosts.instagram && <Text style={styles.detailText}>- Instagram</Text>}
        {entry.socialPosts.youtube && <Text style={styles.detailText}>- Youtube</Text>}
      </View>
    )}

  </View>
);

export default JournalEntry;
