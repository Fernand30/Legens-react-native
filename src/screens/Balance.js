import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity, DatePickerAndroid } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

class Balance extends Component {
    static navigationOptions = {
        title: 'Balance'
    };

    constructor(props) {
        super(props);

        this.state = {

        };

        this.root = this.props.component.root;
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerStyle}>
                    <Image
                        source={require('../../images/balance_gradient.png')}
                        style={{
                            width: '100%',
                            height: 200,
                            position: 'absolute',
                            left: 0,
                            top: 0
                        }} />
                    <Text style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'transparent' }}>Balance Not Enough</Text>
                    <Text style={{ color: '#fff', fontWeight: 'bold', backgroundColor: 'transparent', fontSize: 50 }}>$-10</Text>
                </View>
                <View style={styles.middleStyle}>
                    <Text style={styles.middleTestStyle}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry $-10. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Text>
                </View>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.buttonFullBackgroundStyle} onPress={() => { }}>
                        <Text style={{ color: '#fff' }}>UPDATE PAYMENT CART</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#f7f7f7',
        flex: 1,
        flexDirection: 'column',
    },
    headerStyle: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleStyle: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    middleTestStyle: {
        textAlign: 'center'
    },
    buttonWrapper: {
        paddingHorizontal: 10
    },
    buttonFullBackgroundStyle: {
        backgroundColor: Config.primaryColor,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 10
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
)(Balance);