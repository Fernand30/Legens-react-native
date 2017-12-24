import React, { Component } from 'react';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Config from '../../Config';

export default class Input extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerWrapperStyle}>
                    <Text style={styles.headerStyle}>{this.props.title}</Text>
                </View>
                <View style={styles.inputWrapperStyle}>
                    <TextInput style={styles.inputStyle}
                        placeholder={this.props.placeholder}
                        autoCapitalize='none'
                        autoCorrect={false}
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.props.onChangeText(text)}
                        value={this.props.value} />
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#7f8c8d',
        marginVertical: 5,
        marginHorizontal: 10
    },
    headerWrapperStyle: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor: '#ecf0f1',
        borderTopLeftRadius: 5,
        borderTopRightRadius:5
    },
    headerStyle: {
        fontSize: 12,
        color: '#7f8c8d'
    },
    inputWrapperStyle: {
        paddingVertical: 0,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        height: 40,
        fontSize: 14
    }
};