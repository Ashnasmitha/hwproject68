import * as React from 'react'
import {Text,View,StyleSheet} from 'react-native'
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tab';

import Fb from './screens/fb';
import Insta from './screens/in';

export default class App extends React.Component{
    render(){
        return(
          <View>
            <AppContainer/>
          </View>
        )
    }
}

const tabNavigator = createBottomTabNavigator({
    Fb:{screen:Fb},
    Insta:{screen:Insta}
})

const AppContainer = createAppContainer(tabNavigator);

