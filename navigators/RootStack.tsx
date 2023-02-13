import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import { colors } from "../theme/colors";
import Greeting from "../components/Header/Greeting";
import Profile from "../components/Header/Profile";

import avatar from '../assets/avatar/avatar.png'

export type RootStackProps = {
  Welcome: undefined ;
  Home: undefined
}

const Stack = createStackNavigator<RootStackProps>()

const RootStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator    
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.grayLight,
            borderBottomWidth: 0,
            shadowColor: 'transparent',
            shadowOpacity: 0,
            elevation: 0,
            height: 120,
          },
          headerTintColor: colors.darkBlue,
          headerLeftContainerStyle: {
            paddingHorizontal: 10
          },
          headerRightContainerStyle: {
            paddingHorizontal: 25
          },
          headerRight: () => (
            <Profile 
              img={avatar}
              imgContainerStyle={{
                backgroundColor: colors.lightBlue
              }}
            />
          )
        }}
        initialRouteName="Home"
      >
        <Stack.Screen 
          name='Welcome'
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting 
                mainText="Hey JC!"
                secondText="Welcome again"
                {...props}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootStack