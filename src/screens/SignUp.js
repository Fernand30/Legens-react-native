import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';
import HttpRequest from '../components/HttpRequest';

class SignUp extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            nameFocus: false,
            emailFocus: false,
            passwordFocus: false,
            isLoading: false
        };

        this.root = this.props.component.root;
    }

    componentDidMount() {

    }

    gotoForgotPassword() {
        this.root.navigate('ForgotPassword');
    }

    gotoSignIn() {
        this.root.gotoLogin();
    }

    gotoPrivacyPolicy() {
        this.root.navigate('PrivacyPolicy');
    }

    gotoTermOfService() {
        this.root.navigate('TermOfService');
    }

    gotoMenu() {
        this.root.gotoMenu();
    }

    signUp() {
        if (this.state.isLoading == false) {
            this.setState({ isLoading: true });
            HttpRequest.register(this.state.name, this.state.email, this.state.password).then((response) => {
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
                                this.root.navigate('Confirmation', { email: this.state.email });
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
                    <Text style={styles.headerTextStyle}>SIGN UP</Text>
                    <View style={styles.headerLineStyle} />
                </View>
                <View style={{ height: 50 }} />
                <View style={styles.formInputStyle}>
                    <View style={[styles.inputWrapperStyle, this.state.nameFocus ? { borderBottomColor: Config.primaryColor } : {}]}>
                        <Ionicons name="ios-person" size={30} color="#000" />
                        <TextInput style={styles.inputStyle}
                            placeholder='Full Name'
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            onFocus={() => { this.setState({ nameFocus: true }) }}
                            onBlur={() => { this.setState({ nameFocus: false }) }}
                            onChangeText={(name) => this.setState({ name })}
                            value={this.state.name} />
                    </View>
                    <View style={[styles.inputWrapperStyle, this.state.emailFocus ? { borderBottomColor: Config.primaryColor } : {}]}>
                        <Ionicons name="ios-mail" size={30} color="#000" />
                        <TextInput style={styles.inputStyle}
                            placeholder='Email'
                            autoCapitalize='none'
                            autoCorrect={false}
                            underlineColorAndroid='transparent'
                            onFocus={() => { this.setState({ emailFocus: true }) }}
                            onBlur={() => { this.setState({ emailFocus: false }) }}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email} />
                    </View>
                    <View style={[styles.inputWrapperStyle, this.state.passwordFocus ? { borderBottomColor: Config.primaryColor } : {}]}>
                        <Ionicons name="ios-lock" size={30} color="#000" />
                        <TextInput style={styles.inputStyle}
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            underlineColorAndroid='transparent'
                            onFocus={() => { this.setState({ passwordFocus: true }) }}
                            onBlur={() => { this.setState({ passwordFocus: false }) }}
                            onChangeText={(password) => this.setState({ password })}
                            value={this.state.password} />
                    </View>
                    <View style={{ height: 20 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity style={styles.signInButtonStyle}
                            onPress={() => { this.signUp() }}>
                            {this.state.isLoading == true && <ActivityIndicator color='#fff' />}
                            {this.state.isLoading == false && <Text style={styles.signInTextStyle} >SIGN UP</Text>}
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 10 }} />

                    <View style={{ justifyContent: 'center' }}>
                        <Text>OR</Text>
                    </View>

                    <View style={{ height: 10 }} />

                    <View style={styles.socialButtonContainerStyle}>
                        <TouchableOpacity style={styles.socialButtonStyle}>
                            <Ionicons name="logo-facebook" size={30} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButtonStyle}>
                            <Ionicons name="logo-twitter" size={30} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.socialButtonStyle}>
                            <Ionicons name="logo-googleplus" size={30} color="#fff" />
                        </TouchableOpacity>
                    </View>

                    <View style={{ height: 60 }} />

                    <View style={styles.signUpWrapperStyle}>
                        <Text>Already have an Account ? </Text>
                        <TouchableOpacity onPress={() => { this.gotoSignIn(); }}>
                            <Text style={styles.signUpButtonStyle}> SIGN IN</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 30 }} />
                <View style={styles.footerStyle}>
                    <Text style={{ textAlign: 'center', fontSize: 12 }}>
                        <Text>{`By Signing up you agree to the `}</Text>
                        <Text style={styles.footerButtonStyle}
                            onPress={() => { this.gotoPrivacyPolicy() }}
                        >Privacy Policy</Text>
                        <Text>{` and \n`}</Text>
                        <Text style={styles.footerButtonStyle}
                            onPress={() => { this.gotoTermOfService() }}
                        >Term &amp; Services</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1
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
    socialButtonContainerStyle: {
        flexDirection: 'row'
    },
    socialButtonStyle: {
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Config.textColor,
        margin: 5
    },
    forgotPasswordWrapperStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    forgotPasswordButtonStyle: {

    },
    forgotPasswordTextStyle: {
        fontSize: 15,
        color: Config.textColor
    },
    signUpWrapperStyle: {
        borderBottomWidth: 1,
        borderBottomColor: Config.textColor,
        padding: 10,
        flexDirection: 'row'
    },
    signUpButtonStyle: {
        fontWeight: 'bold',
        color: Config.primaryColor
    },
    footerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    footerButtonStyle: {
        fontWeight: 'bold',
        color: Config.textColor,
        textAlign: 'center'
    }
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
)(SignUp);