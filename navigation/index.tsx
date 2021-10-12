import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import MenuScreen from '../screens/MenuScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Dashboard from '../screens/Dashboard';
import CalendarScreen from '../screens/Calendar';
import Chat from '../screens/Chat';
import Notification from '../screens/Notification';
import SubjectView from '../screens/SubjectView';
import ChatView from '../screens/ChatView';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="SubjectView" component={SubjectView} options={{headerTitle : 'Maths - G/08'}} />
        <Stack.Screen name="ChatView" component={ChatView} options={{headerTitle : 'Kannathilaka'}} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={Dashboard}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Dashboard',
          tabBarIcon: ({ color }) => <TabBarIcon name="tachometer" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Menu')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="bars"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Calendar"
        component={CalendarScreen}
        options={({ navigation }: RootTabScreenProps<'Calendar'>) => ({
          title: 'Calendar',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Menu')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="bars"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Chat"
        component={Chat}
        options={({ navigation }: RootTabScreenProps<'Chat'>) => ({
          title: 'Chat',
          tabBarIcon: ({ color }) => <TabBarIcon name="comments" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Menu')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="bars"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Noti"
        component={Notification}
        options={({ navigation }: RootTabScreenProps<'Noti'>) => ({
          title: 'Notification',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Menu')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="bars"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
