import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';
import CreatePostScreen from './src/screens/CreatePostScreen';
import NotificationsScreen from './src/screens/NotificationsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

// Components
import BottomTabBar from './src/components/BottomTabBar';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StatusBar style="auto" />
          <Tab.Navigator
            tabBar={props => <BottomTabBar {...props} />}
            screenOptions={{
              headerShown: false,
            }}
          >
            <Tab.Screen
              name="Home"
              component={HomeScreen}
              options={{ tabBarLabel: 'Home' }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{ tabBarLabel: 'Search' }}
            />
            <Tab.Screen
              name="Create"
              component={CreatePostScreen}
              options={{ tabBarLabel: 'Create' }}
            />
            <Tab.Screen
              name="Notifications"
              component={NotificationsScreen}
              options={{ tabBarLabel: 'Notifications' }}
            />
            <Tab.Screen
              name="Profile"
              component={ProfileScreen}
              options={{ tabBarLabel: 'Profile' }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
