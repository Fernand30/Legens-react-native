import React, { Component } from 'react';
import { Text, View, ListView, TextInput, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';

import Config from '../../Config';

export default class RadioButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: this.props.value,
            radio: this.props.radioData
        };
    }

    renderSelectedRadio(item) {
        return (
            <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }} onPress={() => {
                this.props.onSelect(item.id);
                this.setState({ selected: item.id })
            }}>
                <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: Config.primaryColor, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ height: 18, width: 18, borderRadius: 9, backgroundColor: Config.primaryColor }}>

                    </View>
                </View>
                <Text> {item.text}</Text>
            </TouchableOpacity>
        );
    }

    renderNormalRadio(item) {
        return (
            <TouchableOpacity key={item.id} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }} onPress={() => {
                this.props.onSelect(item.id);
                this.setState({ selected: item.id })
            }}>
                <View style={{ height: 30, width: 30, borderRadius: 15, borderWidth: 1, borderColor: Config.primaryColor }}>

                </View>
                <Text> {item.text}</Text>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <View style={styles.rootStyle}>
                <View style={styles.headerWrapperStyle}>
                    <Text style={styles.headerStyle}>{this.props.title}</Text>
                </View>
                <View style={styles.inputWrapperStyle}>
                    {this.state.radio.map((item, index) => {
                        if (this.state.selected == item.id) {
                            return this.renderSelectedRadio(item);
                        } else {
                            return this.renderNormalRadio(item);
                        }
                    })}
                </View>
            </View>
        );
    }
}

const styles = {
    rootStyle: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        
        marginVertical: 5,
        marginHorizontal: 10
    },
    headerWrapperStyle: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5
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