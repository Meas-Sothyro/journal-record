import React, { useState, useEffect } from 'react';
import { SafeAreaView, Button, Text, View, TextInput, ScrollView, TouchableOpacity, StyleSheet, Alert } from 'react-native';import { createStackNavigator } from '@react-navigation/stack';
import Slider from '@react-native-community/slider';
import Colors from '../constants/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import SocialPostCheckbox from '../components/SocialPostCheckbox';
import JournalEntry from '../components/JourneyEntry';
import Styles from '../Styles/Styles';

const Stack = createStackNavigator();


function UserActivities({ navigation, route }) {
  
  const [journalEntries, setJournalEntries] = useState([]);
  const [expandedId, setExpandedId] = useState(null);

  // effect after each of the entry is filled 
  useEffect(() => {
    if (route.params?.newEntry && route.params.newEntry.title) {
      setJournalEntries((currentEntries) => [...currentEntries, route.params.newEntry]);
    }
  }, [route.params?.newEntry]);

  // expanding the title function
  const toggleExpand = (index) => {
    setExpandedId(expandedId === index ? null : index);
  };

  // HomeScreen for the entry page
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView contentContainerStyle={Styles.scrollViewContainer}>
      <Text style={{paddingBottom: 15, textAlign: 'center', fontSize: 20, fontWeight: 'bold', color:Colors.green}}>Add your Post</Text>
      {journalEntries.map((entry, index) => (
        <JournalEntry
          key={index}
          entry={entry}
          onPress={() => toggleExpand(index)}
          isExpanded={expandedId === index}
        />
      ))}
      </ScrollView>
      <TouchableOpacity
        style={Styles.addButton}
        onPress={() => navigation.navigate('AddEntry')}>
        <Text style={Styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
    
  );
}

function AddEntryScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [happiness, setHappiness] = useState(5); 
  const [socialPosts, setSocialPosts] = useState({ 
    instagram: false,
    facebook: false,
    youtube: false,
    linkedIn: false,
  });

  const handleSubmit = () => {
    if (!title || !date || !description) {
      // Alert the user that filling all fields is required
      Alert.alert("Filling is required", "Please make sure to fill all the fields before submitting.");
    } else {
      const newEntry = { title, date, description, happiness, socialPosts };
      navigation.navigate('Home', { newEntry: newEntry }); // Corrected to navigate back with the new entry
    }
  };

  return (
    <KeyboardAwareScrollView contentContainerStyle={{ padding: 20 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        
        <TextInput 
          placeholder="Activity Title" 
          value={title} 
          onChangeText={setTitle} 
          placeholderTextColor={Colors.green} // Set placeholder text color to red
          style={[Styles.input, { color: Colors.green }]} 
        />

        <TextInput 
          placeholder="Description" 
          multiline 
          value={description} 
          onChangeText={setDescription} 
          placeholderTextColor={Colors.green} // Set placeholder text color to red
          style={[Styles.input, { color: Colors.green }]}         />

        <TextInput 
          placeholder="Date (YYYY-MM-DD)" 
          value={date} 
          onChangeText={setDate} 
          keyboardType="numeric" 
          placeholderTextColor={Colors.green} // Set placeholder text color to red
          style={[Styles.input, { color: Colors.green }]}         />

        <Text style={{paddingBottom:15, paddingTop: 15, color:Colors.green, fontWeight: 'bold'}}>Social Posts:</Text>

        <SocialPostCheckbox
          label="Facebook Post"
          isChecked={socialPosts.facebook}
          onToggle={(newValue) => setSocialPosts({...socialPosts, facebook: newValue})}
        />
        <SocialPostCheckbox
          label="Instagram Story"
          isChecked={socialPosts.instagram}
          onToggle={(newValue) => setSocialPosts({...socialPosts, instagram: newValue})}
        />
        <SocialPostCheckbox
          label="Youtube Vlogging"
          isChecked={socialPosts.youtube}
          onToggle={(newValue) => setSocialPosts({...socialPosts, youtube: newValue})}
        />

        <Text style={{paddingBottom:15, paddingTop: 15,color:Colors.green,fontWeight:'bold'}}>Happiness: {happiness}</Text>

        <Slider 
          minimumValue={1} 
          maximumValue={10} 
          step={1} 
          value={happiness} 
          onValueChange={setHappiness} 
          style={Styles.slider}
        />

        <Button title="Submit" onPress={handleSubmit} color={Colors.green}/>

      </ScrollView>
      </KeyboardAwareScrollView>
  );
}

// combine two stacks because it operate on a single stack
const JournalNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={UserActivities} options={{headerShown: false}} />
    <Stack.Screen name="AddEntry" component={AddEntryScreen} options={{headerShown: false}}  />
  </Stack.Navigator>
);
export default JournalNavigator;
