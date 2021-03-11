import { createStackNavigator } from 'react-navigation-stack';
import Header from '../shared/header';
import React from 'react';
import About from '../screens/about';

const screens = {
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='About' />,
            }
        }
    },
}

const AboutStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#333',
        headerStyle: {
            height: 80,
        }
    }
});

export default AboutStack;