import React, {useState} from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native'
import { uuid } from 'uuidv4';
import { Commands } from 'react-native/Libraries/Components/RefreshControl/AndroidSwipeRefreshLayoutNativeComponent';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from './navigation/intro/welcome/Welcome';
import DietReq from './navigation/intro/dietReq/DietReq';
import MainCamera from './navigation/main/mainCamera/MainCamera';
import MyIngredients from './navigation/main/myIngredients/MyIngredients';

const Stack = createNativeStackNavigator();

const App = () => {

  const isIntro = true;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTitle: '',
        headerStyle: {
          backgroundColor: '#32910F',
        },
        headerShadowVisible: false,
        shadowColor: 'transparent',
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>

        {{isIntro} ? <Stack.Screen name="Welcome" component={Welcome} />
        : <Stack.Screen name="MainCamera" component={MainCamera} />}

        <Stack.Screen name="DietReq" component={DietReq} />

        <Stack.Screen name="MyIngredients" component={MyIngredients} isIntro={isIntro} />

        <Stack.Screen options={{
          headerShown: false,
        }} name="MainCamera" component={MainCamera} />

      </Stack.Navigator>
    </NavigationContainer>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
}); 

export default App;




// Useful Commands
// - cd ios, pod install - check, install update cocoapod packages
// - react-devtools - open react native dev tools ui
// - npm run ios - open xcode ios simulator
// - npm list - list current packages and versions
// - npm view [package] version(s) - check package version/s

// Fixing uuid issue
// - npm install uuidv4@6.0.0 roll back the uuidv4 version slightly

// Calibrating pod install to Mac M1 Chip
// - cd ios
// - sudo arch -x86_64 gem install ffi
// - arch -x86_64 pod install

// Links
// Splash Screen: https://blog.logrocket.com/building-a-splash-screen-in-react-native/





// * Tutorial Page

// import Header from './components/Header';
// import ListItem from './components/ListItem';
// import AddItem from './components/AddItem';

// const [items, setItems] = useState([
//   {id: uuid(), text: 'Stacy' },
//   {id: uuid(), text: 'Janice' },
//   {id: uuid(), text: 'Lottie' },
//   {id: uuid(), text: 'Lizzie' },
// ]);

// const deleteItem = (id) => {
//   setItems(prevItems => {
//     return prevItems.filter(item => item.id != id);
//   }); 
// }

// const addItem = (text) => {
//   if(!text) {
//     Alert.alert('Error', 'Please enter an item', { text: 'Ok'});
//   } else {
//     setItems(prevItems => {
//       return [{id: uuid(), text}, ...prevItems];
//     }); 
//   }    
// }
// <View style={styles.container}>
//   <Header/>
//   <AddItem addItem={addItem} />
//   <FlatList data={items} renderItem={({item}) => 
//     <ListItem item={item} deleteItem={deleteItem}/>}
//   />
// </View>
    

// * Starter Page

// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             damn screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
