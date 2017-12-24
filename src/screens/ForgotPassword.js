import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';
import HttpRequest from '../components/HttpRequest';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            emailFocus: false,
            isLoading: false
        };

        this.root = this.props.component.root;
    }

    gotoForgotPassword() {
        this.props.navigation.navigate('ForgotPassword');
    }

    gotoSignUp() {
        this.props.navigation.navigate('SignUp');
    }

    gotoPrivacyPolicy() {
        this.props.navigation.navigate('PrivacyPolicy');
    }

    gotoTermOfService() {
        this.props.navigation.navigate('TermOfService');
    }

    forgotPassword(){
        if (this.state.isLoading == false) {
            this.setState({ isLoading: true });
            HttpRequest.forgotPassword(this.state.email).then((response) => {
                console.log('Result', response);
                this.setState({ isLoading: false });
                let result = response.data;
                if (result.status == 'OK') {
                    //this.root.setToken(result.token);
                    //this.root.changePage('menu');
                    Alert.alert(
                        'Information',
                        result.message,
                        [{
                            text: 'Ok', onPress: () => {
                                this.props.navigation.goBack();
                            }
                        }]
                    );
                }
                this.setState({ isLoading: false });
            }).catch((error) => {
                console.log(error.response);
                if (error.response.data != null) {
                    let result = error.response.data;
                    Alert.alert(
                        'Warning',
                        result.message,
                        [
                            { text: 'Ok', onPress: () => { }, style: 'cancel' },
                        ]
                    );
                } else {
                    Alert.alert(
                        'Warning',
                        error,
                        [
                            { text: 'Ok', onPress: () => { }, style: 'cancel' },
                        ]
                    );
                }
                this.setState({ isLoading: false });
            });
        }
    }

    render() {

        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerStyle}>
                    <View style={styles.headerLineStyle} />
                    <Text style={styles.headerTextStyle}>FORGET</Text>
                    <View style={styles.headerLineStyle} />
                </View>
                <View style={styles.headerStyle}>
                    <Text style={styles.headerTextStyle}>PASSWORD</Text>
                </View>
                <View style={{ height: 30 }} />
                <View style={styles.formInputStyle}>
                    <View style={{ flexWrap: 'wrap' }}>
                        <Text style={{fontSize: 16, color: Config.textColor, textAlign: 'center'}}>
                            {`Please enter your Email address below. We’ll send you and email to confirm your password`}
                        </Text>
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={[styles.inputWrapperStyle, this.state.emailFocus ? { borderBottomColor: Config.primaryColor } : {}]}>
                        <Ionicons name="ios-mail" size={30} color="#000" />
                        <TextInput style={styles.inputStyle}
                            placeholder='Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            onFocus={() => { this.setState({ emailFocus: true }) }}
                            onBlur={() => { this.setState({ emailFocus: false }) }}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email} />
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.signInButtonStyle}
                            onPress={() => { this.forgotPassword() }}>
                            {this.state.isLoading == true && <ActivityIndicator color='#fff' />}
                            {this.state.isLoading == false && <Text style={styles.signInTextStyle} >SUBMIT</Text>}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
        paddingVertical: 70
    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerLineStyle: {
        width: 20,
        height: 2,
        marginHorizontal: 5,
        backgroundColor: Config.primaryColor
    },
    headerTextStyle: {
        color: Config.textColor,
        fontSize: 35,
        fontWeight: 'bold'
    },
    formInputStyle: {
        flexDirection: 'column',
        alignItems: 'center',
        width: 250
    },
    inputWrapperStyle: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: Config.textColor,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        marginVertical: 10
    },
    inputStyle: {
        flex: 1,
        height: 40,
        marginLeft: 10
    },
    signInButtonStyle: {
        backgroundColor: Config.primaryColor,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    signInTextStyle: {
        color: '#ffffff',
        fontSize: 15
    },
};

function mapStateToProps(state) {
    return {
        component: state.component,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setRoot: (root) => dispatch({
            type: 'set_root',
            root: root
        })
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ForgotPassword);