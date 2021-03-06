import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Header } from '../sections/Header';
import { Hero } from '../sections/Hero';
import { Menu } from '../sections/Menu';
import { StackNavigator } from 'react-navigation';

export class Home extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <Header navigate={navigate} message='Login' />
                <Hero />
                <Menu navigate={navigate} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5'
    }
});