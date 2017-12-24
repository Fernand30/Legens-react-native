import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, Image, Modal, ActivityIndicator } from 'react-native';
import { NavigationActions } from 'react-navigation';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';
import HttpRequest from '../components/HttpRequest';

class Confirmation extends Component {
    static navigationOptions = {
        header: null,
    };

    constructor(props) {
        super(props);

        this.state = {
            keys: ['', '', '', '', '', ''],
            isShowSuccess: false,
            isShowWarning: false,
            isLoading: false,
            status: '',
        };

        console.log(this.props.navigation);

        this.root = this.props.component.root;
        this.email = this.props.navigation.state.params.email;
    }

    onChangeText(input, number) {
        numberInput = input.replace(/\D/g, '');

        let keys = this.state.keys;
        keys[number] = numberInput;
        this.setState({ keys });
        if (number < 5) {
            if (numberInput != '') {
                this.refs['Key_' + (number + 1)].focus();
            }
        } else {
            this.refs['Key_' + (number)].blur();
            this.verify();
        }
    }

    verify() {
        this.setState({ isLoading: true });
        let code = this.state.keys.join('');
        HttpRequest.verifyCode(code, this.email).then((response) => {
            this.root.setToken(response.data.token);
            this.setState({
                isLoading: false,
                isShowSuccess: true,
                status: 'ok'
            });
        }).catch((error) => {
            this.setState({
                isLoading: false,
                isShowWarning: true,
                status: 'error'
            });
        });
    }

    reset() {
        this.setState({
            keys: ['', '', '', '', '', ''],
            isShowSuccess: false,
            isShowWarning: false,
        });
    }

    back() {
        this.props.navigation.goBack();
    }

    backAndEnter() {
        this.back();
        this.root.changePage('menu');
    }

    render() {
        let status = null;
        if (this.state.isLoading) {
            status = <ActivityIndicator />;
        } else {
            if (this.state.status == 'ok') {
                status = <Text style={{ color: Config.primaryColor }}>Match</Text>;
            } else if (this.state.status == 'error') {
                status = <Text style={{ color: '#ff8411' }}>Not Match</Text>;
            }
        }

        return (
            <View style={styles.rootStyle}>
                <View style={{ flex: 1, alignItems: 'center', }}>
                    <View style={styles.headerStyle}>
                        <View style={styles.headerLineStyle} />
                        <Text style={styles.headerTextStyle}>Security Key</Text>
                        <View style={styles.headerLineStyle} />
                    </View>
                    <View style={{ height: 30 }} />

                    <Image source={require('../../images/security_key/key.png')}
                        style={{ height: 50, width: 50 }} resizeMode='contain' />
                    <View style={{ height: 20 }} />
                    <Text style={{ color: Config.textColor }}>Enter 6 Digit Key</Text>

                    <View style={styles.keysWrapper}>
                        <View style={styles.keyBoxStyle}>
                            <TextInput style={styles.inputKeyStyle}
                                returnKeyType="next"
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                autoFocus={true}
                                onFocus={() => { }}
                                onBlur={() => { }}
                                onChangeText={(input) => this.onChangeText(input, 0)}
                                value={this.state.keys[0]} />
                        </View>
                        <View style={styles.keyBoxStyle}>
                            <TextInput style={styles.inputKeyStyle}
                                ref='Key_1'
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                onFocus={() => { }}
                                onBlur={() => { }}
                                onChangeText={(input) => this.onChangeText(input, 1)}
                                value={this.state.keys[1]} />
                        </View>
                        <View style={styles.keyBoxStyle}>
                            <TextInput style={styles.inputKeyStyle}
                                ref='Key_2'
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                onFocus={() => { }}
                                onBlur={() => { }}
                                onChangeText={(input) => this.onChangeText(input, 2)}
                                value={this.state.keys[2]} />
                        </View>
                        <View style={{
                            width: 20, height: 3,
                            backgroundColor: Config.textColor,
                            marginHorizontal: 5
                        }} />
                        <View style={styles.keyBoxStyle}>
                            <TextInput style={styles.inputKeyStyle}
                                ref='Key_3'
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                onFocus={() => { }}
                                onBlur={() => { }}
                                onChangeText={(input) => this.onChangeText(input, 3)}
                                value={this.state.keys[3]} />
                        </View>
                        <View style={styles.keyBoxStyle}>
                            <TextInput style={styles.inputKeyStyle}
                                ref='Key_4'
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                onFocus={() => { }}
                                onBlur={() => { }}
                                onChangeText={(input) => this.onChangeText(input, 4)}
                                value={this.state.keys[4]} />
                        </View>
                        <View style={styles.keyBoxStyle}>
                            <TextInput style={styles.inputKeyStyle}
                                ref='Key_5'
                                autoCapitalize='none'
                                autoCorrect={false}
                                underlineColorAndroid='transparent'
                                onFocus={() => { }}
                                onBlur={() => { }}
                                onChangeText={(input) => this.onChangeText(input, 5)}
                                value={this.state.keys[5]} />
                        </View>
                    </View>

                    {status}
                </View>
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
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isShowWarning}>
                    <View style={styles.dialogStyle}>
                        <View style={styles.dialogWarningStyle}>
                            <View style={{ height: 20 }} />
                            <Image source={require('../../images/security_key/warning.png')}
                                style={{ height: 40, width: 40 }} resizeMode='contain' />
                            <View style={{ height: 20 }} />
                            <Text style={{ fontWeight: 'bold', color: Config.textColor, fontSize: 20, textAlign: 'center' }}>
                                Security Key Not Match
                            </Text>
                            <View style={{ height: 20 }} />
                            <TouchableOpacity style={styles.enterButtonStyle} onPress={() => { this.reset() }}>
                                <Text style={{ color: '#fff' }}>Enter Again</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.resendButtonStyle} onPress={() => { this.back() }}>
                                <Text>Resend Again</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.isShowSuccess}>
                    <View style={styles.dialogStyle}>
                        <View style={styles.dialogSuccessStyle}>
                            <Image source={require('../../images/security_key/check.png')}
                                style={{ height: 40, width: 40 }} resizeMode='contain' />
                            <Text style={{ fontWeight: 'bold', color: Config.textColor, fontSize: 20, textAlign: 'center' }}>
                                Congratulations!
                            </Text>
                            <Text style={{ fontWeight: 'bold', color: Config.textColor, fontSize: 20, textAlign: 'center' }}>
                                Security Key is Match
                            </Text>
                            <View style={{ height: 20 }} />
                            <TouchableOpacity style={styles.enterButtonStyle} onPress={() => { this.backAndEnter() }}>
                                <Text style={{ color: '#fff' }}>Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
        paddingTop: 50
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
    keysWrapper: {
        height: 30,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    keyBoxStyle: {
        borderColor: Config.textColor,
        borderWidth: 2,
        borderRadius: 2,
        backgroundColor: '#fff',
        width: 35,
        height: 35,
        marginHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputKeyStyle: {
        width: 30,
        height: 30,
        color: '#000',
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center'
    },
    footerStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingVertical: 20
    },
    footerButtonStyle: {
        fontWeight: 'bold',
        color: Config.textColor,
        textAlign: 'center'
    },
    dialogStyle: {
        flex: 1,
        backgroundColor: 'rgba(44, 62, 80, 0.6)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogWarningStyle: {
        width: 250,
        height: 250,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dialogSuccessStyle: {
        width: 250,
        height: 250,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    enterButtonStyle: {
        backgroundColor: Config.primaryColor,
        width: 230,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    resendButtonStyle: {
        backgroundColor: '#eee',
        width: 230,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
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
)(Confirmation);