import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../../Config';

class Tab2 extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <Image source={require('../../../../images/notification/icon_bell.png')}
                    style={{
                        width: 200, height: 200,
                        resizeMode: 'contain', tintColor: '#bdc3c7',
                        marginBottom: 50
                    }} />
                <Text style={{ fontSize: 35, color: '#bdc3c7', marginBottom: 20, fontWeight: 'bold'}}>
                    No Notifications
                </Text>
                <Text style={{ fontSize: 20, color: '#bdc3c7', textAlign: 'center' }}>
                    {`You don’t have any notification \n at this time`}
                </Text>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
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
)(Tab2);