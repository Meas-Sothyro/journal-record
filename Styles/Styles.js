import { StyleSheet } from "react-native";
import Colors from '../constants/Colors';
const Styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  rowView: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  separator: {
      height: 0.3,
      width: '100%',
      backgroundColor: Colors.gray,
      opacity: 0.8,
  },
  boldText: {
      fontWeight: 'bold',
  },
  contentContainerStyle: {
      paddingBottom: 200,
  },
  contentContainerStyle2: {
      paddingBottom: 100,
  },
  input: {
      borderWidth: 1,
      borderColor: '#ddd',
      padding: 10,
      marginBottom: 10,
      borderRadius: 6,
    },
    backIcon:{
      color:Colors.black
    },
    slider: {
      marginBottom: 20,
    },
  
    scrollViewContainer: {
      paddingBottom: 100, 
      paddingVertical: 30, 
      paddingHorizontal: 20,
    },
    addButton: {
      position: 'absolute',
      bottom: 90, 
      right: 20,
      width: 60, // Square shape
      height: 60, // Square shape
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 30, 
      backgroundColor: Colors.green2
    },
    addButtonText: {
      fontSize: 24,
      color: '#ffffff',
    },
    entryContainer: {
      backgroundColor: '#60c5a8', // Light grey background
      borderBottomWidth: 1,
      borderRadius: 10,
      borderBottomColor: '#ddd', // Light divider line
      padding: 30,
      marginBottom: 10,
    },
    titleText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white', // Darker text color for better readability
    },
    detailContainer: {
      backgroundColor: '#fff', // White background for contrast
      padding: 10,
      marginTop: 5,
      borderRadius: 10
    },
    detailText: {
      fontSize: 16,
      color: '#666', // Slightly lighter text color
      marginBottom: 5,
    },
    checkboxContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
    },
    checkboxLabel: {
      marginLeft: 8,
      color:Colors.green
    },
})
export default Styles;