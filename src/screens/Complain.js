import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../Config';

class Complain extends Component {
    static navigationOptions = {
        title: '投诉',
    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <ScrollView>
                    <View>
                        <View style={{ height: 10 }} />
                        <View style={styles.complainInputWrapperStyle}>
                            <TextInput style={{ flex: 1, fontSize: 15 }} multiline={true} placeholder='请在此输入投诉理由' />
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={require('../../images/member_list/member_1.png')}
                                    style={{ height: 50, width: 50, marginRight: 10 }} />
                                <TouchableOpacity style={{
                                    height: 50, width: 50,
                                    borderColor: Config.textSecondaryColor,
                                    borderWidth: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Ionicons name="ios-add" size={50} color={Config.textSecondaryColor} style={{ backgroundColor: 'transparent' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ height: 10 }} />
                        <TouchableOpacity style={styles.sendButton}>
                            <Text style={{ color: '#fff', fontSize: 18 }}>提交投诉</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#f3f3f3',
        flex: 1,
    },
    rowStyle: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    complainInputWrapperStyle: {
        height: 200,
        backgroundColor: '#fff',
        padding: 10
    },

    sendButton: {
        margin: 10,
        backgroundColor: Config.primaryColor,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
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
)(Complain);