import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Box, Text } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import AdminNavigator from './AdminNavigator';
import UserNavigator from './UserNavigator';

const Tab = createBottomTabNavigator()

const Main = () => {
  return (
    <Tab.Navigator 
    initialRouteName='Home' 
    screenOptions={{
        KeyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63',
    }}
    >
     <Tab.Screen 
     name="Home" 
     component={HomeNavigator}
     options={{
         tabBarIcon:({color}) => (
            <Icon 
             name="home"
             style={{position:'relative'}}
             color={color}
             size={30} 
            />
         ),
         headerShown:false
     }
    }
     />
     <Tab.Screen 
     name="Cart"
     component={CartNavigator}
     options={{
         tabBarIcon:({color})=>(
          <Icon
              name="shopping-cart"
            //   style={{ position: 'relative' }}
              color={color}
              size={30}
          />
         ),
         headerShown: false
     }}
     />
     <Tab.Screen 
              name="Admin"
              component={AdminNavigator}
              options={{
                  tabBarIcon: ({ color }) => (
                      <Icon
                          name="cog"
                        //   style={{ position: 'relative' }}
                          color={color}
                          size={30}
                      />
                  ),
                  headerShown: false
              }}
     />
          <Tab.Screen
              name="User"
              component={UserNavigator}
              options={{
                  tabBarIcon: ({ color }) => (
                      <Icon
                          name="user"
                          //   style={{ position: 'relative' }}
                          color={color}
                          size={30}
                      />
                  ),
                  headerShown: false
              }}
          />
    </Tab.Navigator>
  );
};

export default Main;

const styles = StyleSheet.create({});
