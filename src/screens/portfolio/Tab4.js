import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Config from '../../Config';

class Tab4 extends Component {
    static navigationOptions = {
        title: '个人评价',
    };

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <Text>Tab 4</Text>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#f3f3f3',
        flex: 1,
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
)(Tab4);