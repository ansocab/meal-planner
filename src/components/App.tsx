import React from 'react';
import {NativeBaseProvider, Center} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AddRecipe from '../screens/AddRecipe';
import RecipeBook from '../screens/RecipeBook';
import customTheme from '../styles/customTheme';

const Tab = createBottomTabNavigator();

const App = () => (
  <NativeBaseProvider theme={customTheme}>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="AddRecipe"
          component={AddRecipe}
          options={{
            title: 'New Recipe',
            tabBarIcon: ({color, size}) => (
              <Icon
                size={size}
                color={color}
                name="file-document-edit-outline"
              />
            ),
          }}
        />
        <Tab.Screen
          name="RecipeBook"
          component={RecipeBook}
          options={{
            title: 'Recipe Book',
            tabBarIcon: ({color, size}) => (
              <Icon size={size} color={color} name="notebook-outline" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </NativeBaseProvider>
);

export default App;
