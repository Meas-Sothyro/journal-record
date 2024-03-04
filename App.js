import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { NavigationContainer, DarkTheme, DefaultTheme, } from '@react-navigation/native';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import AnimTab3 from './bottomTab/AnimTab3';
import { ThemeProvider, useTheme } from './Styles/ThemeContext';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TripDetailsScreen from './screens/TripDetailsScreen';
import JournalNavigator from './screens/UserActivities';

const logoImage = require('./assets/images/AUPP_Logo.png');
const Stack = createSharedElementStackNavigator();
const RootStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Tab3" 
        component={AnimTab3} 
        options={{headerShown: false}} 
      />
      <Stack.Screen
          name="TripDetails"
          component={TripDetailsScreen}
          options={{
            headerShown: false,
            cardStyleInterpolator: ({current: {progress}}) => ({
              cardStyle: {
                opacity: progress,
              },
            }),
          }}
        />
      <Stack.Screen 
        name="Daily Journal" 
        component={JournalNavigator} 
        options={{headerShown: false}} 
      />
    </Stack.Navigator>
  );
};

// combine the stack with the top bar
const AppContent = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  return (
    <NavigationContainer theme={isDarkTheme ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.headerBar, isDarkTheme ? { backgroundColor: '#010101' } : { backgroundColor: '#fbfbfb' }]}>

          {/* Logo and Text Container */}
          <View style={styles.logoTextContainer}>
            <Image source={logoImage} style={styles.logo} />
            <Text style={[styles.headerText, { color: isDarkTheme ? 'white' : 'black' }]}>Midterm Exam</Text>
          </View>
          
          {/* Icon with dynamic color */}
          <TouchableOpacity onPress={toggleTheme}>
            <Icon name="settings" size={24} color={isDarkTheme ? "white" : "black"} />
          </TouchableOpacity>

        </View>
        <RootStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};

// call the theme provider to convert between the dark and white mode
export default App = () => {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 35,
    padding:20,
    paddingBottom:10,
  },
  logoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50, 
    marginRight: 8, 
  },
  headerText: {
    fontSize: 20,
  },
});

