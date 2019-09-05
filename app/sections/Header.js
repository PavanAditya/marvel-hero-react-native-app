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
                <Image
                    style={styles.logoStyle}
                    source={require('./images/full-learn.png')}
                />
                <Image
                    style={styles.logoStyle && styles.logoBrain}
                    source={require('./images/brain-bulb.png')}
                />
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
        fontSize: 20
    },
    headStyle: {
        paddingTop: 20,
        paddingRight: 10,
        backgroundColor: '#35605a',
        flex: 1,
        flexDirection: 'row'
    },
    logoStyle: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    logoBrain: {
        width: 80,
        height: 67
    }
});