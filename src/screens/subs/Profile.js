import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };

        this.root = this.props.component.root;
    }

    logout() {
        this.root.setToken(null);
        this.root.changePage('login');
    }

    renderLogoutButton() {
        return (
            <TouchableOpacity style={{
                height: 40, backgroundColor: Config.primaryColor,
                justifyContent: 'center', alignItems: 'center'
            }} onPress={() => { this.logout(); }}>
                <Text style={{ color: '#fff' }}>Logout</Text>
            </TouchableOpacity>
        );
    }

    editProfile() {
        this.root.navigate('EditProfile');
    }

    transactionHistory() {
        this.root.navigate('TransactionHistory');
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.photoWrapperStyle}>
                    <Image source={require('../../../images/dummy/user_1.png')}
                        style={{ width: 60, height: 60, resizeMode: 'contain', borderRadius: 30 }} />
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'column', flex: 1 }}>
                    <TouchableOpacity style={styles.rowStyle} onPress={() => { this.editProfile() }}>
                        <Image source={require('../../../images/other/icon_profile.png')} style={styles.iconStyle} />
                        <Text style={styles.rowTextStyle}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowStyle} onPress={() => { this.transactionHistory() }}>
                        <Image source={require('../../../images/other/icon_withdraw.png')} style={styles.iconStyle} />
                        <Text style={styles.rowTextStyle}>Withdraw</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowStyle} onPress={() => { this.transactionHistory() }}>
                        <Image source={require('../../../images/other/icon_topup.png')} style={styles.iconStyle} />
                        <Text style={styles.rowTextStyle}>Top Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowStyle} onPress={() => { this.transactionHistory() }}>
                        <Image source={require('../../../images/other/icon_balance.png')} style={styles.iconStyle} />
                        <Text style={styles.rowTextStyle}>Balance</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.rowStyle} onPress={() => { this.transactionHistory() }}>
                        <Image source={require('../../../images/other/icon_verify.png')} style={styles.iconStyle} />
                        <Text style={styles.rowTextStyle}>Verify Info</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.infoDepositStyle}>
                    <Text style={{ fontSize: 16 }}>You need to deposit 199RMB</Text>
                    <Text style={{ fontSize: 16 }}>money, to use services</Text>
                    <Image source={require('../../../images/other/icon_money_transparent.png')} style={styles.iconTransparentStyle} />
                </View>
                <TouchableOpacity style={styles.depositButtonStyle}>
                    <Text style={{ color: '#fff' }}>DEPOSIT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 10
    },
    photoWrapperStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 20
    },
    rowTextStyle: {
        fontSize: 20,
        width: 200,
        color: Config.textColor
    },
    iconStyle: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        tintColor: Config.primaryColor,
        marginRight: 20,
        marginLeft: 60
    },
    infoDepositStyle: {
        height: 80,
        backgroundColor: '#f1fff2',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        overflow: 'hidden'
    },
    depositButtonStyle: {
        backgroundColor: Config.primaryColor,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconTransparentStyle: {
        position: 'absolute',
        left: 10,
        top: 10,
        width: 100,
        height: 100,
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
)(Profile);