import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons';
import Colors from '../constants/Colors';
import * as Animatable from 'react-native-animatable';
import HomeScreen from '../screens/HomeScreen';
import UserActivities from '../screens/UserActivities'
import { Keyboard, Platform } from 'react-native';
import ImageUpload from '../screens/SearchScreen';
import ProfilePictures from '../screens/ProfilePictures';
import SearchScreen from '../screens/SearchScreen';

// navigation route to each page
const TabArr = [
  { route: 'Home', label: 'Home', type: Icons.Feather, icon: 'home', component: HomeScreen, color: Colors.primary, alphaClr: Colors.primaryAlpha },
  { route: 'Search', label: 'Add Post', type: Icons.Feather, icon: 'plus-square', component: UserActivities, color: Colors.green, alphaClr: Colors.greenAlpha },
  { route: 'Add', label: 'Search', type: Icons.Feather, icon: 'search', component: SearchScreen, color: Colors.red, alphaClr: Colors.redAlpha },
  { route: 'Account', label: 'Account', type: Icons.FontAwesome, icon: 'user-circle-o', component: ProfilePictures, color: Colors.purple, alphaClr: Colors.purpleAlpha },
];
// create tab bottom tab
const Tab = createBottomTabNavigator();

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const textViewRef = useRef(null);

// effect for the animation of the navigation bar
  useEffect(() => {
    if (focused) {
      viewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
      textViewRef.current.animate({ 0: { scale: 0 }, 1: { scale: 1 } });
    } else {
      viewRef.current.animate({ 0: { scale: 1, }, 1: { scale: 0, } });
      textViewRef.current.animate({ 0: { scale: 1 }, 1: { scale: 0 } });
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      // gap between each button when the button is focused
      style={[styles.container, { flex: focused ? 1 : 0.65 }]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: item.color, borderRadius: 9 }]} />
        <View style={[styles.btn, { backgroundColor: focused ? null : item.alphaClr }]}>
          <Icon type={item.type} name={item.icon} color={focused ? Colors.white : Colors.primary} />
          <Animatable.View
            ref={textViewRef}>
            {focused && <Text style={{
              color: Colors.white, paddingHorizontal: 12
            }}>{item.label}</Text>}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default function AnimTab3() {
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  
// avoid the navigation bar moving up to the text input
  useEffect(() => {
    const keyboardShowListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidShow' : 'keyboardWillShow',
      () => setKeyboardVisible(true),
    );
    const keyboardHideListener = Keyboard.addListener(
      Platform.OS === 'android' ? 'keyboardDidHide' : 'keyboardWillHide',
      () => setKeyboardVisible(false),
    );

    return () => {
      keyboardShowListener.remove();
      keyboardHideListener.remove();
    };
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: keyboardVisible ? 'none' : 'flex', // Hide tab bar when keyboard is visible
            height: 60,
            position: 'absolute',
            margin: 16,
            borderRadius: 16,
          },
        }}
      >
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.route} component={item.component}
              options={{
                tabBarButton: (props) => <TabButton {...props} item={item} />
              }}
            />
          )
        })}
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  }
})