import React from 'react';
import { StyleSheet, Text, View, Image, AsyncStorage, Alert } from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = () => {
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User Logged Out');
            })
        }
        else {
            this.props.navigate('LoginRT');
        }
    }

    componentDidMount() {
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if (result === 'none') {
                console.log('NONE');
            }
            else if (result === null) {
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                });
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                });
            }
        });
    }

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message;
        return (
            <View style={styles.headStyle}>
                <View style={styles.logo}>
                    <Image
                        style={styles.logoStyle}
                        source={require('./images/marvel-logo-black.png')}
                    />
                </View>
                <Text
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    headText: {
        paddingTop: 20,
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 15
    },
    headStyle: {
        paddingTop: 20,
        paddingRight: 10,
        backgroundColor: '#660000',
        flex: 1,
        flexDirection: 'row'
    },
    logo: {
        paddingRight: '5%',
        paddingBottom: '10%',
        paddingTop: 0,
    },
    logoStyle: {
        flex: 1,
        width: 275
    },
    logoBrain: {
        width: 80,
        height: 67
    }
});