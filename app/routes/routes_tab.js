import React from 'react';
import RoutesTabRender from "./routes_tab_render";
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import TelaInicial from '../home/tela_inicial';


const FirstStack = createStackNavigator({
  TelaInicial
});

const SecondStack = createStackNavigator({
  TelaInicial
});

const MainScreenNavigator = createBottomTabNavigator(
  {
    firstStack:
    {
      screen: FirstStack
    },
    SecondStack: {
      screen: SecondStack 
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: (props) => {
      const { navigation } = props;
      return (
        <RoutesTabRender {...this.state} props={navigation} />
      );
    }
  }
); 

export default createAppContainer(MainScreenNavigator);